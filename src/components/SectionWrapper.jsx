import { motion } from "framer-motion";

export default function SectionWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      {children}

      {/* Section Divider */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

    </motion.div>
  );
}