import { motion } from 'motion/react';
import { useTranslation } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import about from '../../Assets/about.jpg'

export const About = () => {
  const { t, lang } = useTranslation();
  return (
    <section id="about" className="py-24 bg-brand-bg mesh-bg">
      <div className="max-w-7xl mx-auto px-6 gap-20 grid lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="Crafting the Future">{t.about.title}</SectionHeading>
          <p className="text-xl text-primary/80 mb-10 leading-relaxed italic border-l-4 border-secondary pl-8 py-3 bg-secondary/5 rounded-r-lg">
            "{lang === 'ar' ? 'نبني برؤية.. وننفذ بإتقان لنضع بصمتنا في كل زاوية.' : 'Building with vision... executing with mastery to leave our mark in every corner.'}"
          </p>
          <p className="text-neutral text-lg leading-relaxed mb-10">
            {t.about.content}
          </p>
          <div className="grid grid-cols-2 gap-12 border-t border-primary/5 pt-10">
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">10+</p>
              <p className="text-[10px] text-primary/40 uppercase font-black tracking-[0.2em]">{lang === 'ar' ? 'سنوات من الخبرة' : 'Years of Expertise'}</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">150+</p>
              <p className="text-[10px] text-primary/40 uppercase font-black tracking-[0.2em]">{lang === 'ar' ? 'مشروع مكتمل' : 'Successful Projects'}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
        <div className="w-full h-full bg-gray-200 rounded-sm overflow-hidden shadow-2xl">
  <img 
    src={about} 
    alt="Engineering team" 
    className="w-full h-full object-contain"
  />
</div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 -z-10 rounded-sm"></div>
        </motion.div>
      </div>
    </section>
  );
};
