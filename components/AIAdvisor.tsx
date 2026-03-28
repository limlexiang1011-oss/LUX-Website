import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { getAIAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const COURSE_CONTEXT = `
  活动名称: 《 AI 营销全流程 》线下 Preview 体验课
  讲师: Lux Lim (AI营销实战讲师)
  地点: 线下实战短场 (具体地点报名后通知)
  费用: RM68 / RM100 (不同场次)
  核心内容: 
  1. 市场调研 (把危机变商机)
  2. 内容自动化 (1人抵5人)
  3. 自动成交 (24小时线上门店)
  痛点解决: 生意累、缺人缺钱、广告没效果。
  适合对象: 第一次接触 AI 行销，想快速理解整体框架与实际应用方向的企业主。
`;

export const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "你好！我是 Lux AI Marketing 智能助手。关于 AI 营销 Preview 体验课或实战课，有什么我可以帮你的吗？", timestamp: Date.now() }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await getAIAdvice(userMsg.text, COURSE_CONTEXT);
    
    setMessages(prev => [...prev, { role: 'model', text: advice, timestamp: Date.now() }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-lux-accent text-black px-5 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,220,130,0.4)] hover:scale-105 transition-transform animate-pulse-slow"
        >
          <Bot size={20} />
          <span>咨询详情</span>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] z-50 glass-panel rounded-2xl flex flex-col shadow-2xl border border-lux-accent/20 animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/40 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-lux-accent animate-pulse"></div>
              <span className="font-bold text-white text-sm tracking-wide">AI 营销顾问</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                    <Bot size={14} className="text-lux-accent" />
                  </div>
                )}
                
                <div className={`max-w-[80%] p-3 text-sm leading-relaxed rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-white/5 text-gray-200 border border-white/10'
                }`}>
                  {msg.text}
                </div>

                {msg.role === 'user' && (
                   <div className="w-8 h-8 rounded-full bg-lux-accent flex items-center justify-center flex-shrink-0">
                     <User size={14} className="text-black" />
                   </div>
                )}
              </div>
            ))}
            {isLoading && (
               <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                    <Bot size={14} className="text-lux-accent" />
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20 rounded-b-2xl">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="问我关于课程内容的问题..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-lux-accent/50 pr-10"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-lux-accent hover:text-white disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>

        </div>
      )}
    </>
  );
};