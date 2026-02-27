import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { Smartphone, Gem, Palette, BarChart3, Headphones } from 'lucide-react';

const products = [
  {
    icon: Smartphone,
    title: 'نظام إنستجرام للحرية المالية',
    description: 'دليل شامل خطوة بخطوة لتحقيق دخل من إنستجرام',
    features: [
      'ملفات PDF تشرح لك تحقيق الدخل من الانستغرام وتكبير الصفحة بالتفصيل',
      'قوالب جاهزة للاستخدام',
      'استراتيجيات مجربة',
    ],
    highlight: true,
  },
  {
    icon: Gem,
    title: 'باقة المنتجات الرقمية',
    description: '100+ منتج رقمي جاهز للبيع مباشرة',
    features: [
      'تصاميم احترافية',
      'قوالب متنوعة',
      'كتب إلكترونية',
      'قابلة لإعادة البيع',
    ],
    highlight: false,
  },
  {
    icon: Palette,
    title: 'قوالب كانفا',
    description: '500+ قالب احترافي جاهز للتخصيص',
    features: [
      'قوالب سوشيال ميديا',
      'ستوريات إنستجرام',
      'بوستات احترافية',
      'تصاميم قابلة للتعديل',
    ],
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'Daily Habit Tracker',
    description: 'نظام متكامل لتتبع عاداتك وتحقيق أهدافك',
    features: [
      'تطبيق ويب تفاعلي',
      'إحصائيات تفصيلية',
      'شارات إنجاز',
      'هدية مجانية',
    ],
    highlight: false,
  },
  {
    icon: Headphones,
    title: 'دعم 24/7',
    description: 'فريق دعم متاح على مدار الساعة طوال أيام الأسبوع',
    features: [
      'رد سريع على استفساراتك',
      'دعم فني مباشر',
      'متابعة مستمرة',
      'حل المشكلات فوراً',
    ],
    highlight: false,
  },
];

export function ProductsSection() {
  return (
    <section className="relative section-padding overflow-hidden" id="products">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 134, 11, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-instagram-pink/10 text-instagram-pink text-sm font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            ✨ محتوى الباقة
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ماذا ستحصل{" "}
            <span className="gradient-text">داخل هذا العرض؟</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            كل ما تحتاجه لبدء رحلتك نحو الحرية المالية في مكان واحد
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              features={product.features}
              index={index}
              highlight={product.highlight}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4">
            كل هذا وأكثر بسعر{' '}
            <span className="text-instagram-pink font-bold">$24 فقط!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
