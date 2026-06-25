"use client";

import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaShoppingCart, FaBell, FaTimes } from 'react-icons/fa';
import { products, Product } from '@/data/products';

export default function ProductSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const floor = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floor) {
        stars.push(<FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />);
      } else {
        stars.push(<FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-slate-200 fill-slate-200" />);
      }
    }
    return stars;
  };

  return (
    <section id="ai-tools" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Market Category Header */}
        <div className="mb-10 border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Trending <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8]">Digital Access Tools</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Explore verified premium platform access modules instantly deployed for your production workspace.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Deals Verified
          </div>
        </div>

        {/* Retail/E-commerce Product Grid Layout - Updated to grid-cols-2 for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {products.map((product) => {
            const isActive = product.status === 'active';
            
            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300/80 transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product Badge Overlay - Scaled down for mobile */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                  <span className={`text-[9px] sm:text-[11px] font-extrabold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md tracking-wide uppercase shadow-sm text-white ${
                    product.badge === 'Hot Deal' ? 'bg-gradient-to-r from-[#00c4cc] to-[#7b2ff7]' :
                    product.badge === 'Most Popular' ? 'bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8]' :
                    'bg-gradient-to-r from-[#7b2ff7] to-[#ff4fd8]'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Visual Container Box */}
                <div className="relative w-full aspect-square bg-slate-100 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Product Info Block - Adjusted padding and text sizes for 2 columns */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#7b2ff7] transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    
                    {/* Star Rating Layout - Optimized configuration for tight spaces */}
                    <div className="flex flex-wrap items-center gap-1 mt-1.5 mb-2">
                      <div className="flex items-center">{renderStars(product.rating)}</div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-700 ml-0.5">{product.rating}</span>
                      {product.reviewsCount > 0 && (
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium truncate max-w-[65px] sm:max-w-none">
                          ({product.reviewsCount.toLocaleString()})
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Financial Checkout & Conversion Elements */}
                  <div className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap items-baseline gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                      {isActive ? (
                        <>
                          <span className="text-[10px] sm:text-xs font-medium text-slate-500 w-full block sm:inline sm:w-auto sm:mr-1">Starting from</span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900">₹</span>
                          <span className="text-base sm:text-2xl font-black tracking-tight text-slate-900">{product.price}</span>
                          <span className="text-[10px] sm:text-xs text-slate-400 font-medium">/{product.period}</span>
                          {product.originalPrice && (
                            <span className="text-xs sm:text-sm text-slate-400 line-through font-medium ml-1 sm:ml-2">₹{product.originalPrice}</span>
                          )}
                          {product.discount && (
                            <span className="text-[9px] sm:text-xs font-black text-emerald-600 bg-emerald-50 px-1 sm:px-1.5 py-0.5 rounded ml-auto mt-1 sm:mt-0">
                              {product.discount}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-sm sm:text-xl font-extrabold tracking-tight text-slate-400 bg-slate-100 px-2 sm:px-3 py-1 rounded-md text-center w-full">
                          {product.price}
                        </span>
                      )}
                    </div>

                    {/* Dedicated CTA Transaction System */}
                    {isActive ? (
                      <button 
                        onClick={() => handleBuyNow(product)}
                        className="w-full bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] text-white py-2 px-2 sm:py-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_14px_rgba(123,47,247,0.2)] hover:shadow-[0_6px_20px_rgba(255,79,216,0.35)] hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-1 sm:gap-2 cursor-pointer"
                      >
                        <FaShoppingCart className="w-3.5 h-3.5 sm:w-4 h-4" />
                        Buy Now
                      </button>
                    ) : (
                      <button 
                        disabled 
                        className="w-full bg-slate-100 text-slate-400 border border-slate-200 py-2 px-2 sm:py-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1 sm:gap-2 cursor-not-allowed"
                      >
                        <FaBell className="w-3.5 h-3.5 sm:w-4 h-4" />
                        Notify Me
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Payment Modal Flow */}
      {isModalOpen && selectedProduct && (
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
                <p className="text-sm font-bold text-slate-900">{selectedProduct.title}</p>
                <p className="text-xs text-slate-500">Canva Premium Activation</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-[#7b2ff7]">₹{selectedProduct.price}</p>
                <p className="text-xs text-slate-400">/{selectedProduct.period}</p>
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