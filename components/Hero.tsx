import React from 'react';
import { ArrowRight, PlayCircle, Clock, Calendar, AlertTriangle } from 'lucide-react';

interface HeroProps {
  onOpenRegistration: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lux-accent/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lux-accent/30 bg-lux-accent/10 backdrop-blur-sm mb-8 animate-bounce delay-700">
          <span className="w-2 h-2 rounded-full bg-lux-accent animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-lux-accent">线下体验课 · 席位有限</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
          <span className="text-gray-400 text-2xl md:text-3xl block mb-2 font-medium">90% 的人都知道自己将被AI取代...</span>
          但只有2%的人<br/>
          <span className="text-gradient-accent">已开始学用AI赚钱！</span>
        </h1>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl mb-10 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">《 AI 营销全流程 》</h2>
          <p className="text-lg text-gray-300 mb-6">为你揭秘大企业如何 杠杆AI赚钱</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm md:text-base text-gray-300 border-t border-white/10 pt-6">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="text-lux-accent w-5 h-5" />
              <span className="font-mono">近期场次开放报名中</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="text-lux-accent w-5 h-5" />
              <span className="font-mono">线下实战分享</span>
            </div>
             <div className="flex items-center justify-center gap-2 text-red-400">
              <AlertTriangle className="w-5 h-5" />
              <span>小班制｜额满即止</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={onOpenRegistration}
            className="group relative px-8 py-4 bg-lux-accent text-black font-bold text-lg tracking-wide overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            <span className="relative flex items-center gap-2">
              参加 Preview 体验课 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 opacity-60">
           <p className="text-sm text-gray-500 uppercase tracking-widest">50+企业 & 500+学员 都在用的AI框架</p>
           <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400 font-mono">
              <span className="border border-white/10 px-3 py-1 rounded-full">AI 市场调研</span>
              <span className="border border-white/10 px-3 py-1 rounded-full">AI 策略布局</span>
              <span className="border border-white/10 px-3 py-1 rounded-full">AI 矩阵获客</span>
              <span className="border border-white/10 px-3 py-1 rounded-full">AI 自动成交</span>
           </div>
        </div>
      </div>
    </section>
  );
};