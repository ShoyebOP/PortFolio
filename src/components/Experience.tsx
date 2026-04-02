import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Experience & Approach" />
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700 pb-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-800 dark:bg-neutral-200 ring-4 ring-neutral-100 dark:ring-neutral-950"></div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">Co-founder, COO & AI Automation Expert</h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium mt-1 mb-4"><a href="https://www.zaktomate.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-neutral-900 dark:text-white">Zaktomate</a> — AI Automation Agency</p>
              
              <ul className="space-y-4 text-neutral-600 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0"></span>
                  Architecting end-to-end automation solutions for business workflows
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0"></span>
                  Specializing in RAG pipelines, n8n workflows, and AI model integration
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0"></span>
                  Developing internal tools like Zaknotes for knowledge capture
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0"></span>
                  Advising on AI tool selection and implementation strategies
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm"
          >
            <h3 className="font-display text-xl font-bold mb-6 text-neutral-900 dark:text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
              What Clients Can Expect
            </h3>
            
            <div className="space-y-6">
              {[
                { title: "Trustworthy Solutions", desc: "Clear communication about capabilities and limitations." },
                { title: "End-to-End Ownership", desc: "From problem discovery to deployment and maintenance." },
                { title: "AI Expertise", desc: "Right model, right use case, right implementation." },
                { title: "Automation First", desc: "Reducing manual work through intelligent workflows." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-neutral-700 dark:text-neutral-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
