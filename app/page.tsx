import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PopularCalculators from "./components/PopularCalculators";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <PopularCalculators />

      <Features />
    </main>
  );
}