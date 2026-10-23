import { useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Layers,
  Award,
  CheckCircle2
} from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { projectData } from '../data';

export const ProjectDetail = () => {
  const { id } = useParams();
  const { lang, t } = useTranslation();
  const navigate = useNavigate();
  
  // Find project
  const project = projectData
    .flatMap(group => group.projects)
    .find(p => p.id === Number(id));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-serif text-primary mb-4">Project Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-secondary font-bold flex items-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary font-bold mb-8 hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
          {t.projects.details_page.back_to_portfolio}
        </motion.button>

        {/* Project Header Carousel */}
        <div className="relative mb-16 rounded-sm overflow-hidden shadow-2xl group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 aspect-video md:aspect-[21/9]">
                  <img 
                    src={img} 
                    alt={`${project.title[lang]} - ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-8 z-10">
            <span className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-2 block">{project.location}</span>
            <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight drop-shadow-lg">
              {project.title[lang]}
            </h1>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-md shrink-0">
                  <Layers className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">
                    {t.projects.details_page.project_description}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description[lang]}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-md shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">
                    {t.projects.details_page.our_contribution}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-semibold">
                    {project.contribution[lang]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-md shrink-0">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">
                  {t.projects.details_page.the_result}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {project.details[lang]}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{t.projects.details_page.delivery}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{t.projects.details_page.materials}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
