import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { MessageCircle, Phone, Bell, MessageSquare } from "lucide-react";
import heroBg from "@assets/generated_images/Abstract_medical_tech_background_07a30b08.png";

const CHANNELS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    content: (
      <div className="flex flex-col h-full font-sans">
        <div className="bg-[#075E54] p-4 text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">SM</div>
          <div>
            <div className="font-semibold text-sm">SiriusMed</div>
            <div className="text-[10px] opacity-80">Business Account</div>
          </div>
        </div>
        <div className="flex-1 bg-[#E5DDD5] p-4 overflow-y-auto flex flex-col gap-3">
          <div className="self-start bg-white rounded-lg p-2 text-xs shadow-sm max-w-[80%]">
            Morning Daniel! Ready for your Metformin 500mg? 💊
            <div className="text-[9px] text-gray-400 text-right mt-1">08:00 AM</div>
          </div>
          <div className="self-end bg-[#DCF8C6] rounded-lg p-2 text-xs shadow-sm max-w-[80%]">
            Taken ✅
            <div className="text-[9px] text-gray-500 text-right mt-1">08:02 AM</div>
          </div>
           <div className="self-start bg-white rounded-lg p-2 text-xs shadow-sm max-w-[80%]">
            Great job! That's 5 days in a row. 🔥
            <div className="text-[9px] text-gray-400 text-right mt-1">08:02 AM</div>
          </div>
        </div>
        <div className="p-2 bg-[#F0F0F0] flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full h-8 px-3 text-xs flex items-center text-gray-400">Type a message</div>
          <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center text-white">
            <MessageCircle size={16} />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "call",
    label: "Phone Call",
    icon: Phone,
    color: "bg-blue-500",
    content: (
      <div className="flex flex-col h-full bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center z-10 mt-10">
          <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">SM</span>
          </div>
          <h3 className="text-xl font-semibold">SiriusMed</h3>
          <p className="text-sm text-gray-400">Adherence Assistant</p>
          <div className="mt-8 text-center px-8">
            <p className="text-lg font-medium leading-relaxed">"Hi Mrs. Okafor, it's time for your blood pressure medication."</p>
          </div>
          <div className="mt-12 flex gap-1 items-center h-8">
             {[1,2,3,4,5].map(i => (
                <motion.div 
                    key={i}
                    animate={{ height: [10, 24, 10] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                    className="w-1 bg-blue-400 rounded-full"
                />
             ))}
          </div>
        </div>
        <div className="p-8 pb-12 flex justify-around z-10">
            <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                <Phone className="rotate-[135deg]" fill="white" />
            </div>
        </div>
      </div>
    ),
  },
  {
    id: "notification",
    label: "Notification",
    icon: Bell,
    color: "bg-purple-500",
    content: (
      <div className="flex flex-col h-full bg-gray-100 relative">
        <div className="h-full w-full absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616055194447-68868a879e6e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
        <div className="relative z-10 pt-12 px-4 flex flex-col gap-2">
            <div className="text-6xl font-thin text-gray-800 text-center mb-8">09:41</div>
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex gap-3"
            >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                    <Bell size={20} />
                </div>
                <div>
                    <div className="flex justify-between items-baseline">
                        <h4 className="font-semibold text-sm text-gray-900">SiriusMed</h4>
                        <span className="text-[10px] text-gray-500">Now</span>
                    </div>
                    <p className="text-xs text-gray-700 mt-1">Time for your evening dose. Take it with food! 🍲</p>
                </div>
            </motion.div>
             <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm flex gap-3 opacity-60 scale-95"
            >
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white shrink-0">
                    <MessageCircle size={20} />
                </div>
                <div>
                     <div className="flex justify-between items-baseline">
                        <h4 className="font-semibold text-sm text-gray-900">WhatsApp</h4>
                        <span className="text-[10px] text-gray-500">10m ago</span>
                    </div>
                    <p className="text-xs text-gray-700 mt-1">Mom: Are you coming for dinner?</p>
                </div>
            </motion.div>
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const [activeChannel, setActiveChannel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChannel((prev) => (prev + 1) % CHANNELS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-background">
      {/* Background Abstract */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
         <img src={heroBg} className="w-full h-full object-cover" alt="" />
         <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-[1.1] text-foreground tracking-tight">
              From “Here’s your prescription” to <span className="text-primary">“I’ve actually taken it.”</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            SiriusMed Adherence is the always-on companion that walks with patients <em>after</em> they leave the clinic—over WhatsApp, voice calls, SMS, and intelligent notifications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-transform active:scale-95 shadow-lg shadow-primary/25">
              See the patient journey
            </button>
            <button className="bg-white text-foreground border border-border px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
              <MessageCircle size={20} className="text-green-500" />
              Watch WhatsApp Demo
            </button>
          </motion.div>

          {/* Channel Indicators */}
          <div className="pt-8 flex items-center gap-6">
             {CHANNELS.map((channel, index) => (
                <button 
                    key={channel.id}
                    onClick={() => setActiveChannel(index)}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${index === activeChannel ? 'text-foreground' : 'text-muted-foreground/50'}`}
                >
                    <div className={`w-2 h-2 rounded-full ${index === activeChannel ? channel.color : 'bg-gray-300'}`} />
                    {channel.label}
                </button>
             ))}
          </div>
        </div>

        {/* Right Content - Phone */}
        <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
                {/* Connecting Lines / Decor */}
                <div className="absolute -left-20 top-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent to-border hidden lg:block" />
                
                <PhoneFrame className="bg-white shadow-2xl shadow-blue-900/20 border-gray-900">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeChannel}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="h-full w-full"
                        >
                            {CHANNELS[activeChannel].content}
                        </motion.div>
                    </AnimatePresence>
                </PhoneFrame>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl max-w-[180px] border border-border/50 hidden md:block"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Live Status</span>
                    </div>
                    <p className="text-xs font-medium text-gray-700">"Patient confirmed dose via WhatsApp"</p>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
