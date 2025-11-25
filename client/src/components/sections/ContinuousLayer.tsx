import React from "react";
import { motion } from "framer-motion";
import { Pill, MessageCircle, Users, Frown, Calendar } from "lucide-react";

export default function ContinuousLayer() {
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

        {/* Wide Container for Journey */}
        <div className="relative max-w-5xl mx-auto">
          <svg 
            viewBox="0 0 800 1000" 
            className="w-full h-auto"
            style={{ maxHeight: '1000px' }}
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>

            {/* Main S-Curve Path */}
            <motion.path
              d="M 200,950 Q 150,850 200,750 Q 250,650 450,600 Q 650,550 600,400 Q 550,250 300,200 Q 150,150 250,50"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* Translate - Bottom (200, 950) */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
            >
              <circle cx="200" cy="950" r="45" fill="#6366f1" />
              <foreignObject x="155" y="905" width="90" height="90">
                <div className="flex items-center justify-center w-full h-full">
                  <Pill className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </foreignObject>
              <foreignObject x="10" y="920" width="180" height="80">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Translate</h3>
                  <p className="text-sm text-gray-600">Start point at clinic</p>
                </div>
              </foreignObject>
            </motion.g>

            {/* Guide - (200, 750) */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
            >
              <circle cx="200" cy="750" r="45" fill="#6366f1" />
              <foreignObject x="155" y="705" width="90" height="90">
                <div className="flex items-center justify-center w-full h-full">
                  <MessageCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </foreignObject>
              <foreignObject x="260" y="720" width="200" height="80">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Guide</h3>
                  <p className="text-sm text-gray-600">Med guidance during busy days</p>
                </div>
              </foreignObject>
            </motion.g>

            {/* Engage - (450, 600) */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
            >
              <circle cx="450" cy="600" r="45" fill="#6366f1" />
              <foreignObject x="405" y="555" width="90" height="90">
                <div className="flex items-center justify-center w-full h-full">
                  <Users className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </foreignObject>
              <foreignObject x="200" y="570" width="240" height="80">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Engage</h3>
                  <p className="text-sm text-gray-600">Patient enters real-life environment</p>
                </div>
              </foreignObject>
            </motion.g>

            {/* Monitor - (600, 400) */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, type: "spring", stiffness: 150 }}
            >
              <circle cx="600" cy="400" r="45" fill="#6366f1" />
              <foreignObject x="555" y="355" width="90" height="90">
                <div className="flex items-center justify-center w-full h-full">
                  <Frown className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </foreignObject>
              <foreignObject x="510" y="370" width="280" height="80">
                <div className="text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Monitor</h3>
                  <p className="text-sm text-gray-600">Icons showing side-effect and symptom capture</p>
                </div>
              </foreignObject>
            </motion.g>

            {/* Adapt - (300, 200) */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, type: "spring", stiffness: 150 }}
            >
              <circle cx="300" cy="200" r="45" fill="#6366f1" />
              <foreignObject x="255" y="155" width="90" height="90">
                <div className="flex items-center justify-center w-full h-full">
                  <Frown className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </foreignObject>
              <foreignObject x="10" y="170" width="240" height="80">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Adapt</h3>
                  <p className="text-sm text-gray-600">Icons showing side-effect, and symptom capture</p>
                </div>
              </foreignObject>
            </motion.g>

            {/* Next Appointment - (250, 50) */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
            >
              <rect x="205" y="5" width="90" height="90" rx="20" fill="#6366f1" />
              <foreignObject x="205" y="5" width="90" height="90">
                <div className="flex items-center justify-center w-full h-full">
                  <Calendar className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </foreignObject>
              <foreignObject x="310" y="20" width="200" height="80">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Next</h3>
                  <h3 className="text-xl font-bold text-gray-900">Appointment</h3>
                </div>
              </foreignObject>
            </motion.g>
          </svg>
        </div>
      </div>
    </section>
  );
}
