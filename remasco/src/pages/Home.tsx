import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Projects } from '../components/sections/Projects';
import { Catalogs } from '../components/sections/Catalogs';
import { Partners } from '../components/sections/Partners';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Catalogs />
      <Partners />
      <WhyChooseUs />
      <Contact />
    </>
  );
};
