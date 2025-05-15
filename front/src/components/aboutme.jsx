import React from "react";
import SolarBackground from "../components/ui/solarbackground";
import animationData from "../anime.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white px-4 py-12">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <SolarBackground />
      </div>

      {/* Lottie Animation - corner */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none opacity-60">
        <Lottie animationData={animationData} loop={true} className="w-[400px] h-[500px]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 max-w-6xl mx-auto space-y-16 pr-0 md:pr-32">
        <motion.h1
          className="text-6xl font-extrabold text-center bg-gradient-to-r from-pink-300 to-blue-600 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABOUT ME
        </motion.h1>

        {/* Objective Section */}
        <motion.section
          className="p-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Objective</h2>
          <p className="text-lg leading-relaxed text-gray-100">
            I’m a passionate and curious developer driven by the thrill of building impactful tech solutions. 
            My journey spans full-stack dev, ML, AR/VR, generative AI, and design. 
            While I explore many domains, full-stack development is where I truly come alive. 
            You can explore my work and projects on GitHub. My ultimate goal is to keep evolving, creating, and 
            leaving a meaningful impact through technology.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="p-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">Education</h2>
          <ul className="text-lg text-gray-100 space-y-2">
            <li>
              🎓 <strong>B.Tech in CSE</strong> — Shri Vishnu Engineering College for Women (2022–2026) - CGPA: 9.10
            </li>
            <li>
              🎓 <strong>Class XII (MPC)</strong> — Aditya Junior College (2020–2022) - GPA: 9.69
            </li>
            <li>
              🎓 <strong>Class X</strong> — Mother Teressa Primary and High School (2020) - GPA: 10
            </li>
          </ul>
        </motion.section>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          <motion.div
            className="p-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-emerald-400">Skills</h2>
            <ul className="list-disc list-inside text-lg text-gray-100 space-y-2">
              <li><strong>Languages:</strong> Python, C, SQL, Java, Haskell</li>
              <li><strong>Web Development:</strong> HTML, CSS, JavaScript, Tailwind CSS</li>
              <li><strong>Frontend:</strong> React, Angular</li>
              <li><strong>Backend:</strong> Node.js, Express.js, Three.js</li>
              <li><strong>CS:</strong> DSA, Algorithms, Problem Solving</li>
              <li><strong>Databases:</strong> MySQL, MongoDB</li>
              <li><strong>Tools:</strong> Tableau, Excel, Git, SQL</li>
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            className="p-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-pink-400">Interests</h2>
            <ul className="list-disc list-inside text-lg text-gray-100 space-y-2">
              <li>Building new things</li>
              <li>Experimenting with Generative AI</li>
              <li>Being part of tech communities</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
