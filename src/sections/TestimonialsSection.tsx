import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    image: '/images/623752386_1413624990490065_32540.png',
    message: 'الكتاب سلس في الشرح، بس لسة هكمل 😊',
    reply: 'الحمد الله ❤️ شكرا بس لاعرف لو لسا في أي مشكلة أنا هون',
  },
  {
    image: '/images/623813802_1444768937210174_38440.png',
    message: 'وصلت لصفحة ١٢٠ في الكتاب هههه بهاي سرعة',
    reply: 'الكتاب سهل في القراءة',
  },
  {
    image: '/images/623872605_875094065420554_440633.png',
    message: 'خلصت الكتاب كتير مفيد ورح ابدأ 😍',
    reply: 'شكرا كتيير الأن مرحلة تطبيق وعند أي مشكلة بتتواصلي معي ونحلها مع بعض',
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', direction: 'rtl' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative section-padding overflow-hidden" id="testimonials">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 134, 11, 0.1) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-instagram-orange/10 text-instagram-orange text-sm font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            💬 آراء العملاء
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ماذا يقول{' '}
            <span className="gradient-text">عملاؤنا</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            شهادات حقيقية من عملاء اشتركوا بهاذا النظام
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <motion.button
            onClick={scrollPrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden lg:flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            onClick={scrollNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden lg:flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Embla carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-1 h-full">
                    {/* Animated border */}
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
                        src={testimonial.image}
                        alt={`تقييم العميل ${index + 1}`}
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
                        <Quote className="w-5 h-5 text-instagram-pink" />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="relative p-4 space-y-3">
                      {/* Customer message */}
                      <div className="bg-white/5 rounded-lg p-3 border-r-2 border-instagram-pink">
                        <p className="text-white text-sm leading-relaxed">{testimonial.message}</p>
                      </div>

                      {/* Reply */}
                      <div className="bg-instagram-purple/10 rounded-lg p-3 border-l-2 border-instagram-purple">
                        <p className="text-gray-300 text-sm leading-relaxed">{testimonial.reply}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex
                    ? 'bg-gradient-instagram'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
