import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mr Jason",
    role: "家电企业",
    title: "工人用AI提高了生意",
    content: "我本来是抱着给工人试看看的，没想到我们自己也可以做的那么好。以前给外面的marketer做推销，费用高，还常常不符合要求。上了 Lux 的课后，我的工人，一个人不到一个月就做出 10+ video，还有自己的网站。生意提高了，成本还更低。"
  },
  {
    name: "Ms JN",
    role: "学员",
    title: "原来工作可以这么快",
    content: "以前我一个人要负责 social media、写文案、剪影片，做直播等等。。常常 OT 到半夜。上完课后，我用老师教的 Prompt 直接要脚本、写贴文、做图、做影片，工作效率至少提高了3倍。老板还以为我偷叫外包 😂 现在我准时下班，有更多自己的时间了。"
  },
  {
    name: "Jonathan Lim",
    role: "品牌初创",
    title: "AI帮我创业少走冤枉路",
    content: "创业最怕的就是方向错，钱花完，没客户。我用AI做市场调研，对手&需求分析。花1天就找对定位，确保我的产品受欢迎，又避开价格战。推广内容也可以快速产出。2 周内就拿到第一批客户。现在我更有信心继续做下去！"
  },
  {
    name: "Stanley Yap",
    role: "销售",
    title: "第一次拿那么高的佣金",
    content: "我本来就是Marketing新手，AI 也只会用来玩玩。上了课程才知道，原来AI能系统化的用在市场分析，内容产出，营销流程。我把老师的 workflow 用在公司，同事 3 天做不到的，我 2 小时就完成。3年卖不出的产品，我们用AI从新拟方案，短短1个月就卖到了。"
  },
  {
    name: "Louis Teh",
    role: "屋业发展",
    title: "今年有望提高生意",
    content: "我工人学了后都说很好，他们才知道原来AI是这样用的，原来AI可以让他们工作更方便更快。当然我们身为老板学到的不只是提高效率，原来AI还可以帮我做市场调查，提高生意，如果以前有的用AI我们早都可以减少很多试错成本了。"
  },
  {
    name: "Lam TK",
    role: "学员",
    title: "原来是我没用对方法",
    content: "早就听说 AI 可以帮到我的工作，也试过自己去玩ChatGPT、Midjourney，但产出的图总是不对人设，或是文案怪怪的。跟老师学了Prompt 框架，流程和方法才知道不是AI笨，是我不会用。"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-black">
       <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">看看学员都获得了什么</h2>
          <p className="text-gray-400">改变人生，从掌握 AI 开始</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:border-lux-accent/30 transition-all duration-300">
              <Quote className="text-lux-accent mb-6 w-8 h-8 opacity-50" />
              <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow min-h-[100px]">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-lux-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-lux-accent text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};