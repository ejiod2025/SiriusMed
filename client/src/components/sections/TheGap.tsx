import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare, Clock, Calendar, CheckSquare, AlertTriangle, FileText, Info } from "lucide-react";
import doctorPatient from "@assets/generated_images/doctor_patient_consultation_illustration.png";
import overwhelmed from "@assets/generated_images/overwhelmed_person_with_icons.png";
import confident from "@assets/generated_images/confident_walking_person_illustration.png";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const floatingIcons = [
    { Icon: Mail, position: { top: '5%', left: '35%' }, delay: 0 },
    { Icon: MessageSquare, position: { top: '8%', left: '48%' }, delay: 0.1 },
    { Icon: Clock, position: { top: '12%', left: '62%' }, delay: 0.2 },
    { Icon: Calendar, position: { top: '15%', right: '28%' }, delay: 0.3 },
    { Icon: CheckSquare, position: { top: '30%', left: '32%' }, delay: 0.4 },
    { Icon: FileText, position: { top: '28%', left: '50%' }, delay: 0.5 },
    { Icon: AlertTriangle, position: { top: '10%', right: '22%' }, delay: 0.6 },
    { Icon: Info, position: { top: '32%', right: '30%' }, delay: 0.7 },
  ];

  return (
    <section ref={containerRef} id="gap" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-8 text-[#1e3a5f]"
          >
            The Reality Gap
          </motion.h2>
        </div>

        {/* Main Visual Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Three Text Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Clinic Visit</h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center px-4"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 leading-tight">
                Real life quickly overwhelms<br/>medical advice
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Next Appointment</h3>
            </motion.div>
          </div>

          {/* SVG Container with Path and Characters */}
          <div className="relative w-full" style={{ height: '600px' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
              <defs>
                {/* Path definition for character animation */}
                <path 
                  id="bridgePath" 
                  d="M 50,350 L 380,350 Q 420,355 450,360 L 490,370 Q 520,378 550,395 Q 580,412 650,430 L 1150,550" 
                />
                
                {/* Gradient for gap */}
                <linearGradient id="gapFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#dc2626" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Bridge Path - Main Line */}
              <motion.path
                d="M 50,350 L 380,350 Q 420,355 450,360 L 490,370 Q 520,378 550,395 Q 580,412 650,430 L 1150,550"
                fill="none"
                stroke="#5a7fa5"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Crack marks at breaking point */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <path d="M 420,345 L 415,365 M 440,348 L 435,370 M 460,352 L 458,375" stroke="#374151" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 480,362 L 478,385 M 500,368 L 495,388" stroke="#374151" strokeWidth="2" strokeDasharray="3 3" />
              </motion.g>

              {/* Reality Gap Chasm */}
              <motion.path
                d="M 420,360 Q 450,380 480,420 Q 500,450 520,500 Q 540,550 520,580 Q 500,600 460,600 L 400,600 Q 380,580 400,520 Q 415,460 420,400 Z"
                fill="url(#gapFill)"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 2.2 }}
                style={{ transformOrigin: '450px 360px' }}
              />
              
              {/* "REALITY GAP" Text */}
              <motion.text
                x="420"
                y="520"
                fill="white"
                fontSize="32"
                fontWeight="bold"
                letterSpacing="4"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.5 }}
                style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
              >
                REALITY GAP
              </motion.text>
            </svg>

            {/* Character 1: Doctor & Patient Scene (positioned on left of path) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute"
              style={{ 
                left: '50px',
                top: '120px',
                width: '280px'
              }}
            >
              <div className="bg-blue-50/90 rounded-3xl p-4 backdrop-blur-sm border-2 border-blue-100 shadow-xl">
                <img src={doctorPatient} alt="Doctor consulting patient" className="w-full h-auto rounded-2xl" />
              </div>
            </motion.div>

            {/* Character 2: Overwhelmed Person Walking (center, following path) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: 1,
              } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute z-30"
              style={{ 
                left: '380px',
                top: '180px',
                width: '180px'
              }}
            >
              <div className="relative">
                <img 
                  src={overwhelmed} 
                  alt="Overwhelmed person" 
                  className="w-full h-auto drop-shadow-lg" 
                />
                
                {/* Floating Icons around center person */}
                <div className="absolute inset-0 w-[400px] h-[350px] -left-24 -top-12">
                  {floatingIcons.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-[#5a7fa5] backdrop-blur-sm p-2.5 rounded-lg shadow-lg border-2 border-blue-100"
                      style={item.position}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.15, 1],
                        opacity: 1,
                        y: [0, -10, 0]
                      } : {}}
                      transition={{ 
                        duration: 0.7, 
                        delay: 2.0 + item.delay,
                        y: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: item.delay
                        }
                      }}
                    >
                      <item.Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Character 3: Confident Person Walking Up (right side on ascending path) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0,
              } : {}}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="absolute"
              style={{ 
                right: '80px',
                top: '220px',
                width: '200px'
              }}
            >
              <img 
                src={confident} 
                alt="Confident person walking" 
                className="w-full h-auto drop-shadow-lg" 
                style={{ transform: 'rotate(-12deg)' }}
              />
            </motion.div>

            {/* Bottom Text Descriptions */}
            <div className="absolute bottom-4 left-0 right-0 grid grid-cols-1 md:grid-cols-3 gap-4 px-4 z-20">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.8 }}
                className="text-center"
              >
                <p className="text-gray-800 font-medium text-base md:text-lg">Inside the clinic,</p>
                <p className="text-gray-800 font-medium text-base md:text-lg">the plan is clear</p>
              </motion.div>
              
              <div className="hidden md:block" />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 3.0 }}
                className="text-center"
              >
                <p className="text-gray-800 font-medium text-base md:text-lg">SiriusMed builds a</p>
                <p className="text-gray-800 font-medium text-base md:text-lg">continuous health layer</p>
                <p className="text-gray-800 font-medium text-base md:text-lg">between visits</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
