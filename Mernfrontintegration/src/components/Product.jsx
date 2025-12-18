import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../utils/api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`${API}/api/products`)
      .then((res) => res.json())
      .then((allproducts) => {
        const product = allproducts.find((p) => p._id === id);
        setProduct(product);
      });
  });

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-red-500/10 border border-red-500/30 mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            Product not found
          </h2>
          <p className="text-slate-300 mb-8">The product you're looking for doesn't exist</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-gradient-to-r from-[#7dd6ff]/20 to-[#9ae6ff]/20 hover:from-[#7dd6ff]/30 hover:to-[#9ae6ff]/30 text-[#9ae6ff] font-semibold transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* BACK LINK */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:border-[#9ae6ff]/50 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(125,214,255,0.1)] text-[#9ae6ff] font-semibold text-sm transition-all duration-200 mb-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </Link>

      {/* PRODUCT CONTAINER */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.8)] via-[rgba(18,34,64,0.8)] to-[rgba(9,16,30,0.88)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,214,255,0.08),rgba(115,147,255,0.06),transparent)]" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-12">
          {/* IMAGE SECTION */}
          <div className="flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[rgba(17,29,55,0.6)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-[#9ae6ff] font-semibold mb-4">
                Available
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] mb-4">
                {product.name}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* PRICE */}
            <div className="mb-8">
              <p className="text-slate-400 text-sm mb-2">Price</p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] bg-clip-text text-transparent">
                  ?{product.price}
                </span>
                <span className="text-sm text-slate-400">(Inclusive of all taxes)</span>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Premium Quality",
                  "1 Year Warranty",
                  "Free Shipping",
                  "30-Day Returns"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-[rgba(17,29,55,0.6)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9ae6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/buynow"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-[#050b16] bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] hover:from-[#9ae6ff] hover:to-white transition-all duration-200 shadow-[0_12px_30px_rgba(125,214,255,0.4)] hover:shadow-[0_15px_40px_rgba(125,214,255,0.5)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Buy Now
              </Link>

              <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border border-white/15 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(125,214,255,0.1)] transition-all duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
