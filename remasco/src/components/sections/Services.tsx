import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';

export const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-24 bg-white mesh-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Professional Excellence">{t.services.title}</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border-l-4 border-l-transparent hover:border-l-secondary bg-gradient-to-br from-white to-gray-50 transition-all group hover:shadow-2xl shadow-sm rounded-xl"
            >
              <div className="w-14 h-14 bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg relative">
                <FileText className="w-6 h-6 text-secondary" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary"></div>
              </div>
              <h3 className="text-lg font-bold mb-4 text-primary leading-tight min-h-[3.5rem] flex items-center">
                {service.title}
              </h3>
              <div className="w-12 h-0.5 bg-secondary/30 mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-neutral text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
