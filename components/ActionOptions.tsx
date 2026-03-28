import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, Users, MessageCircle, Star } from 'lucide-react';

interface ActionOptionsProps {
  onOpenRegistration: () => void;
}

export const ActionOptions: React.FC<ActionOptionsProps> = ({ onOpenRegistration }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-lux-dark to-black border-t border-white/5 relative">
       {/* Ambient Light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lux-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-lux-accent text-xs font-bold tracking-widest uppercase mb-6">
            行动入口
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            选择适合你的参与方式
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            无论你目前只是想了解方向，<br className="hidden md:block"/>
            还是已经准备好系统性落地，我们都提供不同阶段的参与方式。
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
            
            {/* Option 1: Preview */}
            <div className="flex flex-col h-full p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                <div className="mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                        <Calendar size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">AI 行销 Preview 体验课</h3>
                    <div className="text-gray-400 font-mono text-sm mb-4">RM68 / RM100｜线下短场</div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        适合第一次接触 AI 行销，想快速理解整体框架与实际应用方向的企业主。
                    </p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-lux-accent mt-0.5 shrink-0" />
                        <span>了解 AI 行销五大核心法则</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-lux-accent mt-0.5 shrink-0" />
                        <span>现场示范部分 增长放大器的实际效果</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-lux-accent mt-0.5 shrink-0" />
                        <span>判断这套系统是否适合你的生意</span>
                    </li>
                </ul>

                <button 
                    onClick={onOpenRegistration}
                    className="w-full py-3 border border-white/20 hover:bg-white hover:text-black hover:border-white text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                    参加 Preview 体验课 <ArrowRight size={16} />
                </button>
            </div>

            {/* Option 2: Full Workshop (Highlighted) */}
            <div className="flex flex-col h-full p-8 bg-lux-accent/5 border border-lux-accent/50 rounded-2xl relative shadow-[0_0_30px_rgba(0,220,130,0.1)] transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lux-accent text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
                
                <div className="mb-6">
                    <div className="w-12 h-12 bg-lux-accent rounded-lg flex items-center justify-center text-black mb-4">
                        <Star size={24} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">AI 行销两天实战系统课</h3>
                    <div className="text-lux-accent font-mono text-sm mb-4 font-bold">RM599｜小班制 · 深度落地</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        适合希望把 AI 真正导入生意，建立内容、系统与成交闭环的企业主与团队。
                    </p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-white">
                        <CheckCircle2 size={16} className="text-lux-accent mt-0.5 shrink-0" />
                        <span><strong className="text-lux-accent">完整拆解</strong> 五大核心法则 × 六大增长放大器</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white">
                        <CheckCircle2 size={16} className="text-lux-accent mt-0.5 shrink-0" />
                        <span>每个放大器包含多套实战打法与应用场景</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white">
                        <CheckCircle2 size={16} className="text-lux-accent mt-0.5 shrink-0" />
                        <span>课程结束后，可直接应用于自己的业务</span>
                    </li>
                </ul>

                <button 
                    onClick={onOpenRegistration}
                    className="w-full py-4 bg-lux-accent text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,220,130,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                    了解两天完整课程内容 <ArrowRight size={16} />
                </button>
            </div>

            {/* Option 3: Consultation */}
            <div className="flex flex-col h-full p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                <div className="mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">一对一说明 / 合作咨询</h3>
                    <div className="text-gray-400 font-mono text-sm mb-4">企业 / 商会 / 团队</div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        如果你希望评估这套系统是否适合你的企业规模、或探讨定制化培训与合作方式。
                    </p>
                </div>
                
                <div className="flex-grow flex items-center justify-center mb-8 opacity-50">
                    <Users size={64} strokeWidth={1} />
                </div>

                <button 
                    onClick={onOpenRegistration}
                    className="w-full py-3 border border-white/20 hover:bg-white hover:text-black hover:border-white text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                    预约一对一说明 <ArrowRight size={16} />
                </button>
            </div>

        </div>

        {/* Footer Statement */}
        <div className="text-center max-w-3xl mx-auto border-t border-white/10 pt-16">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                <span className="text-gray-500 text-lg md:text-xl block mb-4 font-normal">我们不贩售工具，也不提供零散技巧。</span>
                我们交付的是一套<br/>
                <span className="text-white">能被企业真正使用的</span> <span className="text-lux-accent">AI 行销增长系统</span>。
            </p>
        </div>

      </div>
    </section>
  );
};