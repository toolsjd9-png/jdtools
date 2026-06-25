"use client";

import React from 'react';
import { 
  FaEnvelopeOpenText, 
  FaLaptop, 
  FaLayerGroup, 
  FaSlidersH, 
  FaMagic, 
  FaBriefcase, 
  FaGlobe, 
  FaLock, 
  FaBolt, 
  FaUserShield, 
  FaCrown 
} from 'react-icons/fa';

export default function FeaturesSection() {
  const coreFeatures = [
    {
      title: "Premium Access via Email",
      description: "Direct invite link sent directly to your existing personal email address.",
      icon: FaEnvelopeOpenText,
      isHighlighted: false,
    },
    {
      title: "Works on Mobile + Desktop",
      description: "Seamless synchronization across all devices. Edit on the go or at your workstation.",
      icon: FaLaptop,
      isHighlighted: false,
    },
    {
      title: "Premium Templates Library",
      description: "Unlock over 100+ million premium stock photos, videos, audio, and graphics.",
      icon: FaLayerGroup,
      isHighlighted: false,
    },
    {
      title: "Pro Editing Tools",
      description: "One-click Background Remover, Magic Resizer, and premium export filters.",
      icon: FaSlidersH,
      isHighlighted: false,
    },
    {
      title: "Private Projects & Security",
      description: "Your workspace is completely private. Nobody else can view your personal files.",
      icon: FaLock,
      isHighlighted: false,
    },
    {
      title: "Instant Activation System",
      description: "Automated provisioning ensures your account upgrades seconds after processing.",
      icon: FaBolt,
      isHighlighted: false,
    },
    {
      title: "100% Secure & Fast Setup",
      description: "No dangerous credentials or account sharing required. Safely handled via official invites.",
      icon: FaUserShield,
      isHighlighted: false,
    }
  ];

  const highlightedFeatures = [
    {
      title: "AI Tools Suite (Magic Studio)",
      description: "Incorporate revolutionary artificial intelligence systems directly into your creation workflow. Harness Magic Edit, Magic Erase, Magic Design, and instant text-to-image transformations.",
      icon: FaMagic,
      badge: "Revolutionary",
      gradient: "from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8]",
    },
    {
      title: "Brand Kit Access",
      description: "Maintain ultimate consistency across your business assets. Access custom font uploads, unified logo buckets, and dynamic preset brand color palettes. Available exclusively on Advance Plans.",
      icon: FaBriefcase,
      badge: "Advance Plan Only",
      gradient: "from-[#7b2ff7] to-[#ff4fd8]",
    },
    {
      title: "Website Publishing Feature",
      description: "Convert structural canvases directly into responsive websites. Build portfolios, event registration forms, or high-converting product landing screens mapped directly within Canva.",
      icon: FaGlobe,
      badge: "Advance Plan Only",
      gradient: "from-[#00c4cc] to-[#7b2ff7]",
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Dynamic Ambient Background Glow Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00c4cc]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff4fd8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00c4cc]/10 via-[#7b2ff7]/10 to-[#ff4fd8]/10 border border-slate-200/60 mb-5">
            <FaCrown className="w-3.5 h-3.5 text-[#7b2ff7]" />
            <span className="text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] to-[#7b2ff7]">Powerful Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Everything You Need To{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] bg-[size:200%_auto]">
              Design Pro Layouts
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Ditch restrictions. Access all high-end collaborative toolkits, massive asset warehouses, and next-generation formatting platforms instantly.
          </p>
        </div>

        {/* ================= INTERACTIVE HIGHLIGHTED BENTO ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {highlightedFeatures.map((feat, i) => (
            <div 
              key={i}
              className="relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-200 via-slate-100 to-transparent shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.08)] transition-all duration-500 group overflow-hidden"
            >
              {/* Dynamic Gradient Glow on Hover */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${feat.gradient} opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none`} />

              {/* Card Surface Layer */}
              <div className="relative rounded-[23px] bg-white p-8 h-full flex flex-col justify-between z-10">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feat.gradient} text-white shadow-md`}>
                      <feat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200/60">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-[#7b2ff7] transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                {/* Micro decorative line */}
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${feat.gradient} mt-6 opacity-40 group-hover:w-full transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* ================= CORE GRID DISPLAY ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feat, i) => (
            <div 
              key={i}
              className="border border-slate-200/80 rounded-2xl p-6 bg-white hover:bg-slate-50/50 hover:border-slate-300 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_15px_30px_rgba(15,23,42,0.04)] transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 w-fit mb-4 group-hover:bg-[#00c4cc]/10 group-hover:text-[#00c4cc] transition-colors duration-300">
                <feat.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-slate-950 transition-colors">
                {feat.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}