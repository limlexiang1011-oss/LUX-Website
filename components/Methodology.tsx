import React from 'react';
import { Layers, Cpu, TrendingUp, Zap, MousePointer2, RefreshCw, Eye, MessageSquare, ArrowRight, Activity, Database, Lock } from 'lucide-react';

interface MethodologyProps {
  onOpenRegistration: () => void;
}

const rules = [
  { 
    id: "RULE_01",
    title: "价值放大法则", 
    desc: "AI 只能放大价值，不能创造价值", 
    icon: <TrendingUp className="w-6 h-6" /> 
  },
  { 
    id: "RULE_02",
    title: "内容资产法则", 
    desc: "内容不是消耗品，而是可复利的资产", 
    icon: <Database className="w-6 h-6" /> 
  },
  { 
    id: "RULE_03",
    title: "系统优先法则", 
    desc: "系统永远比个人努力更可靠", 
    icon: <Cpu className="w-6 h-6" /> 
  },
  { 
    id: "RULE_04",
    title: "多触点转化法则", 
    desc: "成交来自多次、不同形式的接触", 
    icon: <Activity className="w-6 h-6" /> 
  },
  { 
    id: "RULE_05",
    title: "闭环成交法则", 
    desc: "没有跟进与回流，就没有真正的增长", 
    icon: <RefreshCw className="w-6 h-6" /> 
  },
];

const amplifiers = [
  { title: "视觉表达", subtitle: "Visual Amplifier", desc: "让品牌在第一眼被看懂、被记住", icon: <Eye /> },
  { title: "内容生产", subtitle: "Content Amplifier", desc: "稳定输出内容，不再依赖灵感", icon: <Zap /> },
  { title: "流量引导", subtitle: "Traffic Amplifier", desc: "把曝光转化为明确行动", icon: <MousePointer2 /> },
  { title: "承接转化", subtitle: "Funnel Amplifier", desc: "把注意力转化为可跟进的名单", icon: <Layers /> },
  { title: "自动跟进", subtitle: "Auto-Followup", desc: "用系统取代重复人力", icon: <RefreshCw /> },
  { title: "成交系统", subtitle: "Closing Amplifier", desc: "提升每一次对话的成交成功率", icon: <MessageSquare /> },
];

