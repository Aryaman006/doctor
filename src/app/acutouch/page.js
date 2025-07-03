import ExpertTeamSection from "@/components/Team";
import BookPromotionSection from "./BookPromotionSection";
import ElementalEnergySection from "./Elements";
import AcutouchTherapySection from "./Hero";
import AcutouchImmuneSection from "./ImmuneSystem";
import ImmuneJourneySection from "./Journey";


export default function Home() {
  return (
    <div className="relative">
        <AcutouchTherapySection/>
        <AcutouchImmuneSection/>
        <ElementalEnergySection/>
        <ImmuneJourneySection/>
        <BookPromotionSection/>
        <ExpertTeamSection/>
    </div>
  );
}
