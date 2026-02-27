import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';
import { GlowButton } from '@/components/GlowButton';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.open(`mailto:millionairremindset@gmail.com?subject=استفسار من ${formData.name}&body=الاسم: ${formData.name}%0Aالبريد: ${formData.email}%0Aالرسالة: ${formData.message}`, '_blank');
  };

  return (
    <section className="relative section-padding overflow-hidden" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 134, 11, 0.1) 0%, transparent 60%)',
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-instagram-purple/10 text-instagram-purple text-sm font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            📞 تواصل معي
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            هل لديك{' '}
            <span className="gradient-text">أسئلة؟</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            أنا هنا لمساعدتك في رحلتك نحو الحرية المالية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-white mb-2">الاسم</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-instagram-pink focus:ring-2 focus:ring-instagram-pink/20 transition-all"
                  placeholder="أدخل اسمك"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-white mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-instagram-pink focus:ring-2 focus:ring-instagram-pink/20 transition-all"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-white mb-2">الرسالة</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-instagram-pink focus:ring-2 focus:ring-instagram-pink/20 transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <GlowButton className="w-full">
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </GlowButton>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-instagram flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">البريد الإلكتروني</h3>
                  <p className="text-gray-400 text-sm">وسيلة التواصل الرسمية</p>
                </div>
              </div>
              <a href="mailto:millionairremindset@gmail.com" className="text-gray-400 font-medium hover:underline">
                millionairremindset@gmail.com
              </a>
            </div>



            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-instagram flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">وقت الرد</h3>
                  <p className="text-gray-400 text-sm">خلال 24 ساعة</p>
                </div>
              </div>
              <p className="text-gray-300">أسعى للرد على جميع الاستفسارات في أسرع وقت</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
