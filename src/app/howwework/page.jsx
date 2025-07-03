// components/HowWeWorkHero.tsx
import Image from 'next/image';
import Link from 'next/link';
import Hero from './Hero';
import AccutouchIntro from './Intro';
import ImageSection from './image';
import ElementalBalanceSection from './Para2';
import ProgramSteps from '@/components/HowProgramWork';
import ExpertTeamSection from '@/components/Team';
import ConsultationForm from '@/components/ConsultationForm';

export default function HowWeWorkHero() {
  return (
    <>
    <Hero/>
    <AccutouchIntro/>
    <ImageSection/>
    <ElementalBalanceSection/>
    <ProgramSteps/>
    <ConsultationForm/>
    <ExpertTeamSection/>
    </>
  );
}
