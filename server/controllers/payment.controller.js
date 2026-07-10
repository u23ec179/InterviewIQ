import Payment from "../models/payment.model.js";
import User from "../models/user.model.js";
import razorpay from "../services/razorpay.service.js";
import crypto from "crypto"

export const createOrder = async (req,res) => {
    try {
        const {planId, amount, credits} = req.body;
          if (!amount || !credits) {
      return res.status(400).json({ message: "Invalid plan data" });
    }

        const options = {
            amount: Math.round(amount * 100), // convert to paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                planId: planId,
                credits: credits
            }
        };

        console.log("Creating Razorpay order with options:", options);
        const order = await razorpay.orders.create(options);
        console.log("Order created successfully:", order.id);

        await Payment.create({
            userId: req.userId,
            planId,
            amount,
            credits,
            razorpayOrderId: order.id,
            status: "created",
        });

        return res.json(order);

    } catch (error) {
        console.error("Razorpay order creation error:", error.message);
        return res.status(500).json({
            message: `Failed to create Razorpay order: ${error.message}`,
            details: error.response?.data || error.message
        });
    }
}


export const verifyPayment = async (req,res) => {
    try {
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
        
        // Validate required fields
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ 
                message: "Missing payment verification data" 
            });
        }

        // Create signature
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");

        console.log("Signature verification - Expected:", expectedSignature);
        console.log("Signature verification - Received:", razorpay_signature);
        
        if (expectedSignature !== razorpay_signature) {
            console.error("Signature mismatch!");
            return res.status(400).json({ 
                message: "Invalid payment signature - Signature mismatch" 
            });
        }

        console.log("Signature verified! Finding payment record...");
        
        const payment = await Payment.findOne({
            razorpayOrderId: razorpay_order_id,
        });

        if (!payment) {
            console.error("Payment record not found for order:", razorpay_order_id);
            return res.status(404).json({ 
                message: "Payment record not found" 
            });
        }

        if (payment.status === "paid") {
            console.log("Payment already processed");
            return res.json({ message: "Already processed" });
        }

        // Update payment record
        payment.status = "paid";
        payment.razorpayPaymentId = razorpay_payment_id;
        await payment.save();
        console.log("Payment status updated to 'paid'");

        // Add credits to user
        const updatedUser = await User.findByIdAndUpdate(payment.userId, {
            $inc: { credits: payment.credits }
        }, {new: true});

        console.log("Credits added to user:", payment.credits);
        
        res.json({
            success: true,
            message: "Payment verified and credits added",
            user: updatedUser,
        });

    } catch (error) {
        console.error("Payment verification error:", error.message);
        return res.status(500).json({
            message: `Failed to verify Razorpay payment: ${error.message}`,
            details: error.message
        });
    }
}