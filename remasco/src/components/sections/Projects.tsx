import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { projectData } from '../../data';

export const Projects = () => {
  const { t, lang } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>(projectData[0].category);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const currentCategoryData = projectData.find(g => g.category === activeCategory);
  const allProjects = currentCategoryData?.projects || [];
  
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const visibleProjects = allProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-secondary)_0%,transparent_10%)] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Architectural Landmarks">{t.projects.title}</SectionHeading>
        
        <div className="flex flex-wrap gap-4 mb-16">
          {projectData.map((group) => (
            <button
              key={group.category}
              onClick={() => handleCategoryChange(group.category)}
              className={`px-10 py-3 text-[11px] uppercase tracking-[0.2em] font-black transition-all border-b-2 ${
                activeCategory === group.category 
                  ? 'border-secondary text-primary' 
                  : 'border-transparent text-primary/40 hover:text-primary/70'
              }`}
            >
              {(t.projects.sectors as any)[group.category] || group.category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link 
                  to={`/project/${project.id}`}
                  className="group relative h-[500px] overflow-hidden rounded-xl shadow-2xl block"
                >
                  <img 
                    src={project.image} 
                    alt={project.title[lang]} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <div className="overflow-hidden mb-2">
                       <p className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        {project.location}
                      </p>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                      {project.title[lang]}
                    </h3>
                    <div className="h-[1px] w-0 bg-secondary group-hover:w-full transition-all duration-700 mb-6"></div>
                    <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {t.projects.view_details}
                      <ArrowRight className="w-5 h-5 text-secondary rtl:rotate-180" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-secondary/0 group-hover:border-secondary transition-all duration-700"></div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                currentPage === 1 
                  ? 'border-gray-100 text-gray-300 cursor-not-allowed' 
                  : 'border-secondary text-primary hover:bg-secondary hover:text-white'
              }`}
            >
              <ArrowRight className="w-5 h-5 rotate-180 rtl:rotate-0" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-12 h-12 rounded-lg text-sm font-bold transition-all ${
                    currentPage === page
                      ? 'bg-primary text-white shadow-xl'
                      : 'bg-gray-50 text-primary hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                currentPage === totalPages 
                  ? 'border-gray-100 text-gray-300 cursor-not-allowed' 
                  : 'border-secondary text-primary hover:bg-secondary hover:text-white'
              }`}
            >
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};