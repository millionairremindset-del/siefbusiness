import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Users, DollarSign, Star, Shield } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'عميل راضٍ',
    color: 'from-instagram-purple to-instagram-pink',
  },
  {
    icon: DollarSign,
    value: 3000,
    suffix: '$',
    label: 'متوسط الدخل الشهري',
    color: 'from-instagram-pink to-instagram-orange',
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'تقييم العملاء',
    color: 'from-instagram-orange to-instagram-yellow',
    isDecimal: true,
  },
  {
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'ضمان استعادة الأموال',
    color: 'from-instagram-yellow to-instagram-purple',
  },
];

export function StatsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-instagram-purple/5 via-instagram-pink/5 to-instagram-orange/5" />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center overflow-hidden">
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${stat.color}`}
                  style={{ opacity: 0.05 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-inter">
                  {stat.isDecimal ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.span>
                  ) : (
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      className="gradient-text"
                    />
                  )}
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
