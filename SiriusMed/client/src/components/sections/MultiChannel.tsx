import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Bell, Signal, Wifi, Battery, Check, ArrowLeft, Video, MoreVertical, Mic, Plus, Camera } from "lucide-react";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { cn } from "@/lib/utils";

// --- Mock Data & Assets ---

const WHATSAPP_SCRIPT = [
  { type: "agent", text: "Hi Daniel Alex! Good afternoon. Hope you're doing well. How are you feeling today?", delay: 1000 },
  { type: "user", text: "I am good. You?", delay: 2500 },
  { type: "agent", text: "Glad to hear that, Daniel Alex. As an AI, I don't have personal feelings, but I'm here to support your health journey. How are you feeling overall today?\n\nBy the way, your afternoon dose today is Metformin 500 mg. When you've taken it, just reply YES here.", delay: 4000 },
  { type: "user", text: "I have thanks", delay: 6000 },
  { type: "agent", text: "Thank you for confirming you've taken your Metformin. How are you feeling overall today, Daniel Alex?", delay: 7500 },
  { type: "user", text: "Good good", delay: 9000 },
  { type: "agent", text: "That's good to hear, Daniel. Is there anything else I can help you with today?", delay: 10500 },
  { type: "user", text: "None for now", delay: 12000 },
  { type: "agent", text: "Okay, Daniel. Feel free to reach out if you have any questions or concerns later. Have a good day.", delay: 13500 },
];

// --- Components ---

const WhatsAppSimulation = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    let currentTime = 0;

    // Reset
    setMessages([]);

    WHATSAPP_SCRIPT.forEach((msg, index) => {
      // 1. Show typing indicator before message (if agent)
      //    For user, we can just "appear" or show typing too. Let's show typing for both for "realism"
      const typingStart = currentTime;
      const messageAppear = currentTime + 1500; // Typing takes 1.5s

      // Start Typing
      timeoutIds.push(setTimeout(() => {
        setIsTyping(true);
        // Scroll to bottom when typing starts
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }, typingStart));

      // Stop Typing & Show Message
      timeoutIds.push(setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, msg]);
        // Scroll to bottom when message appears
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }, messageAppear));

      // Set next start time (message delay + typing duration)
      currentTime = messageAppear + (index < WHATSAPP_SCRIPT.length - 1 ? 1000 : 0); 
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  useEffect(() => {
     if (scrollRef.current) {
         scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
     }
  }, [messages, isTyping]);

  return (
    <div className="h-full flex flex-col bg-[#E5DDD5] font-sans text-sm relative overflow-hidden">
        {/* Status Bar */}
        <div className="bg-[#054D44] text-white px-6 py-3 flex justify-between items-center text-xs font-medium z-20">
            <span>3:09</span>
            <div className="flex gap-2 items-center">
            <Signal size={14} />
            <Wifi size={14} />
            <Battery size={14} />
            </div>
        </div>

        {/* Header */}
        <div className="bg-[#075E54] px-2 py-2 flex items-center gap-2 shadow-md z-20 text-white">
            <ArrowLeft size={20} />
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold border border-white/20">
                SiriusMed
            </div>
            <div className="flex-1 min-w-0">
                <div className="font-bold text-sm truncate">SiriusMed</div>
                <div className="text-[10px] text-white/80 truncate">
                    {isTyping ? "typing..." : "siriusmed"}
                </div>
            </div>
            <div className="flex gap-4 pr-2">
                <Video size={20} />
                <Phone size={20} />
                <MoreVertical size={20} />
            </div>
        </div>
        
        {/* Chat Area */}
        <div 
            ref={scrollRef}
            className="flex-1 p-4 space-y-2 overflow-y-auto bg-[#E5DDD5] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"
        >
            <div className="flex justify-center my-4">
                <span className="bg-[#E1F3FB] text-gray-800 text-[10px] px-2 py-1 rounded-md shadow-sm uppercase font-medium">
                    Today
                </span>
            </div>

            <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={cn(
                            "max-w-[85%] p-2 rounded-lg text-[13px] leading-snug shadow-sm relative pb-5",
                            msg.type === "agent" 
                                ? "bg-white self-start rounded-tl-none mr-auto" 
                                : "bg-[#DCF8C6] self-end rounded-tr-none ml-auto"
                        )}
                    >
                        {msg.text.split('\n').map((line: string, l: number) => (
                             <p key={l} className={l > 0 ? "mt-2" : ""}>{line}</p>
                        ))}
                        <div className="absolute right-2 bottom-1 flex items-center gap-1">
                             <span className="text-[10px] text-gray-500">
                                2:0{Math.floor(i/2)} PM
                             </span>
                             {msg.type === "user" && (
                                <div className="flex">
                                     <Check size={12} className="text-[#34B7F1]" />
                                     <Check size={12} className="text-[#34B7F1] -ml-[8px]" />
                                </div>
                             )}
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {isTyping && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-3 rounded-lg rounded-tl-none self-start max-w-[85%] mr-auto shadow-sm w-16"
                >
                    <div className="flex gap-1 justify-center">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    </div>
                </motion.div>
            )}
        </div>
        
        {/* Input Area */}
        <div className="p-2 bg-[#F0F0F0] flex items-center gap-2 pb-6 z-20">
           <div className="bg-white flex-1 rounded-full h-10 px-4 flex items-center gap-2 shadow-sm">
               <div className="text-gray-400">
                   <Plus size={20} className="rotate-45" />
               </div>
               <input 
                 disabled 
                 className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400"
                 placeholder="Message"
               />
               <div className="flex gap-3 text-gray-400">
                   <Camera size={20} />
               </div>
           </div>
           <div className="w-10 h-10 rounded-full bg-[#005C4B] flex items-center justify-center text-white shadow-sm">
               <Mic size={20} />
           </div>
        </div>
    </div>
  );
};

// --- Main Component ---

const FEATURES = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    title: "WhatsApp",
    desc: "Natural chat interface.",
    component: <WhatsAppSimulation />
  },
  {
    id: "voice",
    icon: Phone,
    color: "bg-blue-500",
    title: "Voice AI",
    desc: "For complex care needs.",
    component: (
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
    component: (
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
                            {FEATURES[activeTab].component}
                        </motion.div>
                    </AnimatePresence>
                </PhoneFrame>
            </div>
        </div>
      </div>
    </section>
  );
}
