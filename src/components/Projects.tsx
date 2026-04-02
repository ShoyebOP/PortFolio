import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: "Zaknotes",
    role: "Co-founder Project | Production System",
    description: "A powerful Linux CLI tool that converts online class URLs into study-ready Markdown notes using Google Gemini API.",
    detailedDescription: "Developed a robust CLI tool to streamline the learning process. It extracts audio from educational videos (including platforms like Vimeo via yt-dlp), chunks it efficiently, and processes it through the Gemini API to generate structured Markdown notes. It features seamless Notion integration for automatic note syncing, robust error handling for rate limits, and cookie-based authentication for private content.",
    tags: ["Python", "Gemini API", "Notion API", "yt-dlp", "ffmpeg"],
    github: "https://github.com/ShoyebOP/Zaknotes-python-varient",
    stats: "200+ lecture hours processed"
  },
  {
    title: "my-n8n",
    role: "DevOps & Automation",
    description: "A production-ready setup for running n8n workflow automation in GitHub Codespaces with secure public access.",
    detailedDescription: "Engineered a cloud-native development environment for n8n using GitHub Codespaces. This setup includes a watchdog script to manage container lifecycles, Docker integration for isolated execution, and Cloudflared tunnels to expose webhooks securely to the public internet. It significantly reduced environment setup time and provided a reliable, reproducible automation workspace.",
    tags: ["Shell", "Docker", "Cloudflared", "n8n", "YouTube-DL"],
    github: "https://github.com/ShoyebOP/my-n8n"
  },
  {
    title: "Single-Product Landing Page",
    role: "Freelance Project",
    description: "A conversion-focused single-page landing site for selling a book, featuring automated order processing via Telegram API.",
    detailedDescription: "Designed and developed a high-converting landing page for a book launch. Built with React and TypeScript, it features a clean, responsive UI and integrates directly with the Telegram API to process orders instantly without a traditional backend. This project honed my skills in frontend performance optimization and lightweight serverless integrations.",
    tags: ["HTML/CSS", "TypeScript", "Telegram API"],
    github: "https://github.com/ShoyebOP/muaz",
    livePreview: "https://mukhbondho.vercel.app/"
  },
  {
    title: "facebook-auto-messenger",
    role: "Automation",
    description: "Browser automation script for Facebook Messenger, demonstrating API integration capabilities and DOM manipulation.",
    detailedDescription: "Created a sophisticated browser automation tool using Playwright and Node.js. It integrates with Notion as a CRM to fetch target profiles, uses Mistral AI to generate personalized outreach messages, and autonomously navigates Facebook Messenger to send them. This project deepened my understanding of headless browsers, DOM manipulation, and anti-bot mitigation strategies.",
    tags: ["JavaScript", "Playwright", "Notion API", "Mistral AI"],
    github: "https://github.com/ShoyebOP/facebook-auto-messenger"
  },
  {
    title: "Zakbot",
    role: "Co-Founder's Project | Production System",
    description: "Production-level customer support chatbot. Architected to handle complex customer queries with high accuracy.",
    detailedDescription: "As a Co-Founder, I spearheaded the development of this production-level customer support chatbot. It is architected to handle complex, multi-turn customer queries with high accuracy and reliability. Working on Zakbot was a massive learning experience—it pushed me to master advanced prompt engineering, context window management, and the deployment of scalable, fault-tolerant AI systems in a live production environment.",
    tags: ["AI", "Chatbot", "Customer Support", "System Design"],
    private: true
  }
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent work in AI and automation." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const isExpanded = expandedProject === project.title;
            
            return (
              <div key={project.title} className="relative h-full">
                {/* Placeholder to maintain grid size */}
                <div className="invisible flex flex-col h-full p-6 border border-transparent">
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {project.role}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {project.stats && (
                    <div className="mb-6 py-2 px-3 rounded-lg text-sm font-medium border border-transparent">
                      Impact: {project.stats}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-transparent flex items-center gap-4">
                    <span className="text-sm font-medium flex items-center gap-2">
                      Placeholder
                    </span>
                  </div>
                </div>

                {/* Actual Animated Card */}
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onHoverStart={() => !project.private && setExpandedProject(project.title)}
                  onHoverEnd={() => !project.private && setExpandedProject(null)}
                  onClick={() => !project.private && setExpandedProject(isExpanded ? null : project.title)}
                  className={`absolute top-0 left-0 w-full bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 flex flex-col group transition-shadow duration-300 ${!project.private ? 'cursor-pointer hover:shadow-xl' : ''} ${isExpanded ? 'z-50 h-auto' : 'z-10 h-full'}`}
                >
                  <motion.div layout className="mb-4">
                    <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {project.role}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-2 text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                  </motion.div>
                  
                  <motion.p layout className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">
                    {project.description}
                  </motion.p>
                  
                  <AnimatePresence>
                    {isExpanded && !project.private && project.detailedDescription && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 pb-4 border-b border-neutral-100 dark:border-neutral-700">
                          <strong className="text-neutral-700 dark:text-neutral-300">Deep Dive & Learnings:</strong><br/>
                          {project.detailedDescription}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {project.stats && (
                    <motion.div layout className="mb-6 py-2 px-3 bg-neutral-100 dark:bg-neutral-900/50 rounded-lg text-sm text-neutral-800 dark:text-neutral-200 font-medium border border-neutral-200 dark:border-neutral-700">
                      Impact: {project.stats}
                    </motion.div>
                  )}

                  <motion.div layout className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div layout className="pt-4 border-t border-neutral-100 dark:border-neutral-700 flex items-center gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    {project.livePreview && (
                      <a href={project.livePreview} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Preview
                      </a>
                    )}
                    {!project.github && !project.livePreview && (
                      <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 flex items-center gap-2">
                        Private Repository
                      </span>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
