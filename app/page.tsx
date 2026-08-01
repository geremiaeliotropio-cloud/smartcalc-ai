import PopularCalculators from "./components/PopularCalculators";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
     <Hero />
      <PopularCalculators />
    </main>
  );
}