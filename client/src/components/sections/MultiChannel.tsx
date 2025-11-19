import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Bell, MessageSquare, Activity } from "lucide-react";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    title: "WhatsApp",
    desc: "Natural chat interface.",
    mock: (
        <div className="h-full flex flex-col bg-[#E5DDD5] font-sans text-sm">
             <div className="bg-[#075E54] p-4 text-white font-bold flex items-center gap-2 shadow-md">
                 <MessageCircle size={18} /> SiriusMed
             </div>
             <div className="flex-1 p-4 space-y-4 overflow-hidden bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
                 <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[85%] rounded-tl-none">
                    Hey Daniel, time for your Metformin. 💊
                 </div>
                 <div className="bg-[#DCF8C6] p-3 rounded-lg shadow-sm self-end max-w-[85%] ml-auto rounded-tr-none">
                    Taken ✅
                 </div>
             </div>
        </div>
    )
  },
  {
    id: "voice",
    icon: Phone,
    color: "bg-blue-500",
    title: "Voice AI",
    desc: "For complex care needs.",
    mock: (
        <div className="h-full flex flex-col bg-gray-900 text-white items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-900/20" />
             <div className="z-10 flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                     <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" />
                 </div>
                 <h3 className="text-lg font-medium mb-2">SiriusMed Voice</h3>
                 <div className="flex gap-1 h-8 items-center">
                    {[1,2,3,4,5].map(i => (
                        <motion.div 
                            key={i}
                            animate={{ height: [8, 32, 8] }}
                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                            className="w-1 bg-blue-400 rounded-full"
                        />
                    ))}
                 </div>
             </div>
        </div>
    )
  },
  {
    id: "notifications",
    icon: Bell,
    color: "bg-purple-500",
    title: "Smart Alerts",
    desc: "Context-aware nudges.",
    mock: (
        <div className="h-full bg-gray-50 pt-20 px-6 relative">
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/50 flex gap-4"
            >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Bell size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">Evening Meds</h4>
                    <p className="text-xs text-gray-500">Time to take your dose.</p>
                </div>
            </motion.div>
        </div>
    )
  }
];

export default function MultiChannel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Interactive Controls */}
            <div>
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block"
                >
                    Omnichannel Presence
                </motion.span>
                <h2 className="text-5xl font-heading font-bold mb-8 leading-tight">
                    Meeting patients <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">where they live.</span>
                </h2>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                    No new apps to download. SiriusMed lives inside the tools your patients already use every day.
                </p>

                <div className="space-y-4">
                    {FEATURES.map((feature, index) => (
                        <motion.button
                            key={feature.id}
                            onClick={() => setActiveTab(index)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                "w-full p-4 rounded-2xl flex items-center gap-4 transition-all border-2 text-left",
                                activeTab === index 
                                    ? "bg-white border-primary shadow-xl shadow-primary/10" 
                                    : "bg-gray-50 border-transparent hover:bg-gray-100 text-gray-500"
                            )}
                        >
                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform", feature.color, activeTab === index ? "scale-110" : "grayscale")}>
                                <feature.icon size={20} />
                            </div>
                            <div>
                                <h3 className={cn("font-bold text-lg", activeTab === index ? "text-gray-900" : "text-gray-500")}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm opacity-80">{feature.desc}</p>
                            </div>
                            {activeTab === index && (
                                <motion.div layoutId="active-indicator" className="ml-auto w-2 h-2 rounded-full bg-primary" />
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Right Side: Phone Preview */}
            <div className="relative flex justify-center">
                {/* Decorative Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                
                <PhoneFrame className="h-[600px] w-[320px] shadow-2xl border-gray-900 bg-gray-900 relative z-10 rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="h-full w-full bg-white"
                        >
                            {FEATURES[activeTab].mock}
                        </motion.div>
                    </AnimatePresence>
                </PhoneFrame>
            </div>
        </div>
      </div>
    </section>
  );
}
