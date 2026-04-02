import { motion } from 'motion/react';
import { Bot, Code2, Wrench, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: "AI & Automation",
    icon: Bot,
    skills: ["RAG Pipelines", "n8n Workflows", "AI Model Selection", "Prompt Engineering", "Workflow Orchestration"]
  },
  {
    title: "Core Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "Expert at Scripting", "API Integrations", "Browser Automation"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["GitHub Codespaces", "Docker", "Cloudflared", "YouTube-DL"]
  },
  {
    title: "Solutions Architecture",
    icon: Layers,
    skills: ["Website Creation", "Edtech Platform Architecture", "System Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Technical Skills" subtitle="The tools and technologies I use to build automation solutions." />
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white dark:bg-neutral-800/40 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700/50 shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (idx * 0.1) + (sIdx * 0.05) }}
                    className="px-4 py-2 bg-neutral-50 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 hover:!border-amber-500/50 hover:!bg-amber-50 dark:hover:!bg-amber-500/10 hover:!text-amber-700 dark:hover:!text-amber-300 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
