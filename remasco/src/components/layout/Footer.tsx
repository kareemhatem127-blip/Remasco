import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from '../../context/LanguageContext';
import { contactData } from '../../data';
import logo from '../../Assets/logo.jpg'

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

export const Footer = () => {
  const { t, lang } = useTranslation();
  
  const socialIcons = [
    { name: 'Facebook', icon: Facebook, url: contactData.socials[0].url },
    { name: 'Instagram', icon: Instagram, url: contactData.socials[1].url },
    { name: 'TikTok', icon: TiktokIcon, url: contactData.socials[2].url },
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-4 mb-10 group">
  <img 
    src={logo}
    alt="Remasko Logo"
    className="h-14 w-14 rounded-full object-cover opacity-90 transition-transform group-hover:scale-110 duration-500"
  />

  <div className="flex flex-col">
    <span className="text-2xl font-bold tracking-tighter text-white">
      REMASKO
    </span>

    <span className="text-[10px] text-secondary font-black tracking-[0.3em] uppercase opacity-80">
      Construction
    </span>
  </div>
</div>
            <p className="text-white/40 max-w-sm leading-relaxed text-base mb-10 font-light">
              {lang === 'ar' 
                ? 'ريماسكو للمقاولات هي شركة رائدة في تقديم حلول بناء مبتكرة في جميع أنحاء مصر. متخصصون في التشطيبات الراقية وبدائل الرخام منذ عام 2019.' 
                : 'Remasko Construction is a leading provider of innovative construction solutions across Egypt. Specializing in high-end fit-out finishing and marble alternatives since 2019.'}
            </p>
            
            <div className="flex gap-6">
              {socialIcons.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 glass flex items-center justify-center rounded-sm text-white/50 hover:text-secondary hover:border-secondary transition-all duration-300 group overflow-hidden relative"
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <social.icon className="w-6 h-6 relative z-10" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-10 uppercase text-[10px] tracking-[0.3em] text-secondary">{t.nav.services}</h4>
            <ul className="space-y-5 text-sm text-white/50">
              {t.services.items.slice(0, 5).map((s, idx) => (
                <li key={idx} className="hover:text-secondary cursor-pointer transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 bg-secondary/20 rounded-full group-hover:bg-secondary transition-colors"></span>
                  {s.title}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-10 uppercase text-[10px] tracking-[0.3em] text-secondary">{t.nav.contact}</h4>
            <div className="space-y-6 text-sm text-white/50">
              <div className="group">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-1 group-hover:text-secondary/50 transition-colors">{t.contact.phone}</p>
                <p className="text-white/80 font-bold text-lg group-hover:text-white transition-colors">{contactData.phone}</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-1 group-hover:text-secondary/50 transition-colors">{t.contact.email}</p>
                <p className="text-white/80 font-bold group-hover:text-white transition-colors break-all">{contactData.email}</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-1 group-hover:text-secondary/50 transition-colors">{t.contact.address}</p>
                <p className="text-white/80 leading-relaxed font-light group-hover:text-white transition-colors">{contactData.address[lang]}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 text-[10px] text-white/20 uppercase tracking-[0.2em] font-black">
            <span className="hover:text-secondary cursor-pointer transition-all">Privacy Policy</span>
            <span className="hover:text-secondary cursor-pointer transition-all">Terms of Service</span>
            <span className="hover:text-secondary cursor-pointer transition-all">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
