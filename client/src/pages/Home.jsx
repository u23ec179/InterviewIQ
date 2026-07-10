import React from 'react'
import Navebar from '../components/Navebar'
import {motion} from "motion/react"
import {BsRobot, 
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText} from "react-icons/bs"
import { useSelector } from 'react-redux'
import { HiSparkles } from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import AuthModel from '../components/AuthModel'
import evalImg from "../assets/ai-ans.png"
import hrImg from "../assets/HR.png"
import techImg from "../assets/tech.png"
import confidenceImg from "../assets/confi.png"
import creditImg from "../assets/credit.png"
import resumeImg from "../assets/resume.png"
import pdfImg from "../assets/pdf.png"
import analyticsImg from "../assets/history.png"
import Footer from '../components/Footer'


function Home() {
  const {userData} = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='min-h-screen bg-[#f3f3f3] flex  flex-col'>
        <Navebar />

        <div className='flex-1 px-6 py-20'>
         <div className="max-w-6xl mx-auto">

         


          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2
            rounded-full flex items-center gap-2">
              <HiSparkles size={16} className="bg-green-50 text-green-600"/>
              AI Powered Smart Interview Platform
            </div>
          </div>

          <div className="text-center mb-28">
              <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4x1 md:text-6x1 font-semibold
              leading-tight max-w-4x1 mx-auto'>
             Practice Interviews with
             <span className="relative inline-block">
              <span className="bg-green-100 text-green-600 px-5 py-1
              rounded-full">
              AI Intelligence
              </span>
             </span>

              </motion.h1>
              <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className='text-gray-500 mt-6 max-w-2x1 mx-auto text-lg'>
                Get ready for your interviews with our AI-powered platform that simulates real interview scenarios and provides valuable feedback.
              </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4mt-10">
            <motion.button
            onClick={()=>{
              if(!userData) {
                setShowAuth(true)
                return
              }
              navigate('/interview')
            }}
            whileHover={{ opacity: 0.9, scale: 1.05 }}
            whileTap={{ opacity: 1, scale: 0.98 }}
            className='bg-black text-white px-10 py-3 rounded-full
             hover:opacity-90 transition shadow-md '>
              start Interview
            </motion.button>

            <motion.button
            onClick={()=>{
              if(!userData) {
                setShowAuth(true)
                return
              }
              navigate('/history')
            }}
            whileHover={{ opacity: 0.9, scale: 1.05 }}
            whileTap={{ opacity: 1, scale: 0.98 }}
            className='border border-gray-300  px-10 py-3 rounded-full
             hover:bg-gray-100 transition '>
              View History
            </motion.button>


          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center
         items-center gap-10 mt-28'>
          {
           [
            {
              icon: <BsRobot size={24} />,
              step: "Step 1",
              title: "AI-Powered Interviewer",
              description: "Our AI-powered interviewer simulates real interview scenarios, providing you with a realistic and interactive experience."
            },
            {
              icon: <BsMic size={24} />,
              step: "Step 2",
              title: "Voice Interaction",
              description: "Interact with our AI interviewer through natural voice conversation, making the experience more engaging and realistic."
            },
            {
              icon: <BsClock size={24} />,
              step: "Step 3",
              title: "Time Management",
              description: "Manage your time effectively during the interview, ensuring you cover all important points within the given timeframe."
            }
           ].map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + index * 0.2 }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            
            className={`relative 
              bg-white rounded-3x1 border-2 border-green-100
              hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md
              hover:shadow-2xl transition-all duration-300
              ${index === 0 ? "rotate-[-4 deg]":""}
              ${index === 1 ? "rotate-[-3deg] md:-mt-6 shadow-xl":""}
              ${index === 2 ? "rotate-[-3deg]":""}
              `} >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white border-2 
              border-green-500 text-green-600 w-16 h-16 rounded-2x1 flex 
              items-center justify-center shadpw-lg">
                {item.icon}
              </div>

              <div className="pt-10 text-center">
                <div className="text-xs text-green-600 font-semibold mb-2
                tracking-wider">{item.step}</div>
                <h3 className="font-semibold text-lg text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>


              </motion.div>
            ))
          }
        </div>

      <div className="mt-32">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4x1 font-semibold text-center mb-16'>
          Advanced AI{" "}
          <span className="text-green-600 ">Capabilities</span>        
          </motion.h2>
       <div className="grid md:grid-cols-2 gap-10">
         {
          [
            {
              img: evalImg,
              icon: <BsBarChart size={24} />,
              title: "AI Evaluation",
              description: "Our AI evaluates your responses based on content, delivery, and overall performance."
            },
            {
              img:resumeImg,
              icon: <BsFileEarmarkText size={24} />,
              title: "Resume Analysis",
              description: "Get insights into your resume and learn how to improve it for better chances of landing interviews."
            },
            {
              img:pdfImg,
              icon: <BsFileEarmarkText size={24} />,
              title: "PDF Generation",
              description: "Generate a professional PDF report of your interview performance and feedback for future reference."
            },
            {
              img: analyticsImg,
              icon: <BsBarChart size={24} />,
              title: "Analytics & Insights",
              description: "Access detailed analytics and insights on your interview performance to track your progress over time."
            }
          ].map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 ,delay: index * 0.2 }}
            whileHover={{  scale: 1.05 }}
            className="bg-white border border-gray-200 rounded-3x1 p-8
            shadow-sm hover:shadow-xl transition-all">
            
              <div className="flex flex-col md:flex-col items-center
              gap-8">
                <div className="w-full md:w-1/2 flex justify-center">
                <img src={item.img} alt={item.title} 
                className="w-full h-auto object-contain max-h-64" />
                </div>

                <div className="w-full md:w-1/2">
                 <div className="bg-green-50 text-green-600 w-12 h-12
                 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                 </div>
                  <h3 className="font-semibold mb-3 text-xl">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>

              </div>
            </motion.div>
         ))
         }
      </div>
      </div>

      <div className="mt-32">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4x1 font-semibold text-center mb-16'>
          Multilple Interview{" "}
          <span className="text-green-600 ">Modes</span>        
          </motion.h2>
       <div className="grid md:grid-cols-2 gap-10">
         {
          [
            {
              img: hrImg,
              title: "HR Simulation",
              description: "Practice your interview skills in a realistic HR simulation environment."
            },
            {
              img: techImg,
              title: "Technical Simulation",
              description: "Test your technical knowledge and problem-solving skills in a simulated technical interview."
            },
            {
              img: confidenceImg,
              title: "Confidence Building",
              description: "Build your confidence and improve your communication skills through practice interviews."
            },
            {
              img: creditImg,
              title: "Credit Assessment",
              description: "Assess your creditworthiness and financial knowledge through simulated credit interviews."
            }
          ].map((mode, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 ,delay: index * 0.2 }}
            whileHover={{  y: -6 }}
            className="bg-white border border-gray-200 rounded-3x1 p-8
            shadow-sm hover:shadow-xl transition-all">
            
              <div className="flex items-center justify-center
              gap-6">
                <div className="w-1/2">
                  <h3 className="font-semibold text-xl mb-3">
                     {mode.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {mode.description}
                  </p>
                </div>
                
                {/* {RIGHT IMAGE} */}
                <div className="w-1/2 flex justify-end">
                  <img src={mode.img}
                  alt={mode.title}
                  className="w-28 h-28 object-contain" />
                </div>
              </div>
            </motion.div>
         ))
         }
      </div>
      </div>

       </div>
       </div>
       {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

        <Footer />
    </div>
    
  )
}

export default Home