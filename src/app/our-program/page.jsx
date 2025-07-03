import WelcomeSection from "@/components/WelcomeSection";
import ProgramHero from "./program";
import OurPhilosophy from "@/components/OurPhilosphy";
import ShortTestimonials from "@/components/Testimonials";
import ExpertTeamSection from "@/components/Team";

export default function Home() {
    return(
        <>
        <ProgramHero/>
        <WelcomeSection/>
        <ShortTestimonials/>
        <ExpertTeamSection/>
        </>
    )
}