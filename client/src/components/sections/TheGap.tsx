import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Pill, TrendingDown, TrendingUp, Calendar, Phone, MessageCircle, Bell, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [dayCounter, setDayCounter] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setDayCounter(prev => (prev < 30 ? prev + 1 : prev));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  // Adherence data points - showing decline without support vs sustained with SiriusMed
  const days = [0, 3, 7, 14, 21, 30];
  const withoutSupport = [100, 85, 65, 40, 25, 15];
  const withSiriusMed = [100, 98, 95, 93, 92, 91];

  const missedDoses = [
    { day: 3, reason: "Forgot morning dose" },
    { day: 5, reason: "Ran out of refills" },
    { day: 8, reason: "Side effects concern" },
    { day: 12, reason: "Schedule conflict" },
    { day: 18, reason: "Feeling better, stopped" },
  ];

  const siriusmedTouches = [
    { day: 2, type: "whatsapp", message: "Morning reminder sent" },
    { day: 4, type: "call", message: "Check-in call completed" },
    { day: 7, type: "alert", message: "Refill reminder" },
    { day: 10, type: "whatsapp", message: "Answered side effects question" },
    { day: 15, type: "call", message: "Progress celebration" },
    { day: 20, type: "whatsapp", message: "Motivation & support" },
  ];

  return (
    <section ref={containerRef} id="gap" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-[#1e3a5f]"
          >
            The Reality Gap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            After leaving the clinic, adherence drops dramatically without continuous support
          </motion.p>
        </div>

        {/* Main Comparison */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline Header */}
          <div className="flex items-center justify-between mb-8 px-4">
            <div className="flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-900">Day {dayCounter} after prescription</span>
            </div>
          </div>

          {/* Without Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 mb-8 border-2 border-red-100 shadow-xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Without Continuous Support</h3>
                    <p className="text-gray-600">Traditional care model</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-red-600">
                    {Math.max(15, 100 - Math.floor(dayCounter * 2.8))}%
                  </div>
                  <p className="text-sm text-gray-500">Adherence rate</p>
                </div>
              </div>

              {/* Adherence Graph */}
              <div className="mb-6">
                <svg className="w-full h-32" viewBox="0 0 600 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="declineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill area */}
                  <motion.path
                    d="M 0,0 L 100,15 L 200,35 L 300,60 L 400,75 L 500,85 L 600,85 L 600,100 L 0,100 Z"
                    fill="url(#declineGradient)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  
                  {/* Line */}
                  <motion.path
                    d="M 0,0 L 100,15 L 200,35 L 300,60 L 400,75 L 500,85 L 600,85"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.6 }}
                  />
                </svg>
              </div>

              {/* Missed Doses Timeline */}
              <div className="space-y-3">
                {missedDoses.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView && dayCounter >= item.day ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-500 font-mono">Day {item.day}</span>
                    <span className="text-gray-700">{item.reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* With SiriusMed Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl p-8 border-2 border-primary/20 shadow-xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">With SiriusMed</h3>
                    <p className="text-gray-600">Continuous engagement layer</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-primary">
                    {Math.max(91, 100 - Math.floor(dayCounter * 0.3))}%
                  </div>
                  <p className="text-sm text-gray-500">Adherence rate</p>
                </div>
              </div>

              {/* Adherence Graph */}
              <div className="mb-6">
                <svg className="w-full h-32" viewBox="0 0 600 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sustainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill area */}
                  <motion.path
                    d="M 0,0 L 100,2 L 200,5 L 300,7 L 400,8 L 500,9 L 600,9 L 600,100 L 0,100 Z"
                    fill="url(#sustainGradient)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                  
                  {/* Line */}
                  <motion.path
                    d="M 0,0 L 100,2 L 200,5 L 300,7 L 400,8 L 500,9 L 600,9"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                </svg>
              </div>

              {/* SiriusMed Touchpoints Timeline */}
              <div className="space-y-3">
                {siriusmedTouches.map((item, i) => {
                  const icons = {
                    whatsapp: MessageCircle,
                    call: Phone,
                    alert: Bell,
                  };
                  const Icon = icons[item.type as keyof typeof icons];
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView && dayCounter >= item.day ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 + i * 0.2 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-gray-500 font-mono">Day {item.day}</span>
                      <span className="text-gray-700">{item.message}</span>
                      <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">76%</div>
                <p className="text-gray-700">Higher adherence with continuous support</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">3.5x</div>
                <p className="text-gray-700">Better patient retention</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <p className="text-gray-700">Patients feel supported daily</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
