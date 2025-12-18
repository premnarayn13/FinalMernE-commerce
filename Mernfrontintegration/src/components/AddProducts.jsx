import React, { useState } from "react";
import { API } from "../utils/api";

export default function AddProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/postProducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          image,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-[#9ae6ff] font-semibold">
              Admin Panel
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] mb-2">
            Add New Product
          </h1>
          <p className="text-slate-300/80 text-lg">Fill in the details below to add a product to your store</p>
        </div>

        {/* SUCCESS TOAST */}
        {success && (
          <div className="mb-8 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#7dd6ff]/30 to-[#9ae6ff]/20 shadow-[0_15px_40px_rgba(0,0,0,0.35)] p-6 animate-in fade-in slide-in-from-top">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(125,214,255,0.2),transparent_40%)]" aria-hidden="true" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9ae6ff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Success!</h3>
                <p className="text-slate-300 text-sm">Product added successfully</p>
              </div>
            </div>
          </div>
        )}

        {/* FORM CARD */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.92)] via-[rgba(18,34,64,0.9)] to-[rgba(9,16,30,0.94)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,214,255,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(115,147,255,0.12),transparent_40%)]" aria-hidden="true" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* PRODUCT NAME */}
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-3">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-[rgba(17,29,55,0.7)] backdrop-blur text-white placeholder-slate-400/60 focus:border-[#9ae6ff]/50 focus:ring-2 focus:ring-[#9ae6ff]/20 transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-3">
                Description
              </label>
              <textarea
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-[rgba(17,29,55,0.7)] backdrop-blur text-white placeholder-slate-400/60 focus:border-[#9ae6ff]/50 focus:ring-2 focus:ring-[#9ae6ff]/20 transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)] resize-none"
                required
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-3">
                Price (?)
              </label>
              <input
                type="number"
                placeholder="Enter product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-[rgba(17,29,55,0.7)] backdrop-blur text-white placeholder-slate-400/60 focus:border-[#9ae6ff]/50 focus:ring-2 focus:ring-[#9ae6ff]/20 transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                required
              />
            </div>

            {/* IMAGE URL */}
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-3">
                Image URL
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-[rgba(17,29,55,0.7)] backdrop-blur text-white placeholder-slate-400/60 focus:border-[#9ae6ff]/50 focus:ring-2 focus:ring-[#9ae6ff]/20 transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                required
              />
            </div>

            {/* IMAGE PREVIEW */}
            {image && (
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[rgba(17,29,55,0.6)] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Preview</p>
                <img src={image} alt="Preview" className="w-full h-48 object-cover rounded-xl" />
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-[#050b16] bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] hover:from-[#9ae6ff] hover:to-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_12px_30px_rgba(125,214,255,0.4)] hover:shadow-[0_15px_40px_rgba(125,214,255,0.5)]"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Product
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
