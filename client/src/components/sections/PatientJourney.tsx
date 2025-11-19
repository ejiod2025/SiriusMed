import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Calendar, CheckCircle, Clock, HeartPulse } from "lucide-react";

const EVENTS = [
  {
    day: "Day 0",
    title: "Prescription",
    desc: "Instant sync from EMR.",
    icon: Calendar,
  },
  {
    day: "48 Hours",
    title: "Onboarding",
    desc: "Symptom checks & education.",
    icon: Clock,
  },
  {
    day: "Week 2",
    title: "Routine",
    desc: "Habit formation & streaks.",
    icon: CheckCircle,
  },
  {
    day: "Month 3+",
    title: "Maintenance",
    desc: "Long-term adherence tracking.",
    icon: HeartPulse,
  }
];

export default function PatientJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="journey" className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-center mb-32">The Patient Journey</h2>
        
        <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-[60px] left-0 right-0 h-1 bg-gray-200 hidden md:block">
                <motion.div 
                    style={{ scaleX: scrollYProgress }}
                    className="h-full bg-gradient-to-r from-primary to-secondary origin-left"
                />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {EVENTS.map((event, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="relative pt-16 md:pt-24 text-center group"
                    >
                        {/* Floating Node */}
                        <div className="absolute top-0 md:top-[40px] left-1/2 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-gray-100 z-10 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-500">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-primary transition-colors duration-500" />
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <event.icon size={24} />
                            </div>
                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{event.day}</span>
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-500 text-sm">{event.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
