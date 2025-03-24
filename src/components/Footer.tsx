import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-gray-200/50 dark:via-gray-800/50 dark:to-gray-900/50" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Vinura Ometh Welihinda</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full-stack developer passionate about creating innovative solutions and beautiful user experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/Omethw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com/in/vinura-ometh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:omethw@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Vinura Ometh Welihinda © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};