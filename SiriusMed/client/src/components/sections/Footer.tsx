import React from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">S</div>
                    <span className="font-heading font-bold text-xl">SiriusMed</span>
                </div>
                <p className="text-muted-foreground">
                    The continuous health layer for the modern patient journey.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                <div>
                    <h4 className="font-bold mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary">Features</a></li>
                        <li><a href="#" className="hover:text-primary">Integrations</a></li>
                        <li><a href="#" className="hover:text-primary">Security</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary">About</a></li>
                        <li><a href="#" className="hover:text-primary">Careers</a></li>
                        <li><a href="#" className="hover:text-primary">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
                &copy; 2024 SiriusMed Inc. All rights reserved.
            </div>
            <a href="#book-demo" className="group flex items-center gap-2 font-bold text-sm hover:text-primary transition-colors">
                Start your journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </footer>
  );
}
