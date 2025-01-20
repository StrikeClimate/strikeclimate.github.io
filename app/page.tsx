import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Herosection />
      <CoreValues />
      <About />
      <Footer />
      
    </main>
  );
}
