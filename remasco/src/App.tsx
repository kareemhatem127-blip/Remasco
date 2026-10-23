import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen selection:bg-secondary selection:text-white bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
