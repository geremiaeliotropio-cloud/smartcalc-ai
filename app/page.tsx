import Hero from "./components/Hero";
import PopularCalculators from "./components/PopularCalculators";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Stats from "./components/Stats";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />

      <Categories />

      <PopularCalculators />

      <Features />

      <Stats />

      <CTA />
    </main>
  );
}