import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
  highlight?: boolean;
}

export function ProductCard({
  icon: Icon,
  title,
  description,
  features,
  index,
  highlight = false,
}: ProductCardProps) {
  return (
    <motion.div
      className={`
        relative group rounded-2xl p-6 md:p-8
        backdrop-blur-xl border transition-all duration-500
        ${highlight 
          ? 'bg-gradient-to-br from-instagram-purple/20 to-instagram-pink/20 border-instagram-pink/50' 
          : 'bg-white/5 border-white/10 hover:border-white/20'
        }
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(212, 160, 23, 0.2), transparent 70%)',
        }}
      />

      {/* Icon */}
      <motion.div
        className={`
          relative w-16 h-16 rounded-xl flex items-center justify-center mb-6
          ${highlight 
            ? 'bg-gradient-instagram' 
            : 'bg-white/10'
          }
        `}
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-white mb-3">
        {title}
      </h3>
      
      <p className="relative text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features list */}
      <ul className="relative space-y-2">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-2 text-sm text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-instagram-pink flex-shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* Corner decoration */}
      <div 
        className="absolute top-0 right-0 w-20 h-20 opacity-20"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(212, 160, 23, 0.3) 50%)',
          borderRadius: '0 1rem 0 0',
        }}
      />
    </motion.div>
  );
}
