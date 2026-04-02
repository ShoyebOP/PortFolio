import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: "Zaknotes (Python Variant)",
    role: "Co-founder Project",
    description: "A powerful Linux CLI tool that converts online class URLs into study-ready Markdown notes using Google Gemini API. Features smart content filtering and auto-push to Notion.",
    tags: ["Python", "Gemini API", "Notion API", "yt-dlp", "ffmpeg"],
    github: "https://github.com/ShoyebOP/Zaknotes-python-varient",
    stats: "200+ lecture hours processed"
  },
  {
    title: "my-n8n",
    role: "DevOps & Automation",
    description: "A production-ready setup for running n8n workflow automation in GitHub Codespaces with sidecar services for secure public access via Cloudflared.",
    tags: ["Shell", "Docker", "Cloudflared", "n8n", "YouTube-DL"],
    github: "https://github.com/ShoyebOP/my-n8n"
  },
  {
    title: "Single-Product Landing Page",
    role: "Freelance Project",
    description: "A conversion-focused single-page landing site for selling a book, featuring real-time social proof and automated order processing via Telegram API.",
    tags: ["HTML/CSS", "TypeScript", "Telegram API"],
    github: "https://github.com/ShoyebOP/muaz"
  },
  {
    title: "facebook-auto-messenger",
    role: "Automation",
    description: "Browser automation script for Facebook Messenger, demonstrating API integration capabilities and DOM manipulation.",
    tags: ["JavaScript", "Browser Automation"],
    github: "https://github.com/ShoyebOP/facebook-auto-messenger"
  },
  {
    title: "Zakbot",
    role: "Production System",
    description: "Production-level customer support chatbot. Architected to handle complex customer queries with high accuracy.",
    tags: ["AI", "Chatbot", "Customer Support"],
    private: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent work in AI and automation." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 flex flex-col h-full group hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  {project.role}
                </span>
                <h3 className="font-display text-xl font-bold mt-2 text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              {project.stats && (
                <div className="mb-6 py-2 px-3 bg-neutral-100 dark:bg-neutral-900/50 rounded-lg text-sm text-neutral-800 dark:text-neutral-200 font-medium border border-neutral-200 dark:border-neutral-700">
                  Impact: {project.stats}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700 flex items-center gap-4">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                ) : (
                  <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 flex items-center gap-2">
                    Private Repository
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
