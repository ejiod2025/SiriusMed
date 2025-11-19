import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Ready to close the adherence gap?
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            SiriusMed meets patients in the channels they already live in—quietly moving them closer to better health, one dose at a time.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2">
                Start a Patient Journey
                <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2">
                <MessageCircle size={20} />
                Test WhatsApp Demo
            </button>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <div>&copy; 2024 SiriusMed. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Contact</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
