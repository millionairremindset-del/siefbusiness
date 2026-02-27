import { motion } from 'framer-motion';

interface TestimonialCardProps {
  image: string;
  message: string;
  reply: string;
  index: number;
}

export function TestimonialCard({ image, message, reply, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-1">
        {/* Glow border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.5), rgba(212, 160, 23, 0.5), rgba(247, 119, 55, 0.5))',
            opacity: 0.3,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Image container */}
        <div className="relative rounded-xl overflow-hidden bg-black">
          <motion.img
            src={image}
            alt="تقييم العميل"
            className="w-full h-auto object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

          {/* Overlay gradient */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 30%)',
            }}
          />

          {/* Quote icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-instagram-pink/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-instagram-pink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>

        {/* Text content */}
        <div className="relative p-4 space-y-3">
          {/* Customer message */}
          <div className="bg-white/5 rounded-lg p-3 border-r-2 border-instagram-pink">
            <p className="text-white text-sm leading-relaxed">{message}</p>
          </div>

          {/* Reply */}
          <div className="bg-instagram-purple/10 rounded-lg p-3 border-l-2 border-instagram-purple">
            <p className="text-gray-300 text-sm leading-relaxed">{reply}</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212, 160, 23, 0.2), transparent)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
