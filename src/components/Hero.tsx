import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-2xl transform -translate-x-2" />
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl relative"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 mb-6">
              Vinura Ometh Welihinda
            </h1>
            <div className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 h-8 mb-8">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Open Source Contributor',
                  2000,
                ]}
                repeat={Infinity}
                className="font-light"
              />
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting elegant solutions to complex problems through clean code and innovative thinking.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mb-12">
            <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:contact@example.com" icon={<Mail />} label="Email" />
          </div>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            Let's Build Something Amazing!
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group"
    aria-label={label}
  >
    <div className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {icon}
    </div>
  </motion.a>
);