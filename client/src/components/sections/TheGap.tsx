import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Calendar, Phone, MessageCircle, Bell, CheckCircle, XCircle, TrendingDown, TrendingUp, Zap } from "lucide-react";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [dayCounter, setDayCounter] = useState(0);
  const [hoveredSide, setHoveredSide] = useState<'without' | 'with' | null>(null);

  // Animated counter with spring physics
  const animatedDay = useMotionValue(0);
  const springDay = useSpring(animatedDay, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setDayCounter(prev => {
          const next = prev < 30 ? prev + 1 : prev;
          animatedDay.set(next);
          return next;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isInView, animatedDay]);

  const missedDoses = [
    { day: 3, reason: "Forgot morning dose", severity: "medium" },
    { day: 5, reason: "Ran out of refills", severity: "high" },
    { day: 8, reason: "Side effects concern", severity: "high" },
    { day: 12, reason: "Schedule conflict", severity: "medium" },
    { day: 18, reason: "Feeling better, stopped", severity: "critical" },
  ];

  const siriusmedTouches = [
    { day: 2, type: "whatsapp", message: "Morning reminder sent", icon: MessageCircle },
    { day: 4, type: "call", message: "Check-in call completed", icon: Phone },
    { day: 7, type: "alert", message: "Refill reminder", icon: Bell },
    { day: 10, type: "whatsapp", message: "Answered side effects question", icon: MessageCircle },
    { day: 15, type: "call", message: "Progress celebration", icon: Phone },
    { day: 20, type: "whatsapp", message: "Motivation & support", icon: MessageCircle },
  ];

  return (
    <section ref={containerRef} id="gap" className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-2 rounded-full mb-6 border border-primary/20"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Data-Driven Insights</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-[#1e3a5f] to-primary bg-clip-text text-transparent"
          >
            The Reality Gap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            After leaving the clinic, adherence drops dramatically without continuous support
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Header with animated counter */}
          <div className="flex items-center justify-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", delay: 0.3 }}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4 rounded-full border-2 border-blue-200 shadow-lg"
            >
              <Calendar className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-blue-900 text-lg">
                Day <motion.span className="inline-block tabular-nums">{dayCounter}</motion.span> after prescription
              </span>
            </motion.div>
          </div>

          {/* Main Combined Chart Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-10 border-2 border-gray-200 shadow-2xl relative overflow-hidden"
          >
            {/* Gradient orb effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full blur-3xl" />

            {/* Header Metrics Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-10 relative z-10">
              {/* Without Support Card */}
              <motion.div 
                onHoverStart={() => setHoveredSide('without')}
                onHoverEnd={() => setHoveredSide(null)}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border-2 border-red-200 shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={hoveredSide === 'without' ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-red-200 flex items-center justify-center shadow-md"
                    >
                      <TrendingDown className="w-6 h-6 text-red-700" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Without Continuous Support</h3>
                      <p className="text-sm text-gray-600">Traditional care model</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <motion.div 
                    key={dayCounter}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-bold text-red-600"
                  >
                    {Math.max(15, 100 - Math.floor(dayCounter * 2.8))}%
                  </motion.div>
                  <p className="text-sm text-gray-500 mb-1">Adherence rate</p>
                </div>
              </motion.div>

              {/* With SiriusMed Card */}
              <motion.div 
                onHoverStart={() => setHoveredSide('with')}
                onHoverEnd={() => setHoveredSide(null)}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-gradient-to-br from-primary/10 to-indigo-100/50 rounded-2xl p-6 border-2 border-primary/30 shadow-lg transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: [-200, 600] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={hoveredSide === 'with' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-md"
                    >
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">With SiriusMed</h3>
                      <p className="text-sm text-gray-600">Continuous engagement layer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 relative z-10">
                  <motion.div 
                    key={dayCounter}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-bold text-primary"
                  >
                    {Math.max(91, 100 - Math.floor(dayCounter * 0.3))}%
                  </motion.div>
                  <p className="text-sm text-gray-500 mb-1">Adherence rate</p>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Combined Graph */}
            <div className="mb-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-inner relative">
              <svg className="w-full h-72" viewBox="0 0 600 250" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="declineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="sustainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="gapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.1" />
                  </linearGradient>
                  
                  {/* Glow filter */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid lines */}
                {[0, 62.5, 125, 187.5, 250].map((y, i) => (
                  <motion.line
                    key={i}
                    x1="0" y1={y} x2="600" y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray={y === 0 || y === 250 ? "0" : "5,5"}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.5 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                ))}

                {/* The Gap Area with enhanced gradient */}
                <motion.path
                  d="M 0,0 L 100,5 L 200,12.5 L 300,17.5 L 400,20 L 500,22.5 L 600,22.5 L 600,212.5 L 500,187.5 L 400,150 L 300,87.5 L 200,37.5 L 100,18.75 Z"
                  fill="url(#gapGradient)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.3 }}
                />
                
                {/* Fill under Without Support line */}
                <motion.path
                  d="M 0,0 L 100,37.5 L 200,87.5 L 300,150 L 400,187.5 L 500,212.5 L 600,212.5 L 600,250 L 0,250 Z"
                  fill="url(#declineGradient)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                />

                {/* Fill under SiriusMed line */}
                <motion.path
                  d="M 0,0 L 100,5 L 200,12.5 L 300,17.5 L 400,20 L 500,22.5 L 600,22.5 L 600,250 L 0,250 Z"
                  fill="url(#sustainGradient)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                
                {/* Without Support Line (declining) */}
                <motion.path
                  d="M 0,0 L 100,37.5 L 200,87.5 L 300,150 L 400,187.5 L 500,212.5 L 600,212.5"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2.5, delay: 0.7, ease: "easeInOut" }}
                />

                {/* With SiriusMed Line (sustained) */}
                <motion.path
                  d="M 0,0 L 100,5 L 200,12.5 L 300,17.5 L 400,20 L 500,22.5 L 600,22.5"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2.5, delay: 0.9, ease: "easeInOut" }}
                />

                {/* Animated dots on lines */}
                {[0, 100, 200, 300, 400, 500, 600].map((x, i) => {
                  const withoutY = x === 0 ? 0 : x === 100 ? 37.5 : x === 200 ? 87.5 : x === 300 ? 150 : x === 400 ? 187.5 : x === 500 ? 212.5 : 212.5;
                  const withY = x === 0 ? 0 : x === 100 ? 5 : x === 200 ? 12.5 : x === 300 ? 17.5 : x === 400 ? 20 : x === 500 ? 22.5 : 22.5;
                  
                  return (
                    <g key={i}>
                      <motion.circle
                        cx={x} cy={withoutY} r="5"
                        fill="#ef4444"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: [0, 1.2, 1] } : {}}
                        transition={{ delay: 0.7 + i * 0.15, duration: 0.5 }}
                      />
                      <motion.circle
                        cx={x} cy={withY} r="5"
                        fill="#6366f1"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: [0, 1.2, 1] } : {}}
                        transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
                      />
                    </g>
                  );
                })}

                {/* Axis labels */}
                <text x="-35" y="5" fontSize="14" fill="#6b7280" fontWeight="500">100%</text>
                <text x="-35" y="130" fontSize="14" fill="#6b7280" fontWeight="500">50%</text>
                <text x="-35" y="255" fontSize="14" fill="#6b7280" fontWeight="500">0%</text>

                <text x="0" y="275" fontSize="13" fill="#9ca3af" textAnchor="middle">Day 0</text>
                <text x="200" y="275" fontSize="13" fill="#9ca3af" textAnchor="middle">Day 10</text>
                <text x="400" y="275" fontSize="13" fill="#9ca3af" textAnchor="middle">Day 20</text>
                <text x="600" y="275" fontSize="13" fill="#9ca3af" textAnchor="middle">Day 30</text>
              </svg>

              {/* Enhanced Legend */}
              <div className="flex items-center justify-center gap-8 mt-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200"
                >
                  <div className="w-10 h-1.5 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-sm" />
                  <span className="text-sm text-gray-700 font-medium">Without support</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/30"
                >
                  <div className="w-10 h-1.5 bg-gradient-to-r from-primary to-indigo-600 rounded-full shadow-sm" />
                  <span className="text-sm text-gray-900 font-semibold">With SiriusMed</span>
                </motion.div>
              </div>
            </div>

            {/* Timeline Events Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Without Support Events */}
              <div className="bg-gradient-to-br from-red-50/50 to-red-100/30 rounded-2xl p-6 border-2 border-red-100">
                <h4 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-200 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <span>Missed Doses & Issues</span>
                </h4>
                <div className="space-y-3">
                  {missedDoses.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView && dayCounter >= item.day ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.5 + i * 0.2, type: "spring" }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-red-100 shadow-sm"
                    >
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Day {item.day}</span>
                        </div>
                        <p className="text-sm text-gray-700 font-medium">{item.reason}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* With SiriusMed Events */}
              <div className="bg-gradient-to-br from-primary/5 to-indigo-100/30 rounded-2xl p-6 border-2 border-primary/20">
                <h4 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span>SiriusMed Interventions</span>
                </h4>
                <div className="space-y-3">
                  {siriusmedTouches.map((item, i) => {
                    const Icon = item.icon;
                    
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView && dayCounter >= item.day ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.7 + i * 0.2, type: "spring" }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-primary/20 shadow-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-3 h-3 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Day {item.day}</span>
                          </div>
                          <p className="text-sm text-gray-700 font-medium">{item.message}</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="mt-10 bg-gradient-to-r from-primary/10 via-indigo-50 to-secondary/10 rounded-3xl p-10 border-2 border-primary/20 shadow-xl"
          >
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                { value: "76%", label: "Higher adherence with continuous support", color: "text-primary" },
                { value: "3.5x", label: "Better patient retention", color: "text-secondary" },
                { value: "92%", label: "Patients feel supported daily", color: "text-primary" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 2.4 + i * 0.2, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-3`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
