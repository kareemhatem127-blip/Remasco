import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import about from '../../Assets/about.jpg'

export const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 inline-block">The Remasko Advantage</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">{t.why_us.title}</h2>
            <p className="text-white/60 text-lg mb-12">
              We combine years of local expertise with global engineering standards to provide unmatched results.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {t.why_us.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
          <div className="aspect-square bg-gray-800 rounded-sm overflow-hidden">
  <img 
    src={about} 
    alt="Construction overview" 
    className="w-full h-full object-contain opacity-80"
  />
</div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
