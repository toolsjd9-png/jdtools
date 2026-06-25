"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const whatsappUrl = "https://wa.me/8208108473";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      
      {/* ABOVE SECTION: Light Theme (Main Text, Logo, Links, & Support) */}
      <div className="bg-slate-50 text-slate-600 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle Background Gradient Accents tailored for light theme */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00c4cc]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#7b2ff7]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-slate-200">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.avif" 
                  alt="JD Tools Logo" 
                  className="w-8 h-8 object-contain rounded-lg"
                />
                <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8]">
                  JD Tools
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                Premium Canva access platform for creators, designers, and freelancers.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-4 md:justify-self-center">
              <h4 className="text-sm font-bold tracking-wider text-slate-800 uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#home" className="hover:text-slate-900 transition-colors duration-200 block">Home</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-slate-900 transition-colors duration-200 block">Features</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-slate-900 transition-colors duration-200 block">Pricing</a>
                </li>
                <li>
                  <a href="#ai-tools" className="hover:text-slate-900 transition-colors duration-200 block">AI Tools</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-slate-900 transition-colors duration-200 block">Contact</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info & Support */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold tracking-wider text-slate-800 uppercase">
                Support Center
              </h4>
              <div className="space-y-3">
                <p className="text-xs text-slate-500">
                  Fast WhatsApp support available for all customers
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-[#25D366] hover:bg-slate-100 hover:border-slate-300 active:scale-[0.98] transition-all group shadow-sm"
                >
                  <FaWhatsapp className="w-4 h-4 transition-transform group-hover:scale-110" />
                  +91 82081 08473
                </a>
              </div>
            </div>

          </div>

          {/* Disclaimer Panel Layout */}
          <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500 leading-relaxed text-center max-w-4xl mx-auto">
              <span className="font-semibold text-slate-700">Disclaimer:</span> If we do not respond immediately, do not panic. Due to high customer load, response may take some time but 100% reply is guaranteed.
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: Dark Theme (Copyright & Attribution) */}
      <div className="bg-[#0a0a0a] text-slate-400 py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-left">
          
          {/* Copyright text */}
          <p className="text-slate-500 font-medium tracking-wide">
            &copy; {currentYear} JD Tools. All rights reserved.
          </p>

          {/* Connected Web attribution with golden gradient on hover */}
          <p className="text-slate-500 font-medium tracking-wide">
            Website by{" "}
            <a 
              href="https://www.lupaentertainment.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent inline-block"
            >
              Lupa Entertainment
            </a>
          </p>
          
        </div>
      </div>

    </footer>
  );
}