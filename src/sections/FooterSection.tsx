import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const modalContent = {
  about: {
    title: 'من نحن',
    body: 'نحن علامة 🚀 The Millionnaire Mindset، نهدف لمساعدتك على تطوير العقلية وتحقيق دخل رقمي مستدام. نقدّم منتجات رقمية مبتكرة لدعم المبتدئين وأصحاب الخبرة على حد سواء، مع التركيز على تقديم محتوى عملي وفعّال لتحقيق نتائج ملموسة.',
  },
  terms: {
    title: 'الشروط والأحكام',
    body: 'باستخدامك لهذا الموقع وشرائك لأي منتج، فإنك توافق على هذه الشروط. جميع المواد المقدمة لأغراض تعليمية، والنتائج تعتمد على اجتهادك وتطبيقك الشخصي. بعض المنتجات للاستخدام الشخصي فقط، بينما توجد منتجات قابلة لإعادة البيع وفق الشروط الموضحة. جميع الطلبات تخضع لسياسة الاسترجاع المعتمدة.',
  },
  privacy: {
    title: 'سياسة الخصوصية',
    body: 'نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. قد نجمع الاسم والبريد الإلكتروني لغرض تقديم الخدمة والدعم. لن نشارك بياناتك مع أي طرف ثالث بدون إذن. يمكنك طلب تعديل أو حذف بياناتك في أي وقت.',
  },
};

export function FooterSection() {
  const [modal, setModal] = useState<null | 'about' | 'terms' | 'privacy'>(null);
  return (
    <>
    <footer className="relative py-12 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #B8860B, #D4A017, #F0C040, transparent)',
          }}
        />
      </div>

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <img src="/images/M_1.png" alt="Logo" className="w-9 h-9 rounded-lg object-contain" />
              <h3 className="text-2xl font-bold gradient-text">
                The Millionnaire Mindset
              </h3>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              طريقك نحو الحرية المالية
            </p>
            <a
              href="mailto:millionairremindset@gmail.com"
              className="flex items-center gap-1 text-gray-400 text-xs mt-2 hover:underline"
            >
              millionairremindset@gmail.com
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { icon: Instagram, href: 'https://www.instagram.com/the_millionnaire_mindset_/' },
              { icon: Twitter, href: '#' },
              { icon: Youtube, href: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-instagram-pink/50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button onClick={() => setModal('about')} className="text-gray-400 hover:text-white transition-colors text-sm">
              من نحن
            </button>
            <button onClick={() => setModal('terms')} className="text-gray-400 hover:text-white transition-colors text-sm">
              الشروط والأحكام
            </button>
            <button onClick={() => setModal('privacy')} className="text-gray-400 hover:text-white transition-colors text-sm">
              سياسة الخصوصية
            </button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            © 2026 The Millionnaire Mindset. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>

      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setModal(null)} />
            <motion.div
              className="relative w-full max-w-lg rounded-2xl bg-gray-900 border border-white/10 p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-2xl font-bold gradient-text mb-4 text-center">
                {modalContent[modal].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{modalContent[modal].body}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
