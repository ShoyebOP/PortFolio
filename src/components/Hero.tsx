import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, X, Facebook } from 'lucide-react';

export default function Hero() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  console.log("Hero Component Rendered");

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-neutral-600 dark:text-neutral-400 font-semibold tracking-wide uppercase text-sm mb-4">
                  AI Automation Expert
                </h2>
                <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400">
                    Shoyeb Morshed
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Building trust through intelligent automation solutions that bridge AI technology with real business needs. Co-founder at Zaktomate.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-white transition-colors gap-2 w-full sm:w-auto"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors w-full sm:w-auto"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                  <a href="https://github.com/ShoyebOP" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/shoyeb-morshed/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://www.facebook.com/shoyeb.morshed.3" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="mailto:starshoyeb@gmail.com" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div 
                className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto cursor-pointer group"
                onClick={() => setIsFullscreen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-400 dark:from-neutral-200 dark:to-neutral-600 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="/myimage.jpg"
                  alt="Shoyeb Morshed"
                  className="relative z-10 w-full h-full object-cover object-[center_15%] rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 z-20 rounded-full bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/5 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-medium text-sm bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity">
                    View Full
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsFullscreen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-900/50 hover:bg-neutral-800 rounded-full p-2 transition-all z-50"
              onClick={(e) => { e.stopPropagation(); setIsFullscreen(false); }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src="/myimage.jpg"
              alt="Shoyeb Morshed Fullscreen"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
