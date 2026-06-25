"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappFloatingIcon() {
  const phoneNumber = "918208108473"; // Includes country code for India (+91)
  const message = encodeURIComponent("Hello! I want to activate my Canva Premium plan.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      {/* Subtle pulsing outer ring decoration */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:opacity-0 transition-opacity" />
      
      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}