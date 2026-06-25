"use client";

import React from 'react';
import { FaWhatsapp, FaRegCommentDots, FaClock, FaUserCheck } from 'react-icons/fa';

export default function ContactSection() {
  const whatsappUrl = "https://wa.me/916387035356";

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Decorative Brand Gradient Background Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#00c4cc]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#ff4fd8]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ================= LEFT SIDE: INFO & TEXT ================= */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7b2ff7]/5 border border-[#7b2ff7]/10">
              <FaRegCommentDots className="w-4 h-4 text-[#7b2ff7]" />
              <span className="text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#7b2ff7] to-[#ff4fd8]">
                Customer Support
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Need Help? Chat With Our{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8]">
                Support Executives
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Have questions about your Canva Premium subscription, activation timeline, or corporate platform plans? Get quick real-time assistance directly from our active operations team.
            </p>

            {/* Micro Trust Points Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-2">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-600 font-medium">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[#00c4cc]">
                  <FaClock className="w-4 h-4" />
                </div>
                <span>Quick Responses</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-600 font-medium">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[#7b2ff7]">
                  <FaUserCheck className="w-4 h-4" />
                </div>
                <span>Verified Setup</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: CONTACT CARD ================= */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-200 via-slate-100 to-white shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
              <div className="relative rounded-[23px] bg-white p-6 sm:p-8">
                
                {/* Meta Indicator Tag */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] font-black uppercase tracking-wider bg-slate-100 border border-slate-200/60 px-3 py-1 rounded-md text-slate-600">
                    Official Support Channel
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>

                {/* Prominent WhatsApp Call-To-Action Box */}
                <div className="text-center space-y-4 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Primary Contact Method</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-4 px-6 rounded-2xl font-black text-base tracking-wide shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer group"
                  >
                    <FaWhatsapp className="w-6 h-6 transition-transform group-hover:scale-110" />
                    Chat on WhatsApp
                  </a>
                  <p className="text-sm font-bold text-slate-800 tracking-wide">+91 63870 35356</p>
                </div>

                {/* Important Trust Message Box */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-center">
                  <p className="text-xs leading-relaxed text-amber-800 font-medium">
                    ⚠️ <span className="font-bold">Important Notice:</span> If we do not respond immediately, do not panic. We will respond <span className="font-bold">100% within some time</span> due to high customer load. Our executives may be busy assisting other creators.
                  </p>
                </div>

                {/* Secure Workspace Guarantee Footnote */}
                <p className="text-[11px] text-center text-slate-400 mt-5 font-medium tracking-wide">
                  🔒 Encrypted routing. Instant digital delivery tracking support.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}