export const Methodology: React.FC<MethodologyProps> = ({ onOpenRegistration }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-lux-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Philosophy */}
        <div className="text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lux-accent/20 bg-lux-accent/5 text-lux-accent text-xs font-mono tracking-widest uppercase mb-8 animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-lux-accent"></span>
            System Architecture for Growth
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            AI 行销不是工具堆叠<br/>
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-lux-accent/10 blur-xl"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-lux-accent via-white to-lux-accent">
                是一套可放大的商业系统
              </span>
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto text-gray-400 text-lg border-l-2 border-lux-accent/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            <p>用 AI 放大内容、效率与成交，而不是只做出“看起来很厉害”的行销。</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Part 1: 5 Core Rules (Left Side - 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
             <div className="mb-8 pl-4 border-l-4 border-lux-accent">
                <h3 className="text-2xl font-bold text-white mb-1">五大核心法则</h3>
                <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">The Secret Core Kernel</p>
             </div>
             
             {/* Diagram Image for Rules - SWAPPED to AI-4.png */}
             <div className="mb-8 rounded-xl overflow-hidden border border-white/10 group relative">
                  <div className="absolute inset-0 bg-lux-accent/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                  <img 
                    src="https://i.ibb.co/gZhYczjC/LUX-AI-MARKETING-AI-4.png" 
                    alt="五大核心法则示意图" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
             </div>

             <div className="space-y-3">
                {rules.map((rule, idx) => (
                    <div 
                        key={idx} 
                        className="group relative p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-lux-accent/50 rounded-r-xl border-l-0 transition-all duration-300 overflow-hidden"
                    >
                        {/* Active Border Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-lux-accent transition-colors duration-300"></div>
                        
                        <div className="flex items-center gap-4 pl-2">
                            <div className="text-gray-600 group-hover:text-lux-accent group-hover:drop-shadow-[0_0_8px_rgba(0,220,130,0.6)] transition-all duration-300">
                                {rule.icon}
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-[10px] font-mono text-gray-600 group-hover:text-lux-accent/70 transition-colors">0{idx + 1}</span>
                                    <h4 className="font-bold text-white text-lg group-hover:tracking-wide transition-all duration-300">{rule.title}</h4>
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300">{rule.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
             <div className="mt-6 flex items-center gap-2 text-xs text-gray-500 font-mono bg-black/50 p-3 rounded border border-white/5 w-fit">
                <Lock size={12} />
                <span>ENCRYPTED: 完整拆解仅在课程中进行</span>
             </div>
          </div>

          {/* Part 2: 6 Amplifiers (Right Side - 7 Columns) */}
          <div className="lg:col-span-7">
            <div className="mb-8 flex justify-between items-end">
                <div className="pl-4 border-l-4 border-lux-accent">
                    <h3 className="text-2xl font-bold text-white mb-1">六大增长放大器</h3>
                    <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">Execution Modules</p>
                </div>
                {/* Tech Decoration */}
                <div className="hidden md:flex gap-1">
                    <div className="w-16 h-1 bg-lux-accent/20"></div>
                    <div className="w-8 h-1 bg-lux-accent/50"></div>
                    <div className="w-2 h-1 bg-lux-accent"></div>
                </div>
             </div>

             {/* Diagram Image for Amplifiers - SWAPPED to AI-3.png */}
             <div className="mb-8 rounded-xl overflow-hidden border border-white/10 group relative">
                  <div className="absolute inset-0 bg-lux-accent/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                  <img 
                    src="https://i.ibb.co/XxsBsJHr/LUX-AI-MARKETING-AI-3.png" 
                    alt="六大增长放大器示意图" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
             </div>

             <div className="grid sm:grid-cols-2 gap-4">
                {amplifiers.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="group relative bg-[#0A0A0A] border border-white/10 p-6 overflow-hidden hover:border-lux-accent/40 transition-all duration-300"
                    >
                        {/* Tech Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-lux-accent transition-colors"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-lux-accent transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-lux-accent transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-lux-accent transition-colors"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/5 rounded group-hover:bg-lux-accent/10 group-hover:text-lux-accent transition-colors text-gray-400">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] font-mono text-gray-600 group-hover:text-lux-accent/50">MOD_0{idx + 1}</span>
                            </div>
                            
                            <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-3 font-mono group-hover:text-lux-accent/60 transition-colors">{item.subtitle}</p>
                            <p className="text-gray-400 text-sm leading-snug border-t border-white/5 pt-3 group-hover:text-gray-200 transition-colors">{item.desc}</p>
                        </div>

                        {/* Hover Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-lux-accent/0 to-lux-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
             </div>
          </div>
        </div>

        {/* Summary & CTA - Tech Process Flow */}
        <div className="mt-24 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-lux-accent/20 to-transparent -z-10"></div>
            
            <div className="glass-panel p-8 md:p-12 rounded-2xl text-center border border-white/10 bg-black/60 relative overflow-hidden max-w-5xl mx-auto">
                {/* Background scanning line animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lux-accent/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none"></div>

                <div className="flex flex-col items-center">
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">完整的商业增长路径</h3>
                        <p className="text-gray-500 text-sm font-mono">EXECUTION PATHWAY</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 mb-10 w-full">
                        {["被看见", "被理解", "被信任", "被跟进", "被成交"].map((step, i, arr) => (
                            <React.Fragment key={i}>
                                <div className={`px-4 py-2 md:px-6 md:py-3 rounded border ${i === arr.length -1 ? 'bg-lux-accent text-black border-lux-accent font-bold shadow-[0_0_15px_rgba(0,220,130,0.4)]' : 'bg-black border-white/20 text-gray-300'}`}>
                                    {step}
                                </div>
                                {i !== arr.length - 1 && (
                                    <div className="text-gray-600">
                                        <ArrowRight size={16} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                        AI 的价值，不在于炫技，而在于让这条路径 <span className="text-white font-bold border-b border-lux-accent">稳定、可复制、可放大</span>。
                    </p>

                    <button 
                        onClick={onOpenRegistration}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-lux-accent text-lux-accent font-bold text-lg rounded overflow-hidden hover:text-black transition-colors duration-300"
                    >
                        <span className="absolute inset-0 bg-lux-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative z-10 flex items-center gap-2">
                           参加 Preview，了解完整系统 <ArrowRight size={20} />
                        </span>
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}