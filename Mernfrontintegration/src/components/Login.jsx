import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", email);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* CARD */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.92)] via-[rgba(18,34,64,0.9)] to-[rgba(9,16,30,0.94)] shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,214,255,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(115,147,255,0.12),transparent_40%)]" aria-hidden="true" />
          
          {/* CONTENT */}
          <div className="relative z-10">
            {/* HEADER */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-[#7dd6ff]/30 to-[#9ae6ff]/20 border border-white/10 mb-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9ae6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-300/80 text-sm">Sign in to access your account</p>
            </div>

            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-white/80 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-[rgba(17,29,55,0.7)] backdrop-blur text-white placeholder-slate-400/60 focus:border-[#9ae6ff]/50 focus:ring-2 focus:ring-[#9ae6ff]/20 transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                    required
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-semibold text-white/80 mb-3">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-white/15 bg-[rgba(17,29,55,0.7)] backdrop-blur text-white placeholder-slate-400/60 focus:border-[#9ae6ff]/50 focus:ring-2 focus:ring-[#9ae6ff]/20 transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.596 3.039m10.318 10.318L21.44 21.44" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border border-white/15 bg-[rgba(17,29,55,0.7)] checked:bg-[#9ae6ff] checked:border-[#9ae6ff] transition-colors" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  Keep me signed in
                </span>
              </label>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-xl font-semibold text-[#050b16] bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] hover:from-[#9ae6ff] hover:to-white transition-all duration-200 shadow-[0_12px_30px_rgba(125,214,255,0.4)] hover:shadow-[0_15px_40px_rgba(125,214,255,0.5)]"
              >
                Sign In
              </button>
            </form>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
              <span className="text-xs text-slate-400 uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
            </div>

            {/* SIGNUP LINK */}
            <div className="text-center mb-8">
              <p className="text-slate-300 text-sm">
                Don't have an account?{" "}
                <span className="text-[#9ae6ff] hover:text-white font-semibold transition-colors cursor-pointer">
                  Create one
                </span>
              </p>
            </div>

            {/* BACK LINK */}
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-[#9ae6ff]/50 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(125,214,255,0.1)] text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
