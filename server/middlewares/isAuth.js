import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const isAuth = async(req, res, next) => {
    try{
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({message:"user does not have a token"})
        }
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET)

        if(!verifyToken){
            return res.status(400).json({message:"user does not have a valid token"})
        }
        req.userId = verifyToken.userId
        next()
    }
    catch(error){
        return res.status(500).json({message:`isAuth middleware error: ${error}`})
    } 
    
}
export default isAuth   