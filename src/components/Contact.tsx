import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-900 dark:bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflow?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need a custom RAG pipeline, n8n workflow, or strategic advice on AI implementation, I'm here to help.
          </p>
          
          <a
            href="mailto:starshoyeb@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-neutral-900 font-bold text-lg hover:bg-neutral-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            starshoyeb@gmail.com
          </a>

          <div className="mt-16 flex justify-center gap-8">
            <a href="https://github.com/ShoyebOP" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shoyeb-morshed/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/shoyeb.morshed.3" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <Facebook className="w-8 h-8" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
