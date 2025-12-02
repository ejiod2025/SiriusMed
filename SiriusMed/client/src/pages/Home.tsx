import React from "react";
import Hero from "@/components/sections/Hero";
import TheGap from "@/components/sections/TheGap";
import ContinuousLayer from "@/components/sections/ContinuousLayer";
import MultiChannel from "@/components/sections/MultiChannel";
import PatientJourney from "@/components/sections/PatientJourney";
import ClinicianView from "@/components/sections/ClinicianView";
import Footer from "@/components/sections/Footer";
import DemoForm from "@/components/sections/DemoForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans text-foreground selection:bg-primary selection:text-white">
      {/* Floating Nav */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto">
           <div className="flex items-center gap-2 mr-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">S</div>
            <span className="font-heading font-bold text-xl tracking-tight hidden md:block">SiriusMed</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#gap" className="hover:text-foreground transition-colors">The Gap</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">Platform</a>
            <a href="#journey" className="hover:text-foreground transition-colors">Journey</a>
          </div>

          <a href="#book-demo" className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-bold hover:scale-105 transition-transform">
            Book Demo
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <TheGap />
        <ContinuousLayer />
        <MultiChannel />
        <PatientJourney />
        <ClinicianView />
        <DemoForm />
      </main>

      <Footer />
    </div>
  );
}
