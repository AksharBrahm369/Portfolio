import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import TechMarquee from "@/components/TechMarquee/TechMarquee";
import PhilosophySection from "@/components/PhilosophySection/PhilosophySection";
import ExpertiseSection from "@/components/ExpertiseSection/ExpertiseSection";
import CertificatesSection from "@/components/CertificatesSection/CertificatesSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import Chatbot from "@/components/Chatbot/Chatbot";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <PhilosophySection />
        <ExpertiseSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Chatbot />
    </>
  );
}
