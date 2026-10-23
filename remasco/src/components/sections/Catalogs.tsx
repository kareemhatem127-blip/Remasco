import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Globe, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { catalogsData } from '../../data';

const ITEMS_PER_PAGE = 6;

export const Catalogs = () => {
  const { t, lang } = useTranslation();
  const [selectedCatalog, setSelectedCatalog] = useState<typeof catalogsData[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(catalogsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = catalogsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleDownload = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalogs" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-secondary)_0%,transparent_70%)] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Resources & Documents">{t.catalogs.title}</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {currentItems.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative p-10 text-white overflow-hidden group rounded-xl min-h-[380px] flex flex-col justify-end shadow-2xl border border-primary/5"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.previewImage} 
                    alt={cat.title[lang]} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/85 group-hover:bg-primary/75 transition-colors duration-700"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 glass flex items-center justify-center rounded-lg mb-8">
                    <FileText className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{cat.title[lang]}</h3>
                  <p className="text-white/50 text-sm mb-10 leading-relaxed line-clamp-3 font-light">
                    {cat.desc[lang]}
                  </p>
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => setSelectedCatalog(cat)}
                      className="w-full py-4 bg-secondary text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#C49E52] transition-all shadow-lg rounded-lg"
                    >
                      <Globe className="w-4 h-4" /> {t.catalogs.preview}
                    </button>
                    <button 
                      onClick={() => handleDownload(cat.downloadUrl)}
                      className="w-full py-4 glass text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/20 transition-all font-sans rounded-lg"
                    >
                      <Download className="w-4 h-4" /> {t.catalogs.download}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-6">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border border-primary/10 transition-all ${
                currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <div className="flex gap-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-1.5 transition-all rounded-full ${
                    currentPage === i + 1 ? 'bg-secondary' : 'bg-primary/10'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border border-primary/10 transition-all ${
                currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedCatalog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-sm"
            onClick={() => setSelectedCatalog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
                <h4 className="font-bold text-primary text-xl">{selectedCatalog.title[lang]}</h4>
                <button 
                  onClick={() => setSelectedCatalog(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors text-primary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="aspect-[16/9] overflow-y-auto bg-gray-100">
                <img 
                  src={selectedCatalog.previewImage} 
                  alt={selectedCatalog.title[lang]} 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 text-center text-primary/60 text-sm">
                  <p>{t.catalogs.preview} - {selectedCatalog.desc[lang]}</p>
                </div>
              </div>
              <div className="p-6 border-t flex justify-end bg-gray-50/50">
                <button 
                  onClick={() => handleDownload(selectedCatalog.downloadUrl)}
                  className="px-8 py-3 bg-secondary text-white font-bold rounded-lg flex items-center gap-3 hover:bg-secondary/90 transition-all shadow-lg"
                >
                  <Download className="w-5 h-5" /> {t.catalogs.download}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
