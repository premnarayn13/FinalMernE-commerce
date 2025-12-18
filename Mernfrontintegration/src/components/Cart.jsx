import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* HEADER */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-[#9ae6ff] font-semibold">
            Cart Management
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          Your Shopping Cart
        </h1>
        <p className="text-slate-300/80 mt-3 text-lg">Review and manage your selected items</p>
      </div>

      {cart.length === 0 ? (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.8)] to-[rgba(9,16,30,0.88)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur p-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,214,255,0.08),transparent_50%)]" aria-hidden="true" />
          <div className="relative z-10 text-center py-20">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-2xl bg-white/8 border border-white/10 mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#9ae6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-slate-300 mb-8">Start shopping and add items to your cart</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#050b16] bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] hover:from-[#9ae6ff] hover:to-white transition-all duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* ITEMS LIST */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.8)] to-[rgba(9,16,30,0.88)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,214,255,0.08),transparent_50%)]" aria-hidden="true" />
            <div className="relative z-10 p-8">
              <h2 className="text-xl font-bold text-white mb-8 pb-6 border-b border-white/10">
                Items ({cart.length})
              </h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(17,29,55,0.6)] hover:bg-[rgba(17,29,55,0.8)] transition-all duration-300 p-6"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(125,214,255,0.15),transparent_40%)]" aria-hidden="true" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* IMAGE */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        />
                      </div>

                      {/* DETAILS */}
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.name}</h3>
                        <p className="text-slate-300 text-sm line-clamp-2">
                          {item.description?.substring(0, 80)}...
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/10">
                          <span className="text-[#9ae6ff] text-xs uppercase tracking-wider font-semibold">In Cart</span>
                        </div>
                      </div>

                      {/* PRICE & ACTION */}
                      <div className="w-full md:w-auto flex items-center justify-between md:flex-col md:items-end gap-4">
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] bg-clip-text text-transparent">
                          ?{item.price}
                        </span>
                        <button
                          onClick={() => removeItem(item._id)}
                          className="flex items-center justify-center h-11 w-11 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.8)] via-[rgba(18,34,64,0.8)] to-[rgba(9,16,30,0.88)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur p-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,214,255,0.12),rgba(115,147,255,0.08),transparent)]" aria-hidden="true" />
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/10">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Total Items</p>
                  <p className="text-3xl font-bold text-white">{cart.length}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Subtotal</p>
                  <p className="text-3xl font-bold text-white">?{calculateTotal()}</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-slate-400 text-sm mb-1">Est. Shipping</p>
                  <p className="text-3xl font-bold text-[#9ae6ff]">Free</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-slate-400 text-sm mb-2">Grand Total</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] bg-clip-text text-transparent">
                    ?{calculateTotal()}
                  </p>
                </div>
                <button className="w-full sm:w-auto px-10 py-3.5 rounded-xl font-semibold text-[#050b16] bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] hover:from-[#9ae6ff] hover:to-white transition-all duration-200 shadow-[0_12px_30px_rgba(125,214,255,0.4)] hover:shadow-[0_15px_40px_rgba(125,214,255,0.5)]">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
