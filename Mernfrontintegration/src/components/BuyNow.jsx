import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BuyNow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((allproducts) => {
        const product = allproducts.find((p) => p._id === id);
        setProduct(product);
      });
  }, [id]);

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
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* SUCCESS HEADER */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#7dd6ff]/30 to-[#9ae6ff]/20 shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur p-8 mb-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(125,214,255,0.2),transparent_40%)]" aria-hidden="true" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#7dd6ff]/40 to-[#9ae6ff]/30 border border-white/20 mb-6 shadow-[0_15px_40px_rgba(125,214,255,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#9ae6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] mb-2">
              Order Confirmed!
            </h1>
            <p className="text-slate-300/90 text-lg">Your order has been placed successfully</p>
          </div>
        </div>

        {/* PRODUCT CARD */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.8)] to-[rgba(9,16,30,0.88)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur p-8 mb-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,214,255,0.08),transparent_50%)]" aria-hidden="true" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* IMAGE */}
            <div className="flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[rgba(17,29,55,0.6)] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* DETAILS */}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
              <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                {product.description?.substring(0, 100)}...
              </p>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] bg-clip-text text-transparent">
                ?{product.price}
              </div>
            </div>
          </div>
        </div>

        {/* ORDER DETAILS */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.8)] to-[rgba(9,16,30,0.88)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur p-8 mb-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,214,255,0.08),transparent_50%)]" aria-hidden="true" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
              Order Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* ORDER ID */}
              <div className="p-4 rounded-xl border border-white/10 bg-[rgba(17,29,55,0.6)]">
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Order ID</p>
                <p className="text-lg font-bold text-white">
                  #ORD{Math.floor(Math.random() * 10000).toString().padStart(5, "0")}
                </p>
              </div>

              {/* DATE */}
              <div className="p-4 rounded-xl border border-white/10 bg-[rgba(17,29,55,0.6)]">
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Order Date</p>
                <p className="text-lg font-bold text-white">
                  {new Date().toLocaleDateString()}
                </p>
              </div>

              {/* STATUS */}
              <div className="p-4 rounded-xl border border-white/10 bg-[rgba(17,29,55,0.6)]">
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Status</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9ae6ff]/30 bg-[#9ae6ff]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#9ae6ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-sm font-semibold text-[#9ae6ff]">Processing</span>
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-8 p-6 rounded-xl border border-white/10 bg-[rgba(17,29,55,0.4)]">
              <p className="text-center text-slate-300">
                Thank you for your purchase! A confirmation email has been sent to your registered email address. Your order will be dispatched within 2-3 business days.
              </p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-[#050b16] bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] hover:from-[#9ae6ff] hover:to-white transition-all duration-200 shadow-[0_12px_30px_rgba(125,214,255,0.4)] hover:shadow-[0_15px_40px_rgba(125,214,255,0.5)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Continue Shopping
          </Link>
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border border-white/15 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(125,214,255,0.1)] transition-all duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Order Details
          </button>
        </div>
      </div>
    </div>
  );
}
