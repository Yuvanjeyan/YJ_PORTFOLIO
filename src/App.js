import './App.css';
import AboutSection from './components/AboutSection';
import AchievementsEducationSection from './components/AchievementsEducationSection';
import CertificationsContactSection from './components/CertificationsContactSection';
import ExperienceSection from './components/ExperienceSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="portfolio-shell">
      <HeroSection />
      <main className="content-wrap">
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsEducationSection />
        <CertificationsContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
