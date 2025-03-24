import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "InterviewSuite - AI Powered Interview Platform",
    description: "InterviewSuite is an AI-powered interview preparation platform that analyzes confidence, eye contact, and emotions. It generates tailored questions based on job roles and resumes, helping candidates and recruiters streamline the interview process.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    technologies: ["React", "Flask", "OpenCV", "Tensorflow"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Real Estate Agency Website",
    description: "Developed a responsive real estate platform using ReactJS, featuring property listings with images, descriptions, and pricing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    technologies: ["React", "Bootstrap" ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Smart Research Assistant",
    description: "Developing a browser extension with HTML, CSS, and JavaScript, integrating the Google Gemini API via a Spring Boot (Java) backend. Enables AI-powered research assistance directly from any webpage. Demonstrates full-stack development, API integration, and AI application skills",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "Javascript", "Java"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },

  
];

export const Projects = () => {
  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my most impactful work, showcasing innovative solutions and technical expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 rounded-full text-sm backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 backdrop-blur-sm transition-colors group/link"
            aria-label="View GitHub repository"
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 backdrop-blur-sm transition-colors group/link"
            aria-label="View live project"
          >
            <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};