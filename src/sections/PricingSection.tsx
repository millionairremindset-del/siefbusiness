import { motion } from 'framer-motion';
import { GlowButton } from '@/components/GlowButton';
import { Check, Sparkles, Clock, Shield } from 'lucide-react';

const features = [
  'نظام إنستجرام الكامل',
  '100+ منتج رقمي قابل لإعادة البيع',
  '500+ قالب كانفا احترافي',
  'متتبع العادات اليومية (هدية)',
  'تحديثات مجانية مدى الحياة',
  'دعم فني مباشر',
  'دعم 24/7',
];

export function PricingSection() {
  return (
    <section className="relative section-padding overflow-hidden" id="pricing">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-instagram-pink/20 border border-instagram-pink/30 mb-4"
            animate={{
              boxShadow: [
                '0 0 20px rgba(212, 160, 23, 0.2)',
                '0 0 40px rgba(212, 160, 23, 0.4)',
                '0 0 20px rgba(212, 160, 23, 0.2)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-4 h-4 text-instagram-pink" />
            <span className="text-sm text-instagram-pink font-bold">عرض محدود الوقت!</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            احصل على الباقة{' '}
            <span className="gradient-text">الآن</span>
          </h2>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #B8860B, #D4A017, #F0C040, #FFD700, #B8860B)',
                backgroundSize: '400% 400%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Inner card */}
            <div className="relative m-1 rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 md:p-12">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(212, 160, 23, 0.3), transparent 70%)',
                }}
              />

              {/* Content */}
              <div className="relative">
                {/* Price display */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-2xl md:text-3xl text-gray-500 line-through">
                      $160
                    </span>
                    <motion.span
                      className="px-3 py-1 rounded-full bg-instagram-pink/20 text-instagram-pink text-sm font-bold"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      وفر 85%
                    </motion.span>
                  </div>
                  
                  <motion.div
                    className="text-5xl md:text-6xl font-bold gradient-text font-inter"
                    animate={{
                      textShadow: [
                        '0 0 30px rgba(212, 160, 23, 0.5)',
                        '0 0 50px rgba(212, 160, 23, 0.8)',
                        '0 0 30px rgba(212, 160, 23, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    $24
                  </motion.div>
                  
                  <p className="text-gray-400 mt-2">دفعة واحدة - وصول مدى الحياة</p>
                </div>

                {/* Features list */}
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-gradient-instagram flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mb-6">
                  <GlowButton href="https://payhip.com/buy?s=1&cart_links%5B%5D=ZSqkb&qty%5BZSqkb%5D=1" size="lg" className="w-full md:w-auto">
                    <Sparkles className="w-5 h-5" />
                    احصل على العرض الآن
                  </GlowButton>
                </div>

                {/* Guarantee */}
                <motion.div
                  className="flex items-center justify-center gap-2 text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Shield className="w-4 h-4 text-instagram-green" />
                  <span>ضمان استعادة الأموال 100% لمدة 7 أيام</span>
                </motion.div>

                {/* Limited time notice */}
                <motion.div
                  className="flex items-center justify-center gap-2 mt-4 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Clock className="w-4 h-4 text-instagram-orange" />
                  <span className="text-instagram-orange">العرض متاح لفترة محدودة</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
