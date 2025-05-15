// source/app/projects/page.jsx
'use client'
import CloudsBackground from './ui/cloudybackground'
import ProjectCard from './ui/projectcars'

const projects = [
  {
    name: 'Connect Local',
    description: 'Connect Local is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The platform facilitates booking local service providers such as barbers, plumbers, tailors, and milk vendors. It offers user-friendly interfaces for both customers and service providers, along with robust backend functionalities to manage bookings, user data, and communications.',
    link: 'https://connect-local-frontendnew.onrender.com/',
  },
  {
    name: 'Alexa-mimic',
    description: 'This project is a simple voice assistant (like Alexa) built using Python. It listens for commands using the microphone, processes the audio, and responds using text-to-speech. The assistant can play songs, tell the time, give jokes, and search Wikipedia, among other functionalities.',
    link: 'https://github.com/lavanyaadapa05/alexa',
  },
  {
    name: 'Technova website',
    description: 'Technova is a website we developed for our college fest with the goal of streamlining event registrations and enhancing the participant experience. Although it didnt make it to the final deployment or live screens during the fest, it was a valuable learning experience for me. We are proud of the effort and innovation we put into the project, and we welcome you to take a look at our work.',
    link: 'https://techniva-site.com',
  },
  {
    name: 'Clean Code',
    description: 'This project is an AI-powered chatbot that evaluates code cleanliness based on the principles outlined in Clean Code by Robert C. Martin. The chatbot provides structured feedback on uploaded code files and user queries, helping developers write better, maintainable code.',
    link: 'https://github.com/lavanyaadapa05/CleanCode',
  },
]

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f0f0] text-gray-900">
      {/* Cloudy 3D background */}
      <div className="absolute inset-0 z-0">
        <CloudsBackground />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 gap-6 backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold mb-8 drop-shadow-sm">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </div>
  )
}
