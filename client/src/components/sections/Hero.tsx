import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { MessageCircle, Phone, Bell, ArrowRight, Play } from "lucide-react";
import heroBg from "@assets/generated_images/Abstract_fluid_organic_tech_shape_7a3d86d6.png";

const CHANNELS = [
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, color: "bg-[#25D366]" },
  { id: "call", label: "Voice", icon: Phone, color: "bg-blue-500" },
  { id: "notif", label: "Alerts", icon: Bell, color: "bg-purple-500" },
];

export default function Hero() {
  const [activeChannel, setActiveChannel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChannel((prev) => (prev + 1) % CHANNELS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Dynamic Organic Background */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 w-[800px] h-[800px] opacity-40"
         >
             <img src={heroBg} className="w-full h-full object-contain blur-2xl" alt="" />
         </motion.div>
         <div className="absolute left-0 top-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-600">Live Patient Engine v2.0</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] text-foreground tracking-tighter mb-6">
              Adherence <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Re-imagined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                The intelligent companion that bridges the gap between "prescription" and "daily life." Powered by behavior, not just reminders.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group bg-primary text-primary-foreground pl-8 pr-6 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/30 flex items-center gap-4">
              Start Journey
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight size={16} />
              </div>
            </button>
            <button className="bg-white text-foreground border border-border px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
              <Play size={20} className="text-secondary fill-current" />
              Watch Demo
            </button>
          </motion.div>

            {/* Dynamic Stats */}
           <div className="grid grid-cols-3 gap-8 border-t border-border/50 pt-8 max-w-lg">
                {[
                    { label: "Adherence Lift", val: "+42%" },
                    { label: "Patient Retention", val: "3.5x" },
                    { label: "Active Users", val: "12k+" }
                ].map((stat, i) => (
                    <div key={i}>
                        <h4 className="text-2xl font-bold font-heading text-foreground">{stat.val}</h4>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
           </div>
        </div>

        {/* Right Content - Floating UI Ecosystem */}
        <div className="lg:col-span-5 relative h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
                {/* Central Hub */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-2xl z-20 flex flex-col items-center justify-center p-6 text-center"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4 shadow-lg">
                        <span className="font-heading font-bold text-2xl">S</span>
                    </div>
                    <h3 className="font-bold text-xl mb-1">SiriusMed</h3>
                    <p className="text-sm text-gray-500">Active Monitoring</p>
                    
                    <div className="mt-6 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <motion.div 
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="h-full bg-primary" 
                        />
                    </div>
                </motion.div>

                {/* Orbiting Satellites */}
                {CHANNELS.map((channel, i) => {
                    const angle = (i * 360) / CHANNELS.length;
                    return (
                        <motion.div
                            key={channel.id}
                            className="absolute left-1/2 top-1/2 w-48"
                            style={{ x: "-50%", y: "-50%" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                className="absolute w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100"
                                style={{ 
                                    left: `${140 * Math.cos(angle * Math.PI / 180)}px`, 
                                    top: `${140 * Math.sin(angle * Math.PI / 180)}px`,
                                }}
                                animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <channel.icon className={i === activeChannel ? "text-primary scale-110 transition-all" : "text-gray-400"} />
                                {i === activeChannel && (
                                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                                )}
                            </motion.div>
                        </motion.div>
                    )
                })}
                
                {/* Connecting Rings */}
                <div className="absolute inset-0 border border-dashed border-gray-300 rounded-full opacity-50 animate-spin-slow" />
                <div className="absolute inset-12 border border-dashed border-gray-200 rounded-full opacity-30 animate-reverse-spin" />
            </div>
        </div>
      </div>
    </section>
  );
}
