import { 
  HomeHero, 
  CoreValues, 
  About, 
  AddOn, 
  ContactUs, 
} from "@/components/HomePage";


export default function Home() {
  return (
    <main>
      <HomeHero />
      <CoreValues />
      <About />
      <AddOn />
      <ContactUs />      
    </main>
  );
}
