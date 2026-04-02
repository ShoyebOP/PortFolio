import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About Me" />
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert text-neutral-600 dark:text-neutral-300"
          >
            <p className="mb-4">
              I'm an AI Automation Expert and Co-founder and COO at <strong>Zaktomate</strong>, an AI automation agency helping businesses and individuals automate parts or entire workflows. My focus is on architecting end-to-end automation systems that deliver measurable efficiency gains.
            </p>
            <p>
              I specialize in bridging the gap between cutting-edge AI capabilities and practical business applications, ensuring that technology serves a clear, valuable purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-neutral-900 dark:text-white">What I Bring</h3>
            <ul className="space-y-4">
              {[
                "Deep expertise in AI model selection and capabilities",
                "Production experience with RAG pipelines and n8n workflow automation",
                "Hands-on experience with complex file handling and AI limitations",
                "Continuous learning of new AI models and automation tools",
                "Practical insights into edtech platform challenges"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 flex items-center justify-center text-sm mt-0.5">✓</span>
                  <span className="text-neutral-600 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
