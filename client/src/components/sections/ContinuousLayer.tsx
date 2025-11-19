import React from "react";
import { motion } from "framer-motion";

export default function ContinuousLayer() {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">The Continuous Health Layer</h2>
            <p className="text-xl text-muted-foreground">
                We don't replace providers. We act as the intelligent connective tissue between visits.
            </p>
        </div>

        {/* Visual Timeline - Organic Flow */}
        <div className="relative min-h-[400px]">
             {/* SVG Path for the wavy line */}
             <svg className="absolute top-0 left-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                <motion.path
                    d="M0,100 C300,100 300,200 600,200 S900,100 1200,100"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="var(--color-primary)" />
                        <stop offset="100%" stopColor="var(--color-secondary)" />
                    </linearGradient>
                </defs>
             </svg>

             {/* Floating Cards along the path */}
             <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                    { 
                        title: "Translate", 
                        text: "Rx becomes a conversation.",
                        pos: "translate-y-12" 
                    },
                    { 
                        title: "Adapt", 
                        text: "Adjusts to life & routine.",
                        pos: "translate-y-32" 
                    },
                    { 
                        title: "Report", 
                        text: "Live data back to clinic.",
                        pos: "translate-y-0" 
                    }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.3 }}
                        className={`bg-white p-8 rounded-3xl shadow-xl border border-border ${card.pos}`}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-xl">
                            {i + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                        <p className="text-muted-foreground">{card.text}</p>
                    </motion.div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
}
