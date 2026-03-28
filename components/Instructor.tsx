import React from 'react';
import { BadgeCheck } from 'lucide-react';

export const Instructor: React.FC = () => {
  return (
    <section id="instructor" className="py-24 bg-lux-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-lux-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative aspect-[3/4] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
               <img 
                 src="https://i.ibb.co/bghcrH7T/Instagram-45-1.png" 
                 alt="Lux Lim" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-lux-card p-6 border border-white/10 rounded-xl shadow-xl">
              <p className="text-lux-accent font-bold text-4xl mb-1">300+</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">帮助学员</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 text-lux-accent mb-4">
              <BadgeCheck size={24} />
              <span className="font-bold tracking-widest uppercase">课程讲师</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Lux Lim</h2>
            <h3 className="text-xl text-gray-400 mb-8">AI行销实战讲师 | 内容自动化专家</h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                课程专门邀请了在AI营销经验丰富的 Lux（AI小弟）分享。Lux 专注于 AI 行销、是内容自动化与 SME 数码转型的实战讲师。
              </p>
              <p>
                Lux 曾受邀于新山知名发展商公司、教育机构与商会组织分享 AI 行销实战内容，并在多场活动中帮助超过 300+名参与者理解如何用 AI 重塑自己的品牌行销流程。
              </p>
              <p>
                凭借系统化教学框架，我们团队开发了《AI 行销实战课》，帮助 SME 老板与一人公司掌握各种AI工具，让他们能独立完成内容 → 流量 → 成交的全流程行销体系。
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-sm">SME 数码转型</div>
              <div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-sm">内容自动化</div>
              <div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-sm">AI 流量变现</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};