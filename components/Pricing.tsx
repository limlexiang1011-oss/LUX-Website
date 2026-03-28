import React, { useState, useEffect } from 'react';
import { Clock, Gift, CheckCircle, Loader2, X, Ticket } from 'lucide-react';

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycby5NdiJVz-U47wk2Vvhb_03TeIfDdbcxFfYmM7USHJ9T833ds73rMTzKytFiUkgawp5iQ/exec"; 

interface PricingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', position: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
        console.warn("请在 components/Pricing.tsx 中配置 Google Script URL");
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        setSubmitted(true);
        return;
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError('提交失败，请检查网络或稍后再试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset state on close if desired, or keep it. 
    // Here we reset if submitted to allow new submission, otherwise keep input
    if (submitted) {
        setSubmitted(false);
        setFormState({ name: '', phone: '', email: '', position: '' });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-lux-dark border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:text-lux-accent rounded-full transition-colors"
        >
            <X size={24} />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
            {submitted ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-lux-dark">
                    <div className="w-20 h-20 bg-lux-accent rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,220,130,0.5)] animate-in zoom-in duration-300">
                        <CheckCircle className="w-10 h-10 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">提交成功！</h2>
                    <p className="text-gray-300 mb-6 max-w-md">感谢您的预约，我们的团队将尽快通过 WhatsApp 联系您确认席位。</p>
                    <div className="p-4 bg-white/5 rounded border border-white/10 text-sm text-gray-400 mb-8">
                        请留意来自我们团队的信息。
                    </div>
                    <button 
                        onClick={handleClose}
                        className="px-8 py-3 bg-lux-accent text-black font-bold rounded-lg hover:bg-white transition-colors"
                    >
                        关闭窗口
                    </button>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side: Offer Info */}
                    <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-lux-dark to-black border-b lg:border-b-0 lg:border-r border-white/5">
                        <div className="inline-block px-3 py-1 bg-lux-accent/20 text-lux-accent text-xs font-bold uppercase tracking-wider rounded mb-6">
                        近期热销
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">预约 Preview 席位</h2>
                        <p className="text-xl text-gray-300 mb-8">
                        名额有限，先到先得<br/>
                        <span className="text-white font-bold">立即填写资料保留名额！</span>
                        </p>

                        <div className="space-y-6 mb-10">
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="bg-lux-accent/20 p-2 rounded text-lux-accent">
                            <Ticket />
                            </div>
                            <div>
                            <h4 className="font-bold text-white">RM68 / RM100 体验课</h4>
                            <p className="text-sm text-gray-400">线下短场，快速掌握核心框架</p>
                            </div>
                        </div>

                        {/* Gift section removed as requested */}
                        </div>

                        <p className="text-xs text-gray-500 mt-auto">
                        * 您的资料将严格保密，仅用于课程通知。
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-black/20">
                        <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">姓名 (Name) *</label>
                            <input 
                            required
                            type="text" 
                            value={formState.name}
                            onChange={e => setFormState({...formState, name: e.target.value})}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lux-accent focus:ring-1 focus:ring-lux-accent outline-none transition-all disabled:opacity-50"
                            placeholder="请输入您的姓名"
                            disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp 号码 *</label>
                            <input 
                            required
                            type="tel" 
                            value={formState.phone}
                            onChange={e => setFormState({...formState, phone: e.target.value})}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lux-accent focus:ring-1 focus:ring-lux-accent outline-none transition-all disabled:opacity-50"
                            placeholder="e.g. 012-345 6789"
                            disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">电子邮箱 (Email) *</label>
                            <input 
                            required
                            type="email" 
                            value={formState.email}
                            onChange={e => setFormState({...formState, email: e.target.value})}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lux-accent focus:ring-1 focus:ring-lux-accent outline-none transition-all disabled:opacity-50"
                            placeholder="example@email.com"
                            disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">工作职业 (Position)</label>
                            <input 
                            type="text" 
                            value={formState.position}
                            onChange={e => setFormState({...formState, position: e.target.value})}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lux-accent focus:ring-1 focus:ring-lux-accent outline-none transition-all disabled:opacity-50"
                            placeholder="e.g. 老板 / 市场经理"
                            disabled={isSubmitting}
                            />
                        </div>
                        
                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-lux-accent hover:bg-white text-black font-bold py-4 rounded-lg text-lg tracking-wide transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_30px_rgba(0,220,130,0.5)] transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                提交中...
                            </>
                            ) : (
                            "提交报名咨询"
                            )}
                        </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};