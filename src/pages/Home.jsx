import Hero from '../sections/home/Hero';
import CapabilityStrip from '../sections/home/CapabilityStrip';
import Positioning from '../sections/home/Positioning';
import ServicesPreview from '../sections/home/ServicesPreview';
import SelectedProjects from '../sections/home/SelectedProjects';
import Process from '../sections/home/Process';
import WhyWorkWithMe from '../sections/home/WhyWorkWithMe';
import ShortAbout from '../sections/home/ShortAbout';
import FinalCTA from '../sections/home/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <Positioning />
      <ServicesPreview />
      <SelectedProjects />
      <Process />
      <WhyWorkWithMe />
      <ShortAbout />
      <FinalCTA />
    </>
  );
};

export default Home;
