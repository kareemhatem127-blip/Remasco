import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import bgVideo from '../../Assets/bgVideo.mp4';

export const Hero = () => {
  const { t, lang } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden font-sans"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-secondary"></div>

            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              {lang === 'ar'
                ? 'ريماسكو للمقاولات'
                : 'Remasko Construction'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-balance font-sans text-gradient">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center gap-6 text-secondary font-bold text-sm md:text-base mb-10 border-y border-white/10 py-6">
            {t.hero.highlights}
          </div>

          {/* Slogan */}
          <p className="text-lg text-white/50 italic mb-12 max-w-xl font-light border-l-2 border-secondary/30 pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pr-6">
            {t.hero.slogan}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 bg-secondary text-white font-bold rounded-sm flex items-center gap-2 hover:bg-secondary/90 transition-all group"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t.hero.cta_projects}

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </button>

            <button
              className="px-8 py-4 bg-white/10 text-white font-bold border border-white/20 rounded-sm hover:bg-white/20 transition-all backdrop-blur-sm"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t.hero.cta_contact}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};