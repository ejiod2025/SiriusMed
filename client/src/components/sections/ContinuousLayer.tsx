import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, Repeat, Activity, BarChart3, List } from "lucide-react";

export default function ContinuousLayer() {
  const cards = [
    { 
      id: "translate",
      icon: MessageSquare, 
      title: "Translate", 
      description: "Rx becomes a conversation.",
      gridArea: "translate"
    },
    { 
      id: "guide",
      icon: CheckCircle, 
      title: "Guide", 
      description: "Nudges & clarifications at dose time",
      gridArea: "guide"
    },
    { 
      id: "engage",
      icon: Repeat, 
      title: "Engage", 
      description: "The patient receives messages across channels",
      gridArea: "engage"
    },
    { 
      id: "adapt",
      icon: Activity, 
      title: "Adapt", 
      description: "Learns and adjusts to life & routine",
      gridArea: "adapt"
    },
    { 
      id: "monitor",
      icon: List, 
      title: "Monitor", 
      description: "Tracks adherence context",
      gridArea: "monitor"
    },
    { 
      id: "report",
      icon: BarChart3, 
      title: "Report", 
      description: "Live data to clinic",
      gridArea: "report"
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            We don't replace providers. We act as the intelligent connective tissue between visits.
          </motion.p>
        </div>

        {/* Diagram Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Grid Layout for Cards */}
          <div 
            className="grid gap-6 relative z-20"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto auto auto",
              gridTemplateAreas: `
                "translate . guide"
                "engage adapt monitor"
                ". report ."
              `
            }}
          >
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6"
                  style={{ gridArea: card.gridArea }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* SVG Overlay for Connecting Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Translate to Engage - left arc down */}
            <motion.path
              d="M 16,16 Q 5,30 16,50"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Engage to Adapt - bottom left arc */}
            <motion.path
              d="M 16,50 Q 30,58 50,50"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />

            {/* Adapt to Report - down */}
            <motion.path
              d="M 50,50 Q 50,65 50,83"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
            />

            {/* Report to Monitor - bottom right arc */}
            <motion.path
              d="M 50,83 Q 65,58 84,50"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
            />

            {/* Monitor to Guide - right arc up */}
            <motion.path
              d="M 84,50 Q 95,30 84,16"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.3 }}
            />

            {/* Guide to Translate - top arc */}
            <motion.path
              d="M 84,16 Q 50,8 16,16"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
