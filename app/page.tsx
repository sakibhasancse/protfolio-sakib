"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <main className="bg-gray-50 text-gray-900 antialiased">
      <Hero />
      <div className="max-w-6xl mx-auto p-6 sm:p-10 space-y-16">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
