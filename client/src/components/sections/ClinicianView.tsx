import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, User } from "lucide-react";

export default function ClinicianView() {
  return (
    <section id="clinicians" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                 {/* Dashboard Mockup */}
                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                     <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
                         <span className="font-bold">SiriusMed Dashboard</span>
                         <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500" />
                             <div className="w-3 h-3 rounded-full bg-yellow-500" />
                             <div className="w-3 h-3 rounded-full bg-green-500" />
                         </div>
                     </div>
                     <div className="p-6">
                         <div className="flex justify-between items-center mb-8">
                             <h3 className="font-bold text-xl text-gray-800">High Risk Patients</h3>
                             <button className="text-sm text-blue-600 font-medium">View All</button>
                         </div>
                         
                         <div className="space-y-4">
                             {[
                                 { name: "Daniel Cohen", status: "Missed 3 doses", risk: "High", color: "bg-red-100 text-red-700" },
                                 { name: "Sarah Okafor", status: "Side effects reported", risk: "Medium", color: "bg-orange-100 text-orange-700" },
                                 { name: "James Wilson", status: "Adherent (98%)", risk: "Low", color: "bg-green-100 text-green-700" },
                             ].map((patient, i) => (
                                 <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                                 >
                                     <div className="flex items-center gap-4">
                                         <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                             <User size={20} />
                                         </div>
                                         <div>
                                             <div className="font-bold text-gray-900">{patient.name}</div>
                                             <div className="text-sm text-gray-500">{patient.status}</div>
                                         </div>
                                     </div>
                                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${patient.color}`}>
                                         {patient.risk}
                                     </span>
                                 </motion.div>
                             ))}
                         </div>
                     </div>
                 </div>
             </div>

             <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">From Blind Spots to <br/><span className="text-primary">Clear Signals.</span></h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    You don't just see "non-adherent." You see the <em>why</em>.
                    <br/><br/>
                    Each patient has a live adherence score. Every missed dose has context—"working late," "felt dizzy," "ran out."
                </p>
                
                <ul className="space-y-4">
                    {[
                        "Real-time adherence scoring",
                        "Natural language context for missed doses",
                        "EMR-linked interactions",
                        "Automated triage flags"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                            <CheckCircle className="text-primary" size={20} />
                            {item}
                        </li>
                    ))}
                </ul>
             </div>
        </div>
      </div>
    </section>
  );
}
