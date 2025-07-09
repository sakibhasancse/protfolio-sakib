const ProjectCard = ({ project, index }) => (
  <div className={`bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 border border-gray-700 ${
    isVisible.projects ? 'animate-fade-in-up' : 'opacity-0'
  }`} style={{ animationDelay: `${index * 200}ms` }}>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm">
        {project.highlight}
      </span>
    </div>
    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard