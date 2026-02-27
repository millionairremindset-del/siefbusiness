import { motion } from 'framer-motion';
import { ShoppingCart, BookOpen, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'احصل على الباقة',
    description: 'اشترِ الباقة الآن واحصل على جميع الملفات فوراً بعد الدفع',
    icon: ShoppingCart,
  },
  {
    number: '02',
    title: 'تعلم الاستراتيجية',
    description: 'تابع الدليل خطوة بخطوة وتعلم كيفية بناء حساب ناجح من الصفر',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'استخدم الأدوات الجاهزة',
    description: 'استخدم القوالب والمنتجات الجاهزة للبيع مباشرة',
    icon: Zap,
  },
  {
    number: '04',
    title: 'ابدأ بالربح',
    description: 'ابدأ بتحقيق 3000$ شهرياً وتوسع أكثر مع الوقت',
    icon: TrendingUp,
  },
];

export function StepsSection() {
  return (
    <section className="relative section-padding overflow-hidden" id="how-it-works">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 160, 23, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-instagram-purple/10 text-instagram-purple text-sm font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            🚀 كيف يعمل
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            رحلتك نحو{' '}
            <span className="gradient-text">النجاح</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            أربع خطوات بسيطة تفصلك عن تحقيق دخل شهري من إنستجرام
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-instagram-purple via-instagram-pink to-instagram-orange hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ originY: 0 }}
          />

          {/* Steps list */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'radial-gradient(circle at 50% 0%, rgba(212, 160, 23, 0.15), transparent 70%)',
                        }}
                      />

                      {/* Step number */}
                      <motion.div
                        className="absolute -top-4 right-4 lg:right-auto lg:left-auto lg:-top-6 w-12 h-12 rounded-full bg-gradient-instagram flex items-center justify-center text-white font-bold text-lg"
                        animate={{
                          boxShadow: [
                            '0 0 15px rgba(212, 160, 23, 0.5)',
                            '0 0 30px rgba(212, 160, 23, 0.8)',
                            '0 0 15px rgba(212, 160, 23, 0.5)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        style={{
                          right: isEven ? 'auto' : undefined,
                          left: isEven ? undefined : 'auto',
                        }}
                      >
                        {step.number}
                      </motion.div>

                      <h3 className="relative text-xl font-bold text-white mb-3 mt-2">
                        {step.title}
                      </h3>
                      <p className="relative text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="relative flex-shrink-0 order-first lg:order-none">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-instagram flex items-center justify-center relative z-10"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Pulse rings */}
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
                    <motion.div
                      className="absolute inset-0 rounded-full bg-instagram-purple/20"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.3,
                      }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
