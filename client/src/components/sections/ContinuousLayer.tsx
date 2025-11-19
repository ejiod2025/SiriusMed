import React from "react";
import { motion } from "framer-motion";
import { Activity, MessageCircle, Phone, Bell } from "lucide-react";

export default function ContinuousLayer() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">SiriusMed lives in the gap between visits.</h2>
            <p className="text-gray-400 text-lg">
                We don't replace providers. We extend their care into the 99% of time patients spend outside the clinic.
            </p>
        </div>

        <div className="relative h-[400px] flex items-center justify-between">
            {/* Left Side: Clinic */}
            <div className="w-48 text-center shrink-0 z-20">
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] mb-4">
                    <Activity size={40} className="text-slate-900" />
                </div>
                <h3 className="font-bold text-xl">Clinic Visit</h3>
                <p className="text-sm text-slate-500 mt-2">Prescription & Diagnosis</p>
            </div>

            {/* The Bridge */}
            <div className="flex-1 h-[2px] bg-slate-800 relative mx-8">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-primary to-slate-800 opacity-50" />
                
                {/* Animated Dots/Particles */}
                {[1,2,3,4,5,6].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center text-primary"
                        initial={{ left: "10%", opacity: 0, scale: 0.5 }}
                        animate={{ 
                            left: ["10%", "90%"],
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1, 1, 0.5]
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "linear"
                        }}
                    >
                        {i % 3 === 0 ? <MessageCircle size={16} /> : i % 3 === 1 ? <Phone size={16} /> : <Bell size={16} />}
                    </motion.div>
                ))}

                {/* Labels underneath */}
                <div className="absolute top-12 w-full flex justify-between px-12 text-xs font-mono text-slate-600 uppercase tracking-wider">
                    <span>Day 1</span>
                    <span>Day 7</span>
                    <span>Day 14</span>
                    <span>Month 1</span>
                </div>
            </div>

            {/* Right Side: Next Appointment */}
            <div className="w-48 text-center shrink-0 z-20">
                 <div className="w-24 h-24 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 mb-4">
                    <Activity size={40} className="text-slate-500" />
                </div>
                <h3 className="font-bold text-xl">Next Visit</h3>
                <p className="text-sm text-slate-500 mt-2">3 Months Later</p>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
                { title: "Translates Rx to Routine", desc: "Turns instructions into a daily, conversational plan." },
                { title: "Adapts to Real Life", desc: "Handles shift work, travel, and bad days automatically." },
                { title: "Clinician Visibility", desc: "Gives providers a live view of what's actually happening." }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
                >
                    <h4 className="text-lg font-bold mb-2 text-primary">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
