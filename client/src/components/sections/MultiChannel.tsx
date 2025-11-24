import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Bell, MessageSquare, Activity, Battery, Signal, Wifi } from "lucide-react";
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
        <div className="h-full flex flex-col bg-[#0F1C24] font-sans text-sm text-white">
             {/* Status Bar */}
             <div className="px-6 py-3 flex justify-between items-center text-xs font-medium">
                 <span>3:09</span>
                 <div className="flex gap-2 items-center">
                    <Signal size={14} />
                    <Wifi size={14} />
                    <Battery size={14} />
                 </div>
             </div>

             {/* Header */}
             <div className="bg-[#0F1C24] px-4 py-2 flex items-center gap-4 border-b border-gray-800">
                 <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">
                    VB
                 </div>
                 <div>
                    <div className="font-bold text-base">VB</div>
                    <div className="text-xs text-gray-400">voicebreeze</div>
                 </div>
             </div>
             
             {/* Chat Area */}
             <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#0b141a] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-5">
                 {/* Agent Message 1 */}
                 <div className="bg-[#1F2C34] p-3 rounded-xl rounded-tl-none self-start max-w-[85%] text-[13px] leading-relaxed shadow-sm">
                    Hi Daniel Alex! Good afternoon. Hope you're doing well. How are you feeling today?
                    <div className="text-[10px] text-gray-400 text-right mt-1">1:59 PM</div>
                 </div>

                 {/* User Message 1 */}
                 <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none self-end max-w-[85%] ml-auto text-[13px] leading-relaxed shadow-sm">
                    I am You?
                    <div className="text-[10px] text-green-200 text-right mt-1 flex justify-end items-center gap-1">
                        1:59 PM <span className="text-blue-300">✓✓</span>
                    </div>
                 </div>

                 {/* Agent Message 2 - Long */}
                 <div className="bg-[#1F2C34] p-3 rounded-xl rounded-tl-none self-start max-w-[85%] text-[13px] leading-relaxed shadow-sm">
                    <p className="mb-3">Glad to hear that, Daniel Alex. As an AI, I don't have personal feelings, but I'm here to support your health journey. How are you feeling overall today?</p>
                    <p>By the way, your afternoon dose today is Metformin 500 mg. When you've taken it, just reply YES here.</p>
                    <div className="text-[10px] text-gray-400 text-right mt-1">1:59 PM</div>
                 </div>

                 {/* User Message 2 */}
                 <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none self-end max-w-[85%] ml-auto text-[13px] leading-relaxed shadow-sm">
                    I have thanks
                    <div className="text-[10px] text-green-200 text-right mt-1 flex justify-end items-center gap-1">
                        2:00 PM <span className="text-blue-300">✓✓</span>
                    </div>
                 </div>

                 {/* Agent Message 3 */}
                 <div className="bg-[#1F2C34] p-3 rounded-xl rounded-tl-none self-start max-w-[85%] text-[13px] leading-relaxed shadow-sm">
                    Thank you for confirming you've taken your Metformin. How are you feeling overall today, Daniel Alex?
                    <div className="text-[10px] text-gray-400 text-right mt-1">2:00 PM</div>
                 </div>

                 {/* User Message 3 */}
                 <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none self-end max-w-[85%] ml-auto text-[13px] leading-relaxed shadow-sm">
                    Good good
                    <div className="text-[10px] text-green-200 text-right mt-1 flex justify-end items-center gap-1">
                        2:00 PM <span className="text-blue-300">✓✓</span>
                    </div>
                 </div>

                 {/* Agent Message 4 */}
                 <div className="bg-[#1F2C34] p-3 rounded-xl rounded-tl-none self-start max-w-[85%] text-[13px] leading-relaxed shadow-sm">
                    That's good to hear, Daniel. Is there anything else I can help you with today?
                    <div className="text-[10px] text-gray-400 text-right mt-1">2:00 PM</div>
                 </div>

                 {/* User Message 4 */}
                 <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none self-end max-w-[85%] ml-auto text-[13px] leading-relaxed shadow-sm">
                    None for now
                    <div className="text-[10px] text-green-200 text-right mt-1 flex justify-end items-center gap-1">
                        2:00 PM <span className="text-blue-300">✓✓</span>
                    </div>
                 </div>

                 {/* Agent Message 5 */}
                 <div className="bg-[#1F2C34] p-3 rounded-xl rounded-tl-none self-start max-w-[85%] text-[13px] leading-relaxed shadow-sm">
                    Okay, Daniel. Feel free to reach out if you have any questions or concerns later. Have a good day.
                    <div className="text-[10px] text-gray-400 text-right mt-1">2:00 PM</div>
                 </div>
             </div>
             
             {/* Input Area */}
             <div className="p-2 bg-[#1F2C34] flex items-center gap-2 pb-6">
                <div className="flex-1 bg-[#2A3942] rounded-full h-10 px-4 text-gray-400 flex items-center text-sm">Message</div>
                <div className="w-10 h-10 rounded-full bg-[#005C4B] flex items-center justify-center text-white">
                    <MessageCircle size={20} />
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
