import { useTranslation } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { partnersData } from '../../data';

export const Partners = () => {
  const { t } = useTranslation();
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading subtitle="Ecosystem">{t.partners.title}</SectionHeading>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {partnersData.map((partner) => (
            <img 
              key={partner.id} 
              src={partner.logo} 
              alt={partner.name} 
              className="h-10 md:h-12 grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
