import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="gap" className="py-32 bg-white relative overflow-hidden rounded-t-[3rem] -mt-12 z-20 shadow-2xl shadow-black/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground"
          >
            The Reality Gap
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where typical care falls short, SiriusMed stays constant.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-100 relative">
           
            {/* Chart Container */}
            <div className="aspect-[16/9] md:aspect-[21/9] relative w-full">
                
                {/* Reality Gap Highlight Zone */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-[25%] w-[30%] top-0 bottom-12 bg-orange-50 border-x border-orange-100/50 flex items-start justify-center pt-8 z-0"
                >
                    <span className="text-orange-600/70 font-heading font-bold text-lg md:text-xl uppercase tracking-wide bg-white/80 backdrop-blur px-4 py-1 rounded-full shadow-sm">
                        Reality Gap
                    </span>
                </motion.div>

                {/* Axes */}
                <div className="absolute left-0 bottom-12 right-0 h-px bg-slate-300" /> {/* X-Axis */}
                <div className="absolute left-0 top-0 bottom-12 w-px bg-slate-300" /> {/* Y-Axis */}

                {/* X-Axis Labels */}
                <div className="absolute bottom-0 left-0 text-slate-500 font-bold text-lg md:text-xl">Clinic</div>
                <div className="absolute bottom-0 right-0 text-slate-500 font-bold text-lg md:text-xl">Between Visits</div>

                {/* Chart Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-[calc(100%-48px)] overflow-visible z-10">
                    
                    {/* Typical Care Line (Gray, drops) */}
                    <motion.path
                        d="M0,30 C200,30 250,30 400,250 S800,280 1200,280"
                        fill="none"
                        stroke="#94a3b8" // Slate-400
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="md:hidden" // Mobile path (simplified view logic if needed, but using generic viewBox logic is better. For now rely on responsive container)
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Desktop Path */}
                     <motion.path
                        d="M0,20 C250,20 300,20 500,250 S900,280 10000,280" // Extended end for safety
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        vectorEffect="non-scaling-stroke"
                    />

                     {/* SiriusMed Line (Blue, consistent) */}
                     <motion.path
                        d="M0,20 C300,20 500,20 10000,20"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="6"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Labels on Lines */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 2.2 }}
                    className="absolute right-[10%] top-[5%] text-primary font-bold text-2xl md:text-3xl bg-white/80 px-4 py-2 rounded-xl shadow-sm backdrop-blur-sm z-20"
                >
                    SiriusMed
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.8 }}
                    className="absolute right-[10%] bottom-[15%] text-slate-400 font-bold text-xl md:text-2xl z-20"
                >
                    Typical Care
                </motion.div>

            </div>
        </div>
      </div>
    </section>
  );
}
