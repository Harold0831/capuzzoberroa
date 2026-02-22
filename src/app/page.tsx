import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import NewsSection from "@/components/home/NewSecition";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <ServicesSection/>
      <NewsSection/>
      <ContactSection/>
      
    </>
  );
}