"use client";

import React, { useState } from 'react';
import { FaCheck, FaCrown, FaBolt, FaStar, FaShieldAlt, FaTimes } from 'react-icons/fa';

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ title: string; price: string; period: string } | null>(null);

  const plans = [
    {
      title: "Monthly Plan",
      price: "89",
      period: "month",
      badge: null,
      description: "Perfect for short-term projects and quick design needs.",
      features: [
        "Canva Premium Access via email",
        "Works on Mobile + PC",
        "Premium templates access",
        "Basic editing tools",
        "Secure activation"
      ],
      isHighlighted: false,
      buttonStyle: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
    },
    {
      title: "Yearly Plan",
      price: "259",
      period: "year",
      badge: "Most Popular",
      description: "The sweet spot for regular creators and professional designers.",
      features: [
        "Everything in Monthly",
        "Priority access",
        "Faster activation",
        "Advanced templates",
        "Better value savings"
      ],
      isHighlighted: true,
      buttonStyle: "bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] text-white shadow-[0_4px_20px_rgba(123,47,247,0.25)] hover:shadow-[0_4px_25px_rgba(255,79,216,0.4)]"
    },
    {
      title: "Advance Plan",
      price: "599",
      period: "lifetime",
      badge: "Best Value",
      description: "Ultimate toolkit power users and demanding creators.",
      features: [
        "All Premium Features",
        "Brand Kit Access",
        "AI Tools (Magic Studio, Magic Edit, Magic Erase, Magic Design)",
        "Website Publish Feature",
        "Bonus exclusive Canva templates"
      ],
      isHighlighted: false,
      buttonStyle: "bg-gradient-to-r from-[#7b2ff7] to-[#ff4fd8] text-white shadow-[0_4px_15px_rgba(255,79,216,0.2)] hover:shadow-[0_4px_20px_rgba(255,79,216,0.35)]"
    }
  ];

  const handleBuyNow = (plan: typeof plans[0]) => {
    setSelectedPlan({ title: plan.title, price: plan.price, period: plan.period });
    setIsModalOpen(true);
  };

  return (
    <section id = "pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00c4cc]/10 via-[#7b2ff7]/5 to-[#ff4fd8]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00c4cc]/10 via-[#7b2ff7]/10 to-[#ff4fd8]/10 border border-slate-200/60 mb-5">
            <FaCrown className="w-4 h-4 text-[#7b2ff7]" />
            <span className="text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] to-[#7b2ff7]">Pricing Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Unleash Full Creativity with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] bg-[size:200%_auto]">
              Premium Access
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Get instant unlock codes to all features, premium assets, and magical AI design systems. Choose the timeline that matches your hustle.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-3xl p-8 bg-white transition-all duration-300 transform hover:-translate-y-1.5 ${
                plan.isHighlighted
                  ? 'border-2 border-[#7b2ff7] shadow-[0_20px_40px_rgba(123,47,247,0.08)] ring-4 ring-[#7b2ff7]/5'
                  : 'border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)]'
              }`}
            >
              {/* Card Badge Header */}
              {plan.badge && (
                <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold tracking-wide text-white uppercase shadow-sm ${
                  plan.badge === 'Most Popular' 
                    ? 'bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8]' 
                    : 'bg-gradient-to-r from-[#7b2ff7] to-[#ff4fd8]'
                }`}>
                  {plan.badge}
                </span>
              )}

              <div>
                {/* Title and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-slate-900">{plan.title}</h3>
                  {plan.title.includes('Monthly') && <FaShieldAlt className="text-slate-400 w-5 h-5" />}
                  {plan.title.includes('Yearly') && <FaBolt className="text-[#00c4cc] w-5 h-5" />}
                  {plan.title.includes('Advance') && <FaStar className="text-[#ff4fd8] w-5 h-5" />}
                </div>

                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-slate-100">
                  <span className="text-3xl font-bold text-slate-900">₹</span>
                  <span className="text-5xl font-black tracking-tight text-slate-900">{plan.price}</span>
                  <span className="text-slate-400 text-sm font-medium ml-1">/{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-tight">
                      <span className={`flex-shrink-0 p-0.5 rounded-full mt-0.5 ${
                        plan.isHighlighted ? 'bg-[#7b2ff7]/10 text-[#7b2ff7]' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <FaCheck className="w-3 h-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Action Button */}
              <button
                onClick={() => handleBuyNow(plan)}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-base tracking-wide transition-all duration-300 transform active:scale-[0.98] cursor-pointer ${plan.buttonStyle}`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal Flow */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 text-center transform scale-100 transition-all">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50"
              aria-label="Close Modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="inline-block text-xs font-black uppercase tracking-wider px-3 py-1 bg-[#7b2ff7]/10 text-[#7b2ff7] rounded-full mb-2">
                Checkout
              </span>
              <h3 className="text-2xl font-black text-slate-900">Complete Your Payment</h3>
            </div>

            {/* Selected Plan Summary Card */}
            <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100 flex justify-between items-center text-left">
              <div>
                <p className="text-sm font-bold text-slate-900">{selectedPlan.title}</p>
                <p className="text-xs text-slate-500">Canva Premium Activation</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-[#7b2ff7]">₹{selectedPlan.price}</p>
                <p className="text-xs text-slate-400">/{selectedPlan.period}</p>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 inline-block shadow-sm mb-6">
              <img
                src="/gpay-qr.png"
                alt="Google Pay QR Code"
                className="w-48 h-48 mx-auto object-contain"
              />
            </div>

            {/* Instructions Footer */}
            <div className="space-y-2">
              <p className="text-base font-extrabold text-slate-800">
                Scan using Google Pay / PhonePe / Paytm
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-normal">
                Once the payment is successful, your Canva Premium activation credentials will be securely dispatched to your registered email address automatically.
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}