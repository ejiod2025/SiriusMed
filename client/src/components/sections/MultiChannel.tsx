import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Bell, MessageSquare, Activity } from "lucide-react";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    color: "text-green-500",
    title: "WhatsApp Companion",
    desc: "Adherence in the patient's primary chat app.",
    detail: "Patients talk to SiriusMed just like a friend. Friendly nudges, one-tap responses, and natural language Q&A.",
    mock: (
        <div className="h-full flex flex-col bg-[#E5DDD5] font-sans text-sm">
             <div className="bg-[#075E54] p-4 text-white font-bold flex items-center gap-2 shadow-md">
                 <MessageCircle size={18} /> SiriusMed
             </div>
             <div className="flex-1 p-4 space-y-4 overflow-hidden">
                 <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[85%] rounded-tl-none">
                    Hey Daniel, it's time for your evening dose of Lisinopril 10mg. Want to take it now?
                 </div>
                 <div className="bg-[#DCF8C6] p-3 rounded-lg shadow-sm self-end max-w-[85%] ml-auto rounded-tr-none">
                    Taken ✅
                 </div>
                 <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[85%] rounded-tl-none">
                    Nice job – that's 5 days in a row 👏. Any side effects?
                 </div>
             </div>
        </div>
    )
  },
  {
    id: "voice",
    icon: Phone,
    color: "text-blue-500",
    title: "Voice Calling",
    desc: "For elders, low literacy, and complex regimens.",
    detail: "Proactive, natural voice calls that sound like a supportive nurse. Simple keypad responses and smart retry logic.",
    mock: (
        <div className="h-full flex flex-col bg-gray-900 text-white items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-900/20" />
             <div className="z-10 flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-6 border-4 border-gray-700">
                     <span className="text-3xl font-bold">SM</span>
                 </div>
                 <h3 className="text-xl font-medium">SiriusMed Calling...</h3>
                 <div className="mt-8 flex gap-1 h-6 items-end">
                    {[1,2,3,4,5].map(i => (
                        <motion.div 
                            key={i}
                            animate={{ height: [4, 24, 4] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                            className="w-1.5 bg-white rounded-full"
                        />
                    ))}
                 </div>
                 <p className="mt-8 text-center px-8 text-blue-200">"Hi Mrs. Okafor, did you take your blood pressure meds?"</p>
             </div>
             <div className="absolute bottom-12 flex gap-8">
                 <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                     <Phone className="rotate-[135deg]" fill="white" />
                 </div>
                 <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                     <Phone fill="white" />
                 </div>
             </div>
        </div>
    )
  },
  {
    id: "notifications",
    icon: Bell,
    color: "text-purple-500",
    title: "Smart Notifications",
    desc: "Intelligent notifications—not spam.",
    detail: "Timed, contextual, and state-aware. Bundles multiple meds and pauses when appropriate.",
    mock: (
        <div className="h-full bg-gray-50 pt-12 px-4 relative">
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-50 to-transparent" />
            <div className="space-y-3 relative z-10">
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex gap-3"
                >
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                        <Bell size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">Evening Meds</h4>
                        <p className="text-xs text-gray-500 mt-1">Bundled: Metformin + Atorvastatin</p>
                    </div>
                </motion.div>

                 <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex gap-3 opacity-60"
                >
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Activity size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">Health Check</h4>
                        <p className="text-xs text-gray-500 mt-1">How is your energy level today?</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
  },
  {
    id: "sms",
    icon: MessageSquare,
    color: "text-orange-500",
    title: "SMS Fallback",
    desc: "Low-data, low-friction backup.",
    detail: "When data is poor, we fall back to plain SMS. Clean, actionable, and keeps the same context.",
    mock: (
        <div className="h-full bg-white flex flex-col font-mono text-sm">
            <div className="bg-gray-100 p-4 border-b text-center text-gray-500 text-xs uppercase tracking-widest">
                Messages • Now
            </div>
            <div className="flex-1 p-4 space-y-6">
                <div className="text-center text-xs text-gray-400">Tue, 9:41 AM</div>
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none self-start max-w-[80%] text-gray-800">
                    SiriusMed: Hi Daniel, reply YES if you took your morning meds.
                </div>
                <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-none self-end ml-auto max-w-[80%] text-right">
                    YES
                </div>
                 <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none self-start max-w-[80%] text-gray-800">
                    Great. Logged at 9:42 AM.
                </div>
            </div>
        </div>
    )
  }
];

export default function MultiChannel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900">Multi-Channel Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We meet patients where they are.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            {/* Tabs/Navigation */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {FEATURES.map((feature, index) => (
                    <button
                        key={feature.id}
                        onClick={() => setActiveTab(index)}
                        className={cn(
                            "text-left p-6 rounded-2xl transition-all duration-300 border-2",
                            activeTab === index 
                                ? "bg-white border-primary shadow-lg scale-105 z-10" 
                                : "bg-white/50 border-transparent hover:bg-white hover:border-gray-200 text-gray-600 grayscale-[0.5]"
                        )}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className={cn("p-2 rounded-lg bg-gray-100", feature.color)}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">{feature.desc}</p>
                        <AnimatePresence>
                            {activeTab === index && (
                                <motion.p 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="text-sm text-gray-500 overflow-hidden"
                                >
                                    {feature.detail}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </button>
                ))}
            </div>

            {/* Phone Preview */}
            <div className="lg:col-span-7 flex items-center justify-center bg-gray-100/50 rounded-[3rem] p-8">
                <PhoneFrame className="h-[650px] w-[350px] shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full w-full"
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
