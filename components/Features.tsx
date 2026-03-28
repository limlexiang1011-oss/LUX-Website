import React from 'react';
import { TrendingDown, Users, Clock, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "生意越做越累",
    description: "投入了大量时间精力，但业绩始终没有起色，陷入瓶颈期。"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "钱不够，人不够",
    description: "预算有限，招不到专业人才，市场竞争却越来越大，举步维艰。"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "工作永远做不完",
    description: "内容、报告、广告文案每天赶工，没有时间思考战略和发展。"
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "AI 用不出效果",
    description: "听说AI很厉害，但只会简单的对话，完全无法落地到业务增长上。"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-lux-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">你是否感觉越来越难做？</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            98%的人都面对同样的问题。时代变了，但多数人的方法却没变！
            <br/>
            <span className="text-lux-accent font-semibold block mt-4">AI 的崛起，一切都不是难题，而是谁更快掌握的问题！</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-6 group hover:bg-white/5 transition-all duration-300 border-red-500/10 hover:border-red-500/30"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 border border-red-500/20 bg-red-500/5 rounded-2xl">
            <h3 className="text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4">现在的你</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-red-500">✕</span> 要好几天完成工作</li>
              <li className="flex items-start gap-3"><span className="text-red-500">✕</span> 没加薪、没花红</li>
              <li className="flex items-start gap-3"><span className="text-red-500">✕</span> 自己策划拍片剪辑，慢又缺灵感</li>
              <li className="flex items-start gap-3"><span className="text-red-500">✕</span> 有团队，费用高、营收不理想</li>
              <li className="flex items-start gap-3"><span className="text-red-500">✕</span> 业绩和利润，一直没增长</li>
            </ul>
          </div>

          <div className="p-8 border border-lux-accent/20 bg-lux-accent/5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-lux-accent/10 blur-xl"></div>
            <h3 className="text-2xl font-bold text-lux-accent mb-6 border-b border-lux-accent/20 pb-4">精通AI的你</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-3"><span className="text-lux-accent">✓</span> 8小时的工作，1小时完成</li>
              <li className="flex items-start gap-3"><span className="text-lux-accent">✓</span> 营销成本降低 50%+</li>
              <li className="flex items-start gap-3"><span className="text-lux-accent">✓</span> 收入倍增，超越竞争对手</li>
              <li className="flex items-start gap-3"><span className="text-lux-accent">✓</span> AI 辅助，提升 5–10 倍效率</li>
              <li className="flex items-start gap-3"><span className="text-lux-accent">✓</span> 一键精准生成市场调研与趋势分析</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};