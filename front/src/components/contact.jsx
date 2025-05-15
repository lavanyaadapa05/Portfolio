import React from 'react'
import Lottie from "lottie-react";
import animationData from '../bg.json';           // Main background
import sideAnimation from '../side.json';         // Your new side animation

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 🔮 Full background animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 🌀 Side animation (left) */}
      


      {/* 🎯 Centered content */}
      <div className="relative z-10 text-center text-white px-4 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          Don't just visit.Say Hii.
        </h1>

        <div className="space-y-3 text-lg sm:text-xl">
          <p className="drop-shadow-md">
            📧 <a href="mailto:youremail@example.com" className="underline hover:text-neon transition">
              lavanyaadapa05@gmail.com
            </a>
          </p>
          <p className="drop-shadow-md">
            💼 <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="underline hover:text-neon transition">
              https://www.linkedin.com/in/lavanyaadapa/
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
