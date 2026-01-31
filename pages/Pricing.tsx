
import React from 'react';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started with AI.',
      features: [
        'Access to 2,000+ Free Prompts',
        'Basic Category Search',
        'One-Click Copy',
        'Community Forum Access',
      ],
      cta: 'Start for Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/mo',
      description: 'For professionals who want the best results.',
      features: [
        'Everything in Free',
        'Access to 3,000+ Premium Prompts',
        'Unlimited Collections',
        'Early Access to New Models',
        'Priority Support',
        'Ad-free Experience',
      ],
      cta: 'Get Started with Pro',
      popular: true
    },
    {
      name: 'Lifetime',
      price: '$149',
      period: 'once',
      description: 'The ultimate toolkit for AI power users.',
      features: [
        'Everything in Pro',
        'One-time Payment',
        'Lifetime Updates',
        'Premium Video Tutorials',
        'Direct Access to Engineers',
        'Private Slack Community',
      ],
      cta: 'Claim Lifetime Access',
      popular: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent <span className="gradient-text">Pricing</span></h1>
        <p className="text-xl text-slate-400">Join 50,000+ professionals using our premium prompts to save hours of work every single week.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`glass-card relative rounded-3xl p-8 flex flex-col h-full border-2 transition-transform hover:scale-[1.02] ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/10' : 'border-slate-800'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-blue-500/20">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm">{plan.description}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold">{plan.price}</span>
              {plan.period && <span className="text-slate-500 text-lg font-medium">{plan.period}</span>}
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300">
                  <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-blue-600' : 'bg-slate-700'}`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
              {plan.cta} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto grid gap-6 text-left">
          {[
            { q: "What's the difference between Free and Pro?", a: "Free prompts are generic templates. Pro prompts are complex, multi-step engineering prompts designed for specific industry outcomes." },
            { q: "Do you offer refunds?", a: "Yes, we have a 14-day 'no-questions-asked' money back guarantee for all Pro plans." },
            { q: "Can I cancel my subscription anytime?", a: "Absolutely. You can manage your subscription from your dashboard with one click." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl">
              <h4 className="font-bold mb-2">{item.q}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
