"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'AI Tools', href: '#ai-tools' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Offset calculation for structural fixed navbar clearance
      const offset = isScrolled ? 73 : 89;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ================= LEFT SIDE: LOGO ================= */}
          <div 
            onClick={(e) => handleScrollToSection(e as any, '#home')} 
            className="flex-shrink-0 flex items-center gap-2.5 group cursor-pointer"
          >
            <Image
              src="/logo.avif"
              alt="JD Tools Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-xl font-black tracking-tight text-slate-900 select-none">
              JD{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] bg-[size:200%_auto] animate-gradient-xy">
                Tools
              </span>
            </span>
          </div>

          {/* ================= CENTER MENU ITEMS ================= */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/60 rounded-full p-1.5 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="relative px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 shadow-sm" />
              </a>
            ))}
          </div>

          {/* ================= RIGHT SIDE BUTTONS ================= */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={(e) => handleScrollToSection(e as any, '#pricing')}
              className="relative group overflow-hidden px-7 py-2.5 rounded-full bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] text-white text-sm font-bold tracking-wide shadow-[0_4px_15px_rgba(123,47,247,0.25)] hover:shadow-[0_4px_20px_rgba(255,79,216,0.4)] transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff4fd8] via-[#7b2ff7] to-[#00c4cc] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <span className="relative z-10">Buy Now</span>
            </button>
          </div>

          {/* ================= MOBILE HAMBURGER BUTTON ================= */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-950 focus:outline-none transition-all duration-300 shadow-sm"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      <div
        className={`fixed inset-x-0 top-[73px] h-[calc(100vh-73px)] bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden border-t border-slate-200 flex flex-col justify-between ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 py-8 space-y-3 overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="flex items-center w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-base font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/50 hover:border-slate-200 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Action Buttons Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 mb-8">
          <button 
            onClick={(e) => handleScrollToSection(e as any, '#pricing')}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] text-white text-base font-bold tracking-wide shadow-md transform active:scale-[0.98] transition-transform"
          >
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
}