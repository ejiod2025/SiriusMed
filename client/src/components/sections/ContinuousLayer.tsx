import React from "react";
import { motion } from "framer-motion";
import { Pill, MessageCircle, Users, Frown, Calendar } from "lucide-react";

export default function ContinuousLayer() {
  const stages = [
    {
      id: "translate",
      icon: Pill,
      title: "Translate",
      description: "Start point at clinic",
      position: "left",
    },
    {
      id: "guide",
      icon: MessageCircle,
      title: "Guide",
      description: "Med guidance during busy days",
      position: "right",
    },
    {
      id: "engage",
      icon: Users,
      title: "Engage",
      description: "Patient enters real-life environment",
      position: "left",
    },
    {
      id: "monitor",
      icon: Frown,
      title: "Monitor",
      description: "Icons showing side-effect and symptom capture",
      position: "right",
    },
    {
      id: "adapt",
      icon: Frown,
      title: "Adapt",
      description: "Icons showing side-effect, and symptom capture",
      position: "left",
    },
    {
      id: "appointment",
      icon: Calendar,
      title: "Next Appointment",
      description: "",
      position: "right",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-[#1e3a5f]"
          >
            The Continuous Health Layer
          </motion.h2>
        </div>

        {/* Journey Flow - Wider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative" style={{ minHeight: '900px' }}>
            {/* Winding Path SVG */}
            <svg 
              className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 400 900" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>

              {/* Winding path from bottom to top */}
              <motion.path
                d="M 120,900 Q 120,820 120,750 Q 120,680 200,630 Q 280,580 280,500 Q 280,420 120,370 Q 40,340 120,250 Q 200,160 280,150 Q 340,140 320,80 L 320,0"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>

            {/* Stage Nodes */}
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const positions = [
                { bottom: '0%', left: '10%' },      // Translate
                { bottom: '17%', right: '15%' },    // Guide
                { bottom: '34%', left: '5%' },      // Engage
                { bottom: '51%', right: '10%' },    // Monitor
                { bottom: '68%', left: '10%' },     // Adapt
                { bottom: '85%', right: '15%' },    // Next Appointment
              ];

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.5 + index * 0.2, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15
                  }}
                  className="absolute z-20"
                  style={positions[index]}
                >
                  <div className={`flex ${stage.position === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center gap-4 max-w-sm`}>
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-xl"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                    </motion.div>

                    {/* Text Content */}
                    <div className={`${stage.position === 'right' ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stage.title}</h3>
                      {stage.description && (
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{stage.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl"
            />
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            From prescription to appointment, SiriusMed creates a continuous bridge of support, 
            <span className="font-semibold text-primary"> adapting to life's realities along the way.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
