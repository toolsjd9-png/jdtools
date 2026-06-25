"use client";

import React, { useState } from 'react';
import { FaShieldAlt, FaBolt, FaMagic, FaLaptop, FaStar, FaCrown, FaCheck, FaTimes } from 'react-icons/fa';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ title: string; price: string; period: string } | null>(null);

  // Smooth scroll handler function
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openPaymentModal = () => {
    setSelectedPlan({ title: 'Canva Premium', price: '259', period: 'year' });
    setIsModalOpen(true);
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-slate-50 text-slate-900 overflow-hidden flex items-center justify-center py-12 sm:py-20 lg:py-32">
      
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

      {/* 🌟 Soft Glowing Gradient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#00c4cc]/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#7b2ff7]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute top-[25%] right-[20%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#ff4fd8]/5 rounded-full blur-[90px] sm:blur-[150px] pointer-events-none" />

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT SIDE CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-700 shadow-[0_2px_10px_rgba(0,196,204,0.08)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c4cc] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c4cc]"></span>
              </span>
              🔥 Canva Premium Access
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-950 max-w-2xl">
              Create Insanely Beautiful Designs with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] bg-[size:200%_auto] hover:bg-right transition-all duration-1000">
                Canva Premium Plans
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-light">
              Unlock premium Canva features instantly on your email. Use on Mobile & Desktop with AI tools, templates, and pro editing features.
            </p>

            {/* Feature Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md sm:max-w-xl">
              {[
                { label: 'Multi Device Access (Mobile + PC)', icon: FaLaptop },
                { label: 'Secure Activation', icon: FaShieldAlt },
                { label: 'Instant Setup', icon: FaBolt },
                { label: 'AI Design Tools', icon: FaMagic },
              ].map((chip, index) => (
                <div key={index} className="flex items-center gap-3 bg-white border border-slate-100 hover:border-slate-200 px-4 py-3.5 rounded-2xl transition-all duration-300 group hover:bg-slate-50 shadow-sm hover:shadow-md">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-slate-100 to-transparent">
                    <chip.icon className="w-4 h-4 text-[#00c4cc]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{chip.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button onClick={() => handleSmoothScroll('ai-tools')} className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] text-white font-bold tracking-wide shadow-lg transform hover:-translate-y-0.5 transition-all w-full sm:w-52">
                Get Started
              </button>
              <button onClick={() => handleSmoothScroll('pricing')} className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-all w-full sm:w-52 shadow-sm">
                View Pricing
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE CONTENT ================= */}
          <div className="lg:col-span-5 flex justify-center relative w-full pt-8 lg:pt-0">
            <div className="relative w-full max-w-sm p-[1px] rounded-3xl bg-gradient-to-b from-slate-200 via-slate-100 to-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative rounded-[23px] bg-white/90 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#7b2ff7] to-[#ff4fd8] text-white text-[10px] font-black px-3 py-1.5 rounded-xl">Best Seller</div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-[#00c4cc]/10 to-[#7b2ff7]/10 border border-slate-100">
                    <FaCrown className="w-6 h-6 text-[#00c4cc]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">Canva Premium</h3>
                  </div>
                </div>

                <hr className="border-slate-100 my-5" />

                <div className="space-y-3.5 mb-8">
                  {['100+ Million Premium Assets', 'Magic Studio AI Features', 'Brand Kit & Typography', 'Background Remover Tool'].map((perk, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-0.5 p-0.5 rounded-full bg-emerald-100 text-emerald-600">
                        <FaCheck className="w-3 h-3" />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-6 flex items-center justify-between shadow-inner">
                  <div>
                    <p className="text-xs font-medium text-slate-600 uppercase">Access Plan</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-extrabold text-slate-950">₹259</p>
                    <p className="text-xs text-[#00c4cc]">/ Year</p>
                  </div>
                </div>

                <button onClick={openPaymentModal} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00c4cc] to-[#7b2ff7] text-white font-bold shadow-lg active:scale-95 transition-all">
                   Activate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}