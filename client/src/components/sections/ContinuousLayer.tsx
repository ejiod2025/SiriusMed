import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, Repeat, Activity, BarChart3, Lightbulb } from "lucide-react";

export default function ContinuousLayer() {
  const cards = [
    { 
      id: "translate",
      icon: MessageSquare, 
      title: "Translate", 
      description: "Rx becomes a conversation.",
      position: { top: "10%", left: "15%" }
    },
    { 
      id: "guide",
      icon: CheckCircle, 
      title: "Guide", 
      description: "Nudges & clarifications at dose time",
      position: { top: "10%", right: "15%" }
    },
    { 
      id: "engage",
      icon: Repeat, 
      title: "Engage", 
      description: "The patient receives messages across channels",
      position: { top: "40%", left: "5%" }
    },
    { 
      id: "adapt",
      icon: Activity, 
      title: "Adapt", 
      description: "Learns and adjusts to life & routine",
      position: { top: "40%", left: "50%", transform: "translateX(-50%)" }
    },
    { 
      id: "monitor",
      icon: Lightbulb, 
      title: "Monitor", 
      description: "Tracks adherence context",
      position: { top: "40%", right: "5%" }
    },
    { 
      id: "report",
      icon: BarChart3, 
      title: "Report", 
      description: "Live data to clinic",
      position: { top: "70%", left: "50%", transform: "translateX(-50%)" }
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

        {/* Circular Flow Diagram */}
        <div className="relative max-w-5xl mx-auto" style={{ height: "600px" }}>
          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Connecting curved paths forming a cycle */}
            {/* Translate to Engage */}
            <motion.path
              d="M 200,100 Q 100,150 100,250"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Engage to Adapt */}
            <motion.path
              d="M 150,250 Q 300,280 450,250"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />

            {/* Adapt to Report */}
            <motion.path
              d="M 500,320 Q 500,380 500,420"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
            />

            {/* Report to Monitor */}
            <motion.path
              d="M 550,450 Q 700,400 850,280"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
            />

            {/* Monitor to Guide */}
            <motion.path
              d="M 900,250 Q 900,150 800,100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.3 }}
            />

            {/* Guide to Translate (closing the loop) */}
            <motion.path
              d="M 750,80 Q 500,50 250,80"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </svg>

          {/* Cards */}
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                className="absolute bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 z-10"
                style={{
                  ...card.position,
                  width: card.id === "engage" || card.id === "monitor" ? "260px" : "240px",
                }}
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
      </div>
    </section>
  );
}
