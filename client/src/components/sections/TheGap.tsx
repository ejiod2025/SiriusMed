import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Phone, MessageCircle, Bell, CheckCircle, XCircle, TrendingDown, TrendingUp } from "lucide-react";

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

        <div className="max-w-6xl mx-auto">
          {/* Timeline Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-900">Day {dayCounter} after prescription</span>
            </div>
          </div>

          {/* Combined Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-2xl relative overflow-hidden mb-8"
          >
            {/* Header with both metrics */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Without Support */}
              <div className="flex items-center justify-between bg-red-50 rounded-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Without Continuous Support</h3>
                    <p className="text-sm text-gray-600">Traditional care model</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-red-600">
                    {Math.max(15, 100 - Math.floor(dayCounter * 2.8))}%
                  </div>
                  <p className="text-xs text-gray-500">Adherence rate</p>
                </div>
              </div>

              {/* With SiriusMed */}
              <div className="flex items-center justify-between bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">With SiriusMed</h3>
                    <p className="text-sm text-gray-600">Continuous engagement layer</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-primary">
                    {Math.max(91, 100 - Math.floor(dayCounter * 0.3))}%
                  </div>
                  <p className="text-xs text-gray-500">Adherence rate</p>
                </div>
              </div>
            </div>

            {/* Combined Graph */}
            <div className="mb-8 bg-gray-50 rounded-2xl p-6">
              <svg className="w-full h-64" viewBox="0 0 600 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="declineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="sustainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                  </linearGradient>
                  {/* Gap fill between lines */}
                  <linearGradient id="gapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                <line x1="0" y1="0" x2="600" y2="0" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="50" x2="600" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="100" x2="600" y2="100" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="150" x2="600" y2="150" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="200" x2="600" y2="200" stroke="#e5e7eb" strokeWidth="1" />

                {/* The Gap Area (between both lines) */}
                <motion.path
                  d="M 0,0 L 100,4 L 200,10 L 300,14 L 400,16 L 500,18 L 600,18 L 600,170 L 500,150 L 400,120 L 300,70 L 200,30 L 100,15 Z"
                  fill="url(#gapGradient)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                
                {/* Without Support Line (declining) */}
                <motion.path
                  d="M 0,0 L 100,30 L 200,70 L 300,120 L 400,150 L 500,170 L 600,170"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.6 }}
                />

                {/* With SiriusMed Line (sustained) */}
                <motion.path
                  d="M 0,0 L 100,4 L 200,10 L 300,14 L 400,16 L 500,18 L 600,18"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.8 }}
                />

                {/* Y-axis labels */}
                <text x="-10" y="5" fontSize="12" fill="#9ca3af" textAnchor="end">100%</text>
                <text x="-10" y="105" fontSize="12" fill="#9ca3af" textAnchor="end">50%</text>
                <text x="-10" y="205" fontSize="12" fill="#9ca3af" textAnchor="end">0%</text>

                {/* X-axis labels */}
                <text x="0" y="220" fontSize="12" fill="#9ca3af" textAnchor="middle">0d</text>
                <text x="200" y="220" fontSize="12" fill="#9ca3af" textAnchor="middle">10d</text>
                <text x="400" y="220" fontSize="12" fill="#9ca3af" textAnchor="middle">20d</text>
                <text x="600" y="220" fontSize="12" fill="#9ca3af" textAnchor="middle">30d</text>
              </svg>

              {/* Legend */}
              <div className="flex items-center justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-red-500 rounded-full" />
                  <span className="text-sm text-gray-600">Without support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-primary rounded-full" />
                  <span className="text-sm text-gray-900 font-semibold">With SiriusMed</span>
                </div>
              </div>
            </div>

            {/* Timeline Events - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Without Support Events */}
              <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Missed Doses & Issues
                </h4>
                <div className="space-y-3">
                  {missedDoses.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView && dayCounter >= item.day ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.4 + i * 0.15 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-500 font-mono text-xs">Day {item.day}</span>
                        <p className="text-gray-700">{item.reason}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* With SiriusMed Events */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  SiriusMed Interventions
                </h4>
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
                        transition={{ duration: 0.4, delay: 1.6 + i * 0.15 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-500 font-mono text-xs">Day {item.day}</span>
                          <p className="text-gray-700">{item.message}</p>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
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
