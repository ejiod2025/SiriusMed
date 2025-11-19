import React from "react";
import Hero from "@/components/sections/Hero";
import TheGap from "@/components/sections/TheGap";
import ContinuousLayer from "@/components/sections/ContinuousLayer";
import MultiChannel from "@/components/sections/MultiChannel";
import PatientJourney from "@/components/sections/PatientJourney";
import ClinicianView from "@/components/sections/ClinicianView";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans text-foreground selection:bg-primary selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold font-heading text-xl shadow-lg shadow-primary/20">S</div>
            <span className="font-heading font-bold text-2xl tracking-tight text-slate-900 dark:text-white">SiriusMed</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#gap" className="hover:text-primary transition-colors">The Gap</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#journey" className="hover:text-primary transition-colors">Patient Journey</a>
            <a href="#clinicians" className="hover:text-primary transition-colors">For Clinicians</a>
          </nav>
          <button className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity shadow-lg">
            Book Demo
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <TheGap />
        <ContinuousLayer />
        <MultiChannel />
        <PatientJourney />
        <ClinicianView />
      </main>

      <Footer />
    </div>
  );
}
