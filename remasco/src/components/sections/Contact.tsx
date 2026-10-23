import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { contactData } from '../../data';

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

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Contact = () => {
  const { t, lang } = useTranslation();
  
  const socialIcons = [
    { name: 'Facebook', icon: Facebook, url: contactData.socials[0].url },
    { name: 'Instagram', icon: Instagram, url: contactData.socials[1].url },
    { name: 'TikTok', icon: TiktokIcon, url: contactData.socials[2].url },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Conversation Start">{t.contact.title}</SectionHeading>
        
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-sm shadow-xl shrink-0 group-hover:bg-secondary transition-colors duration-300">
                  <Phone className="w-6 h-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-neutral tracking-[0.2em] mb-2">{t.contact.phone}</p>
                  <a href={`tel:${contactData.phone}`} className="text-xl font-bold text-primary hover:text-secondary transition-colors">{contactData.phone}</a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-sm shadow-xl shrink-0 group-hover:bg-secondary transition-colors duration-300">
                  <WhatsAppIcon className="w-7 h-7 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-neutral tracking-[0.2em] mb-2">{t.contact.whatsapp}</p>
                  <a 
                    href={`https://wa.me/${contactData.phone.replace(/\+/g, '').replace(/\s/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xl font-bold text-primary hover:text-secondary transition-colors"
                  >
                    {contactData.whatsapp}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-sm shadow-xl shrink-0 group-hover:bg-secondary transition-colors duration-300">
                  <Mail className="w-6 h-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-neutral tracking-[0.2em] mb-2">{t.contact.email}</p>
                  <a href={`mailto:${contactData.email}`} className="text-xl font-bold text-primary hover:text-secondary transition-colors break-all">{contactData.email}</a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-sm shadow-xl shrink-0 group-hover:bg-secondary transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-neutral tracking-[0.2em] mb-2">{t.contact.address}</p>
                  <p className="text-lg font-bold text-primary leading-relaxed">{contactData.address[lang]}</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-12 border-t border-primary/5">
              <p className="text-[10px] font-black uppercase text-primary/40 tracking-[0.3em] mb-8">{t.contact.follow_us}</p>
              <div className="flex gap-8">
                {socialIcons.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-white border border-primary/5 flex items-center justify-center rounded-sm text-primary hover:text-white hover:bg-secondary hover:shadow-[0_20px_50px_rgba(217,176,97,0.3)] transition-all duration-300 shadow-lg group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <social.icon className="w-7 h-7 relative z-10 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 h-[600px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl relative border border-primary/5">
            <iframe 
              src={contactData.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-1000"
            ></iframe>
            <div className="absolute top-6 left-6 glass-dark p-5 rounded-sm pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  {lang === 'ar' ? 'المقر الرئيسي - القاهرة' : 'Headquarters - Cairo'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
