import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isLast?: boolean;
}

export function StepCard({
  number,
  title,
  description,
  icon: Icon,
  index,
  isLast = false,
}: StepCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Content side */}
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Card */}
          <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group">
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(212, 160, 23, 0.15), transparent 70%)',
              }}
            />

            {/* Number badge */}
            <motion.div
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-instagram flex items-center justify-center text-white font-bold text-lg"
              animate={{
                boxShadow: [
                  '0 0 10px rgba(212, 160, 23, 0.5)',
                  '0 0 20px rgba(212, 160, 23, 0.8)',
                  '0 0 10px rgba(212, 160, 23, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {number}
            </motion.div>

            <h3 className="relative text-xl font-bold text-white mb-2 pr-6">{title}</h3>
            <p className="relative text-gray-400 leading-relaxed">{description}</p>
          </div>
        </motion.div>
      </div>

      {/* Center icon */}
      <div className="relative flex-shrink-0">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-instagram flex items-center justify-center relative z-10"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-instagram-pink/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-instagram-pink to-instagram-purple"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Empty side for balance */}
      <div className="flex-1" />
    </motion.div>
  );
}
