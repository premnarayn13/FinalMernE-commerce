import { Link } from "react-router-dom";

export default function Header({ cartLength }) {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[rgba(12,24,44,0.92)] via-[rgba(18,34,64,0.9)] to-[rgba(14,28,52,0.92)] shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(125,214,255,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(125,214,255,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(125,214,255,0.08),rgba(115,147,255,0.08),transparent)]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 py-5 flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-white/10 backdrop-blur border border-white/15 shadow-lg grid place-items-center text-[#9ae6ff] text-xl font-semibold">
            🛒
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] tracking-tight">
              MERN E-Commerce
            </h1>
            <p className="text-sm text-slate-200/80 group-hover:text-white transition-colors">Curated essentials with a modern glow</p>
          </div>
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to="/addproduct"
            className="relative overflow-hidden px-4 py-2.5 rounded-xl font-semibold text-white border border-white/15 bg-[rgba(125,214,255,0.15)] hover:bg-[rgba(154,230,255,0.22)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-200"
          >
            <span className="relative z-10">Add Product</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-200 bg-[radial-gradient(circle_at_50%_0%,rgba(154,230,255,0.45),transparent_45%)]" />
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white border border-white/15 bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(125,214,255,0.14)] transition-all duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#9ae6ff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Cart</span>
            {cartLength > 0 && (
              <span className="absolute -top-2 -right-2 h-6 min-w-[24px] px-1 rounded-full bg-gradient-to-r from-[#7dd6ff] to-[#7393ff] text-[11px] font-bold text-[#050b16] flex items-center justify-center shadow-lg">
                {cartLength}
              </span>
            )}
          </Link>

          {localStorage.getItem("user") ? (
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-[#050b16] bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] hover:from-[#9ae6ff] hover:to-white transition-all duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white border border-white/15 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(125,214,255,0.16)] transition-all duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#9ae6ff]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
