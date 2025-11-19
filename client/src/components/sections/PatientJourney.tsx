import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Calendar, CheckCircle, Clock, HeartPulse } from "lucide-react";

const EVENTS = [
  {
    day: "Day 0",
    title: "Prescription Issued",
    desc: "Doctor creates the plan. SiriusMed syncs instantly.",
    icon: Calendar,
    color: "bg-blue-500",
    detail: "Hi Daniel, I'm your SiriusMed assistant. We'll start tonight at 8pm."
  },
  {
    day: "48 Hours",
    title: "Getting Started",
    desc: "Clear reminders and symptom check-ins.",
    icon: Clock,
    color: "bg-orange-500",
    detail: "First dose taken! Let's check how you're feeling tomorrow."
  },
  {
    day: "Week 2",
    title: "Building Routine",
    desc: "Streak tracking and habit formation.",
    icon: CheckCircle,
    color: "bg-green-500",
    detail: "You've taken your meds 6 mornings in a row 🎉"
  },
  {
    day: "Month 3+",
    title: "Continuous Health",
    desc: "Long-term adherence trends and refill management.",
    icon: HeartPulse,
    color: "bg-purple-500",
    detail: "Your adherence is 98%. Your doctor will be pleased!"
  }
];

export default function PatientJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="journey" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-20">The Patient Journey</h2>
        
        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-24">
                {EVENTS.map((event, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative flex items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Icon Node */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-100 shadow-xl flex items-center justify-center z-10">
                            <div className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center text-white shadow-inner`}>
                                <event.icon size={16} />
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="ml-20 md:ml-0 w-full md:w-1/2">
                            <div className={`bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 ${event.color}`}>{event.day}</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-4">{event.desc}</p>
                                <div className={`bg-white p-4 rounded-xl text-sm font-medium text-gray-500 shadow-inner border border-gray-100 inline-block`}>
                                    "{event.detail}"
                                </div>
                            </div>
                        </div>
                        
                        {/* Spacer for opposite side */}
                        <div className="hidden md:block w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
