import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import chaosImg from "@assets/generated_images/Chaotic_to_ordered_abstract_visualization_842f5617.png";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, 0]);
  
  return (
    <section ref={containerRef} id="gap" className="py-32 bg-white text-foreground relative overflow-hidden rounded-t-[3rem] -mt-12 z-20 border-t border-border shadow-2xl shadow-black/5">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground"
            >
                The Reality Gap
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Why "good instructions" fail in the real world.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
           {/* Left: The Clinic (Order) */}
           <div className="bg-blue-50/50 p-12 md:p-16 rounded-3xl border border-blue-100 relative group overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-blue-600 font-mono text-xl shadow-sm">01</div>
                    <h3 className="text-3xl font-bold mb-4 text-blue-900">In the Clinic</h3>
                    <ul className="space-y-4 text-blue-800/80">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Perfect clarity
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            High motivation
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            "I understand, Doctor."
                        </li>
                    </ul>
                </div>
           </div>

           {/* Right: The World (Chaos) */}
           <div className="bg-orange-50/50 p-12 md:p-16 rounded-3xl border border-orange-100 relative group overflow-hidden hover:shadow-xl transition-all duration-500">
                 <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-orange-600 font-mono text-xl shadow-sm">02</div>
                    <h3 className="text-3xl font-bold mb-4 text-orange-900">In the Wild</h3>
                    <ul className="space-y-4 text-orange-800/80">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            Instructions blur
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            Side effects cause doubt
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            Life takes over
                        </li>
                    </ul>
                 </div>
           </div>
        </div>
        
        {/* Floating Bridge Concept */}
        <div className="mt-12 text-center">
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide uppercase shadow-lg shadow-primary/25 cursor-pointer"
            >
                Bridging the Gap
            </motion.div>
        </div>
      </div>
    </section>
  );
}
