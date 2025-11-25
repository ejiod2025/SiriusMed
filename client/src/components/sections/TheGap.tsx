import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Users, MessageSquare, Pill, Clock, AlertCircle } from "lucide-react";
import doctorImage from "@assets/stock_images/doctor_consulting_pa_f0bcd695.jpg";
import stressedImage from "@assets/stock_images/stressed_overwhelmed_a4c6d68d.jpg";
import confidentImage from "@assets/stock_images/confident_business_p_f94ce0e3.jpg";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const panels = [
    {
      title: "Clinic Visit",
      image: doctorImage,
      subtitle: "Inside the clinic,",
      description: "the plan is clear",
      bgColor: "bg-blue-50/50",
    },
    {
      title: "Real life quickly overwhelms medical advice",
      image: stressedImage,
      subtitle: "",
      description: "REALITY GAP",
      bgColor: "bg-orange-50/80",
      isGap: true,
      icons: [
        { Icon: Calendar, label: "Schedule conflicts" },
        { Icon: Users, label: "Family demands" },
        { Icon: MessageSquare, label: "Communication gaps" },
        { Icon: Pill, label: "Complex regimens" },
        { Icon: Clock, label: "Time pressure" },
        { Icon: AlertCircle, label: "Confusion" },
      ]
    },
    {
      title: "Next Appointment",
      image: confidentImage,
      subtitle: "SiriusMed builds a",
      description: "continuous health layer between visits",
      bgColor: "bg-green-50/50",
    }
  ];

  return (
    <section ref={containerRef} id="gap" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground"
          >
            The Reality Gap
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {/* Connecting Arrows */}
          <div className="hidden md:block absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0">
            <ArrowRight className="w-12 h-12 text-gray-300" />
          </div>
          <div className="hidden md:block absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 z-0">
            <ArrowRight className="w-12 h-12 text-gray-300" />
          </div>

          {panels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className={`${panel.bgColor} rounded-3xl p-8 h-full flex flex-col items-center text-center border ${panel.isGap ? 'border-orange-200' : 'border-gray-200'} shadow-lg relative overflow-hidden`}>
                {/* Background Pattern for Gap Panel */}
                {panel.isGap && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-orange-400 rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                )}

                {/* Title */}
                <h3 className={`font-heading font-bold mb-6 ${panel.isGap ? 'text-2xl text-orange-600' : 'text-xl text-gray-700'}`}>
                  {panel.title}
                </h3>

                {/* Image Container */}
                <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-white shadow-md">
                  <img 
                    src={panel.image} 
                    alt={panel.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Icons for Gap Panel */}
                  {panel.isGap && panel.icons && (
                    <div className="absolute inset-0 pointer-events-none">
                      {panel.icons.map((item, i) => {
                        const positions = [
                          { top: '10%', left: '10%' },
                          { top: '15%', right: '15%' },
                          { bottom: '20%', left: '15%' },
                          { bottom: '15%', right: '10%' },
                          { top: '45%', left: '5%' },
                          { top: '45%', right: '5%' },
                        ];
                        const delays = [0, 0.2, 0.4, 0.6, 0.8, 1.0];
                        
                        return (
                          <motion.div
                            key={i}
                            className="absolute bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-orange-200"
                            style={positions[i]}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { 
                              scale: [0, 1.1, 1],
                              rotate: 0,
                              y: [0, -5, 0]
                            } : {}}
                            transition={{ 
                              duration: 0.8, 
                              delay: delays[i],
                              y: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: delays[i]
                              }
                            }}
                          >
                            <item.Icon className="w-4 h-4 text-orange-500" />
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mt-auto">
                  {panel.subtitle && (
                    <p className="text-gray-600 text-sm mb-1">{panel.subtitle}</p>
                  )}
                  <p className={`font-bold ${panel.isGap ? 'text-2xl text-orange-600 tracking-wider' : 'text-lg text-gray-800'}`}>
                    {panel.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional care leaves patients alone between appointments. 
            <span className="text-primary font-semibold"> SiriusMed stays with them every step of the way.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
