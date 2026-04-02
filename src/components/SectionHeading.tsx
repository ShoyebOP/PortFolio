import { motion } from 'motion/react';

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-20"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-zinc-800 dark:bg-zinc-200 rounded-full mt-6"></div>
    </motion.div>
  );
}
