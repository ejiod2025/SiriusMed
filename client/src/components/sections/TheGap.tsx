import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="gap" className="py-24 md:py-32 bg-white relative overflow-hidden rounded-t-[3rem] -mt-12 z-20 shadow-2xl shadow-black/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground"
          >
            The Reality Gap After Prescription
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-4 md:p-12 border border-slate-100 relative shadow-sm">
           
            {/* Chart Container */}
            <div className="aspect-[16/10] md:aspect-[2/1] relative w-full select-none">
                
                {/* Grid Background */}
                <div className="absolute inset-0 z-0">
                    {/* Horizontal Grid Lines */}
                    {[0, 0.2, 0.4, 0.6, 0.8, 1].map((val, i) => (
                        <div key={i} className="absolute left-0 right-0 border-t border-dashed border-slate-200" style={{ top: `${val * 100}%` }} />
                    ))}
                    {/* Vertical Grid Lines */}
                    {[0, 0.2, 0.4, 0.6, 0.8, 1].map((val, i) => (
                        <div key={i} className="absolute top-0 bottom-0 border-l border-dashed border-slate-200" style={{ left: `${val * 100}%` }} />
                    ))}
                </div>

                {/* Axes Labels */}
                <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 -rotate-90 text-slate-500 font-medium text-xs md:text-sm whitespace-nowrap">
                    Perceived support / adherence confidence
                </div>
                <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-slate-500 font-medium text-xs md:text-sm">
                    Days after prescription
                </div>
                
                {/* X-Axis Values */}
                <div className="absolute bottom-[-1.5rem] left-0 w-full flex justify-between text-xs text-slate-400 font-mono">
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                    <span>20</span>
                    <span>25</span>
                    <span>30</span>
                </div>

                {/* Y-Axis Values */}
                <div className="absolute left-[-1.5rem] top-0 h-full flex flex-col justify-between text-xs text-slate-400 font-mono py-1">
                    <span>1.0</span>
                    <span>0.8</span>
                    <span>0.6</span>
                    <span>0.4</span>
                    <span>0.2</span>
                    <span>0.0</span>
                </div>

                {/* Chart SVG */}
                <svg className="absolute inset-0 w-full h-full overflow-visible z-10" viewBox="0 0 1000 300" preserveAspectRatio="none">
                    
                    {/* DEFINITIONS */}
                    <defs>
                        <linearGradient id="gapGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>

                    {/* THE GAP (Filled Area) */}
                    {/* Path logic: Follow SiriusMed Curve -> Line to End of Typical -> Reverse Typical Curve -> Close */}
                    <motion.path
                        d="M0,45 C200,0 600,80 1000,30 L1000,285 Q300,250 0,30 Z"
                        fill="url(#gapGradient)"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />

                    {/* Typical Care Curve (Gold/Orange) */}
                    <motion.path
                        d="M0,30 Q300,250 1000,285"
                        fill="none"
                        stroke="#d97706" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* SiriusMed Curve (Blue) */}
                    <motion.path
                        d="M0,45 C200,0 600,80 1000,30"
                        fill="none"
                        stroke="#3b82f6" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        vectorEffect="non-scaling-stroke"
                    />

                </svg>

                {/* Legend */}
                <div className="absolute top-4 right-4 md:right-8 bg-white/90 backdrop-blur px-4 py-3 rounded-xl border border-slate-200 shadow-sm text-xs md:text-sm z-20">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-0.5 bg-amber-600" />
                        <span className="text-slate-600">Typical care: support after prescription</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-blue-500" />
                        <span className="text-slate-900 font-semibold">With SiriusMed: continuous support</span>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}
