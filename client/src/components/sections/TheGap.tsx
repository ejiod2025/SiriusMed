import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import chaosImg from "@assets/generated_images/Chaotic_to_ordered_abstract_visualization_f451e8b2.png";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, 0]);
  
  return (
    <section ref={containerRef} id="gap" className="py-32 bg-foreground text-background relative overflow-hidden rounded-t-[3rem] -mt-12 z-20">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
                The Reality Gap
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Why "good instructions" fail in the real world.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-white/5">
           {/* Left: The Clinic (Order) */}
           <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 font-mono text-xl">01</div>
                    <h3 className="text-3xl font-bold mb-4">In the Clinic</h3>
                    <ul className="space-y-4 text-gray-400">
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
           <div className="p-12 md:p-16 relative group">
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 text-orange-400 font-mono text-xl">02</div>
                    <h3 className="text-3xl font-bold mb-4">In the Wild</h3>
                    <ul className="space-y-4 text-gray-400">
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
