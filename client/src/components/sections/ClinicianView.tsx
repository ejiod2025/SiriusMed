import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, TrendingUp, User } from "lucide-react";

export default function ClinicianView() {
  return (
    <section id="clinicians" className="py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5">
                <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-mono text-xs mb-8 border border-white/20">
                    PROVIDER DASHBOARD
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                    From Blind Spots to <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Clear Signals.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    You don't just see "non-adherent." You see the <em>why</em>. Real-time risk stratification allows you to intervene only when it matters.
                </p>
                
                <div className="space-y-6">
                    {[
                        { title: "Live Adherence Scoring", desc: "Real-time data from patient interactions." },
                        { title: "Contextual Flags", desc: "'Working late', 'Side effects', 'Cost issues'." },
                        { title: "EMR Integration", desc: "Write back to Epic, Cerner, and Athena." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <CheckCircle size={20} className="text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             <div className="lg:col-span-7">
                 {/* Glassmorphism Dashboard */}
                 <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                 >
                     {/* Header */}
                     <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                         <div>
                             <h3 className="text-2xl font-bold">Population Health</h3>
                             <p className="text-gray-400 text-sm">Cardiology • High Risk Cohort</p>
                         </div>
                         <div className="flex gap-2">
                             <div className="px-3 py-1 rounded-lg bg-white/10 text-xs font-mono">Last updated: Now</div>
                         </div>
                     </div>

                     {/* Stats Row */}
                     <div className="grid grid-cols-3 gap-4 mb-8">
                         {[
                             { label: "Avg Adherence", val: "88%", color: "text-emerald-400" },
                             { label: "Interventions", val: "12", color: "text-blue-400" },
                             { label: "At Risk", val: "3", color: "text-rose-400" },
                         ].map((stat, i) => (
                             <div key={i} className="bg-black/20 rounded-xl p-4 border border-white/5">
                                 <div className={`text-2xl font-bold ${stat.color}`}>{stat.val}</div>
                                 <div className="text-xs text-gray-500">{stat.label}</div>
                             </div>
                         ))}
                     </div>

                     {/* Patient List */}
                     <div className="space-y-3">
                         <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2">Requires Attention</div>
                         {[
                             { name: "Daniel Cohen", issue: "Missed 3 doses (Travel)", risk: "High", time: "2h ago" },
                             { name: "Sarah Okafor", issue: "Reported Dizziness", risk: "Med", time: "4h ago" }
                         ].map((p, i) => (
                             <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20 group">
                                 <div className="flex items-center gap-4">
                                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-400 border border-white/10">
                                         <User size={16} />
                                     </div>
                                     <div>
                                         <div className="font-bold text-sm group-hover:text-blue-400 transition-colors">{p.name}</div>
                                         <div className="text-xs text-gray-400">{p.issue}</div>
                                     </div>
                                 </div>
                                 <div className="text-right">
                                     <div className="text-xs font-bold text-rose-400">{p.risk}</div>
                                     <div className="text-[10px] text-gray-600">{p.time}</div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </motion.div>
             </div>
        </div>
      </div>
    </section>
  );
}
