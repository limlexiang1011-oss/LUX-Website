import React, { useState } from 'react';
import { ChevronDown, Zap, Target, BarChart3, Video, Bot, MessageSquare } from 'lucide-react';
import { Module } from '../types';

const secrets = [
  {
    id: "s1",
    title: "秘诀 1: 如何利用AI，把危机变商机",
    subtitle: "市场调研 & 战略定位",
    items: [
      { text: "快速市场调研：AI洞察客户画像, 趋势走向, 对手策略", icon: <Target size={16} /> },
      { text: "战略定位：AI找到差异化竞争策略，避开价格战", icon: <BarChart3 size={16} /> },
      { text: "精准客户池：AI识别高意向客户，减少无效流量", icon: <UsersIcon size={16} /> },
      { text: "帮助企业：永续创新，让时间&金钱投入在对的起跑点", icon: <Zap size={16} /> }
    ]
  },
  {
    id: "s2",
    title: "秘诀 2: 如何0经验，1人也能做到企业级营销",
    subtitle: "内容自动化 & 视觉升级",
    items: [
      { text: "强化定位：用AI挖出产品/品牌独特卖点", icon: <Target size={16} /> },
      { text: "内容自动化：建立行业专属内容生产系统，无限生成高转化文案", icon: <MessageSquare size={16} /> },
      { text: "对标复刻：小红书爆款内容，AI一键仿写", icon: <Zap size={16} /> },
      { text: "高质感视觉：AI生成大品牌级图像&视频", icon: <Video size={16} /> },
      { text: "数字人营销：AI数字人拍广告，不露脸打造IP", icon: <Bot size={16} /> }
    ]
  },
  {
    id: "s3",
    title: "秘诀 3: 如何像大企业，通过AI让赚钱更轻松",
    subtitle: "自动成交 & 业绩倍增",
    items: [
      { text: "成交话术：生成行业专属话术库，提升成交率", icon: <MessageSquare size={16} /> },
      { text: "成交工具：生成专业销售PPT/工作报告", icon: <BarChart3 size={16} /> },
      { text: "24小时线上门店：一键创建专属网页+高转化文案", icon: <GlobeIcon size={16} /> },
      { text: "专属聊天机器人：自动回复跟进，让客户主动报名", icon: <Bot size={16} /> },
      { text: "帮助企业：实现智能跟进、自动成交，轻松赚钱！", icon: <Zap size={16} /> }
    ]
  }
];

function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
function GlobeIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }


export const Curriculum: React.FC = () => {
  const [openSecret, setOpenSecret] = useState<string | null>("s1");

  const toggleSecret = (id: string) => {
    setOpenSecret(openSecret === id ? null : id);
  };

  return (
    <section id="secrets" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-lux-card pointer-events-none -z-10" />
      
      {/* SEO: Hidden heading for structure */}
      <h2 className="sr-only">AI 营销三大核心秘诀</h2>

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {secrets.map((secret) => (
            <div 
              key={secret.id} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openSecret === secret.id 
                  ? 'border-lux-accent bg-lux-accent/5' 
                  : 'border-white/10 hover:border-white/20 bg-white/5'
              }`}
            >
              <button
                onClick={() => toggleSecret(secret.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className={`text-xl md:text-2xl font-mono font-bold ${openSecret === secret.id ? 'text-lux-accent' : 'text-gray-500'}`}>
                    {secret.id.replace('s', 'SECRET 0')}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{secret.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{secret.subtitle}</p>
                  </div>
                </div>
                <div className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${openSecret === secret.id ? 'bg-lux-accent text-black rotate-180' : 'text-gray-400'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openSecret === secret.id ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden px-6 md:px-8 md:pl-24">
                  <ul className="space-y-4">
                    {secret.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="mt-1 text-lux-accent flex-shrink-0">
                          {item.icon}
                        </div>
                        <span className="leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};