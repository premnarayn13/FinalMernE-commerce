export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(10,18,34,0.92)] text-white mt-10">
      <div
        className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_80%,rgba(125,214,255,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wide text-[#9ae6ff]">
              Trusted Storefront
            </div>
            <h3 className="text-2xl font-bold drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">MERN E-Commerce</h3>
            <p className="text-slate-300 leading-relaxed">
              Dark navy elegance meets reliable delivery. Shop curated picks with secure checkout and responsive support.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-[#9ae6ff]">Quick Links</h4>
            <ul className="space-y-2 text-slate-200/80">
              <li><a href="/" className="flex items-center gap-2 hover:text-white transition-colors">Home</a></li>
              <li><a href="/cart" className="flex items-center gap-2 hover:text-white transition-colors">Cart</a></li>
              <li><a href="/" className="flex items-center gap-2 hover:text-white transition-colors">Products</a></li>
              <li><a href="/" className="flex items-center gap-2 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-[#9ae6ff]">Contact</h4>
            <ul className="space-y-3 text-slate-200/80">
              <li className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl bg-white/8 border border-white/10 grid place-items-center text-[#9ae6ff] shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span>support@mernecommerce.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl bg-white/8 border border-white/10 grid place-items-center text-[#9ae6ff] shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-slate-300/80 text-sm">
          <p>&copy; {new Date().getFullYear()} MERN E-Commerce Project. Crafted on a dark navy canvas.</p>
        </div>
      </div>
    </footer>
  );
}
