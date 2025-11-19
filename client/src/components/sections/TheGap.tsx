import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clinicImg from "@assets/generated_images/Clean_clinic_room_background_8c0fb298.png";
import busyLifeImg from "@assets/generated_images/Busy_everyday_life_background_be108474.png";

export default function TheGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const imageSwitch = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  
  return (
    <section ref={containerRef} id="gap" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Text Side */}
           <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6"
                >
                    The Adherence Gap
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
                >
                    What happens after <br/>"You're good to go"?
                </motion.h2>
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="space-y-6 text-lg text-gray-600"
                >
                    <p>
                        In the exam room, everything is clear: why the medication matters, how to take it, what to watch for.
                    </p>
                    <p>
                        But once patients leave, instructions blur into everyday chaos. Side effects raise silent doubts. Doses collide with work, kids, traffic, and stress.
                    </p>
                    <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-orange-500">
                        <p className="font-medium text-gray-900">
                            Providers only hear about “non-adherence” when it’s already a problem.
                        </p>
                    </div>
                </motion.div>
           </div>

           {/* Visual Side - Crossfade */}
           <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <motion.div className="absolute inset-0 bg-black/10 z-10" />
                
                {/* Clinic Image */}
                <motion.img 
                    src={clinicImg} 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: useTransform(imageSwitch, [0, 1], [1, 0]) }}
                    alt="Quiet Clinic"
                />
                
                {/* Busy Life Image */}
                <motion.img 
                    src={busyLifeImg} 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: imageSwitch }}
                    alt="Busy Life"
                />

                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                     <motion.div
                        style={{ opacity: useTransform(imageSwitch, [0, 0.1], [1, 0]) }}
                        className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg"
                     >
                        <h4 className="font-bold text-primary">Step 1: Prescription Given</h4>
                        <p className="text-sm text-gray-600">Instructions are clear. Motivation is high.</p>
                     </motion.div>

                     <motion.div
                        style={{ opacity: useTransform(imageSwitch, [0.9, 1], [0, 1]) }}
                        className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg absolute bottom-0 left-0 right-0"
                     >
                        <h4 className="font-bold text-orange-600">Step 2: Life Gets in the Way</h4>
                        <p className="text-sm text-gray-600">Confusion, forgotten doses, and chaos set in.</p>
                     </motion.div>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
}
