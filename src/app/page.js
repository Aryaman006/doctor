import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import HelpOptionsSection from "@/components/HelpOptions";
import RegisterCard from "@/components/RegisterCard";
import YoutubeSection from "@/components/Youtube";
import OurPrograms from "@/components/program";
import ShortTestimonials from "@/components/Testimonials";
import HowHealingWorks from "@/components/HowWeDoIt";
import ClientResults from "@/components/Serve";
import OurPhilosophy from "@/components/OurPhilosphy";
import ProgramSteps from "@/components/HowProgramWork";
import AppPromoSection from "@/components/AppSection";
import ExpertTeamSection from "@/components/Team";

export default function Home() {
  return (
    <div className="relative">
    
      <HeroSection />
      <WelcomeSection />
      <RegisterCard/>
      <YoutubeSection/>
      <OurPrograms/>
      <ShortTestimonials/>
      <HowHealingWorks/>
      <ClientResults/>
      <OurPhilosophy/>
      <ProgramSteps/>
      {/* <AppPromoSection/> */}
      <ExpertTeamSection/>
    </div>
  );
}
