import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, TrendingUp, User, Activity, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const CircularProgress = ({ value, color, size = 120, strokeWidth = 8 }: { value: number, color: string, size?: number, strokeWidth?: number }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-100"
        />
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          className={color}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={cn("text-2xl font-bold", color)}
        >
          {value}%
        </motion.span>
      </div>
    </div>
  );
};

const WaveChart = () => {
  return (
    <div className="h-16 flex items-end gap-1 w-full overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-full bg-primary/20 rounded-t-sm"
          initial={{ height: "20%" }}
          animate={{ height: ["20%", "60%", "30%", "80%", "20%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            delay: i * 0.1,
            ease: "easeInOut" 
          }}
        />
      ))}
    </div>
  );
};

export default function ClinicianView() {
  return (
    <section id="clinicians" className="py-32 bg-white text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-xs mb-8 border border-primary/20">
                    PROVIDER DASHBOARD
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-gray-900">
                    From Blind Spots to <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clear Signals.</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    You don't just see "non-adherent." You see the <em>why</em>. Real-time risk stratification allows you to intervene only when it matters.
                </p>
                
                <div className="space-y-6">
                    {[
                        { title: "Live Adherence Scoring", desc: "Real-time data from patient interactions." },
                        { title: "Contextual Flags", desc: "'Working late', 'Side effects', 'Cost issues'." },
                        { title: "EMR Integration", desc: "Write back to Epic, Cerner, and Athena." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 text-primary">
                                <CheckCircle size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             <div className="lg:col-span-7">
                 {/* Clean Dashboard */}
                 <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] p-8 shadow-2xl border border-gray-100"
                 >
                     {/* Header */}
                     <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                         <div>
                             <h3 className="text-2xl font-bold text-gray-900">Population Health</h3>
                             <p className="text-gray-500 text-sm">Cardiology • High Risk Cohort</p>
                         </div>
                         <div className="flex gap-2">
                             <div className="px-3 py-1 rounded-lg bg-green-50 text-green-600 text-xs font-bold flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Live
                             </div>
                         </div>
                     </div>

                     {/* Dynamic Visual Adherence Report */}
                     <div className="grid grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative overflow-hidden">
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div>
                                    <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Avg Adherence</div>
                                    <div className="text-3xl font-bold text-gray-900 mt-1">88%</div>
                                    <div className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
                                        <TrendingUp size={12} /> +2.4% vs last week
                                    </div>
                                </div>
                                <CircularProgress value={88} color="text-primary" size={60} strokeWidth={6} />
                            </div>
                            <WaveChart />
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Risk Distribution</div>
                            <div className="space-y-3">
                                {[
                                    { label: "High Risk", val: 15, color: "bg-rose-500" },
                                    { label: "Medium Risk", val: 35, color: "bg-orange-400" },
                                    { label: "Low Risk", val: 50, color: "bg-emerald-400" }
                                ].map((risk, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs mb-1 text-gray-600">
                                            <span>{risk.label}</span>
                                            <span className="font-bold">{risk.val}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${risk.val}%` }}
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                                className={`h-full ${risk.color}`} 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </div>

                     {/* Patient List */}
                     <div className="space-y-3">
                         <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Requires Attention</div>
                         {[
                             { name: "Daniel Cohen", issue: "Missed 3 doses (Travel)", risk: "High Risk", time: "2h ago", avatarColor: "bg-blue-100 text-blue-600" },
                             { name: "Sarah Okafor", issue: "Reported Dizziness", risk: "Medium", time: "4h ago", avatarColor: "bg-purple-100 text-purple-600" }
                         ].map((p, i) => (
                             <div key={i} className="flex items-center justify-between bg-white p-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer border border-gray-100 hover:border-primary/20 hover:shadow-md group">
                                 <div className="flex items-center gap-4">
                                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${p.avatarColor}`}>
                                         {p.name.charAt(0)}
                                     </div>
                                     <div>
                                         <div className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors">{p.name}</div>
                                         <div className="text-xs text-gray-500">{p.issue}</div>
                                     </div>
                                 </div>
                                 <div className="text-right">
                                     <div className={`text-xs font-bold px-2 py-1 rounded-full inline-block mb-1 ${p.risk === "High Risk" ? "bg-rose-100 text-rose-600" : "bg-orange-100 text-orange-600"}`}>
                                        {p.risk}
                                     </div>
                                     <div className="text-[10px] text-gray-400">{p.time}</div>
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
