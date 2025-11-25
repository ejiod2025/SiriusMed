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
    { Icon: Mail, position: { top: '15%', left: '25%' }, delay: 0 },
    { Icon: MessageSquare, position: { top: '10%', left: '45%' }, delay: 0.1 },
    { Icon: Clock, position: { top: '20%', left: '60%' }, delay: 0.2 },
    { Icon: Calendar, position: { top: '25%', right: '20%' }, delay: 0.3 },
    { Icon: CheckSquare, position: { bottom: '40%', left: '30%' }, delay: 0.4 },
    { Icon: FileText, position: { bottom: '45%', left: '50%' }, delay: 0.5 },
    { Icon: AlertTriangle, position: { top: '18%', right: '15%' }, delay: 0.6 },
    { Icon: Info, position: { bottom: '35%', right: '25%' }, delay: 0.7 },
  ];

  return (
    <section ref={containerRef} id="gap" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-8 text-[#1e3a5f]"
          >
            The Reality Gap
          </motion.h2>
        </div>

        {/* Main Visual */}
        <div className="relative max-w-7xl mx-auto">
          {/* Three Text Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Clinic Visit</h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 leading-tight">
                Real life quickly overwhelms<br/>medical advice
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Next Appointment</h3>
            </motion.div>
          </div>

          {/* Bridge and Characters Container */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Bridge Path - Left Side (Solid) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-0 top-1/2 w-[35%] h-3 bg-[#5a7fa5] origin-left"
              style={{ transform: 'translateY(-50%)' }}
            />

            {/* Bridge Path - Breaking Point */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute left-[35%] top-1/2 w-[15%] h-3 bg-gradient-to-r from-[#5a7fa5] via-[#7a95b5] to-transparent origin-left"
              style={{ transform: 'translateY(-50%) rotate(-5deg)', transformOrigin: 'left center' }}
            />

            {/* Bridge Path - Right Side (Ascending) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute right-0 top-[35%] w-[35%] h-3 bg-[#5a7fa5] origin-right"
              style={{ transform: 'rotate(-8deg)', transformOrigin: 'right center' }}
            />

            {/* Reality Gap Chasm */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 1.3 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[300px] h-[250px] origin-top"
            >
              <div className="relative w-full h-full">
                {/* Chasm Shape */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-400/80 via-red-500/60 to-red-600/40 rounded-b-[50%] blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-400/50 to-red-500/70 rounded-b-[50%]" />
                
                {/* "REALITY GAP" Text */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
                  <p className="text-white font-bold text-2xl md:text-3xl tracking-widest drop-shadow-lg">
                    REALITY GAP
                  </p>
                </div>

                {/* Cracks */}
                <svg className="absolute -top-4 left-1/2 -translate-x-1/2 w-64 h-16" viewBox="0 0 200 40">
                  <path 
                    d="M0,20 L50,15 L55,22 L60,18 L70,20 L100,20 L130,18 L140,22 L145,15 L200,20" 
                    stroke="#374151" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  <path 
                    d="M80,20 L85,30 M120,20 L115,28" 
                    stroke="#374151" 
                    strokeWidth="1.5" 
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Character 1: Doctor & Patient (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-[5%] top-[20%] w-[280px]"
            >
              <div className="bg-blue-50/80 rounded-3xl p-6 backdrop-blur-sm border border-blue-100 shadow-xl">
                <img src={doctorPatient} alt="Doctor consulting patient" className="w-full h-auto rounded-2xl" />
              </div>
            </motion.div>

            {/* Character 2: Overwhelmed Person (Center) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute left-1/2 -translate-x-1/2 top-[25%] w-[200px] z-30"
            >
              <div className="relative">
                <img src={overwhelmed} alt="Overwhelmed person" className="w-full h-auto relative z-10" />
                
                {/* Floating Icons */}
                <div className="absolute inset-0 w-[300px] h-[300px] -left-12 -top-8">
                  {floatingIcons.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-[#5a7fa5]/90 backdrop-blur-sm p-2.5 rounded-lg shadow-lg border border-white/20"
                      style={item.position}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.1, 1],
                        opacity: 1,
                        y: [0, -8, 0]
                      } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.2 + item.delay,
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: item.delay
                        }
                      }}
                    >
                      <item.Icon className="w-5 h-5 text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Character 3: Confident Person (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute right-[8%] top-[15%] w-[220px]"
            >
              <img src={confident} alt="Confident person walking" className="w-full h-auto" />
            </motion.div>

            {/* Bottom Descriptions */}
            <div className="absolute bottom-8 left-0 right-0 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-center"
              >
                <p className="text-gray-700 font-medium text-lg">Inside the clinic,</p>
                <p className="text-gray-700 font-medium text-lg">the plan is clear</p>
              </motion.div>
              
              <div className="hidden md:block" />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center"
              >
                <p className="text-gray-700 font-medium text-lg">SiriusMed builds a</p>
                <p className="text-gray-700 font-medium text-lg">continuous health layer</p>
                <p className="text-gray-700 font-medium text-lg">between visits</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
