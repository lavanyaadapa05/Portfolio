// source/components/ProjectCard.jsx
export default function ProjectCard({ name, description, link }) {
  return (
    <div className=" relative z-10 bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-6 text-gray-800">

    
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm mb-4">{description}</p>
      <a href={link} target="_blank" className="underline text-blue-300 hover:text-blue-500 transition">
        View Project →
      </a>
    </div>
  )
}
