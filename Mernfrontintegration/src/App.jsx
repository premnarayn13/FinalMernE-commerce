import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddProducts from "./components/AddProducts";

function App() {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if exists
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Lazy-load expressive font for the refreshed experience
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const themeStyles = `
    :root {
      --navy-950: #050b16;
      --navy-900: #081126;
      --navy-800: #0f1d3b;
      --navy-700: #16284f;
      --accent-500: #7dd6ff;
      --accent-400: #9ae6ff;
      --card: rgba(17, 29, 55, 0.85);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: radial-gradient(circle at 10% 20%, rgba(72, 118, 255, 0.18), transparent 35%),
        radial-gradient(circle at 90% 0%, rgba(0, 229, 255, 0.12), transparent 30%),
        linear-gradient(135deg, var(--navy-950), var(--navy-800));
      color: #eaf3ff;
      font-family: "Space Grotesk", "Segoe UI", sans-serif;
      min-height: 100vh;
    }

    a {
      color: var(--accent-400);
      transition: color 180ms ease, text-shadow 180ms ease;
    }

    a:hover {
      color: #ffffff;
      text-shadow: 0 0 20px rgba(154, 230, 255, 0.35);
    }

    .app-shell {
      position: relative;
      min-height: 100vh;
      overflow: hidden;
      padding: 28px 18px 32px;
    }

    .app-shell::before,
    .app-shell::after {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 20% 20%, rgba(125, 214, 255, 0.2), transparent 35%),
        radial-gradient(circle at 80% 10%, rgba(125, 214, 255, 0.12), transparent 32%),
        radial-gradient(circle at 50% 70%, rgba(70, 110, 255, 0.14), transparent 42%);
      filter: blur(12px);
      z-index: 0;
      pointer-events: none;
      opacity: 0.9;
    }

    .app-shell::after {
      background: radial-gradient(circle at 15% 85%, rgba(0, 229, 255, 0.12), transparent 40%),
        radial-gradient(circle at 80% 82%, rgba(255, 255, 255, 0.06), transparent 45%);
      opacity: 0.55;
    }

    .grain-layer {
      position: absolute;
      inset: -20%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Crect width='2' height='2'/%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.5;
      mix-blend-mode: screen;
      z-index: 1;
      pointer-events: none;
    }

    .frame {
      position: relative;
      z-index: 2;
      margin: 0 auto;
      max-width: 1280px;
      width: 100%;
    }

    .frame-inner {
      background: rgba(13, 22, 40, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 20px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(18px);
      padding: 18px 20px;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }

    .frame-inner:hover {
      transform: translateY(-2px);
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
    }

    .main-wrap {
      position: relative;
      z-index: 2;
      margin: 22px auto 24px;
      max-width: 1280px;
      width: 100%;
    }

    .main-shell {
      background: linear-gradient(145deg, rgba(13, 22, 40, 0.8), rgba(9, 16, 30, 0.88));
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.55);
      padding: 26px 26px 30px;
      backdrop-filter: blur(18px);
      overflow: hidden;
      animation: riseIn 680ms ease;
    }

    .shell-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(124, 214, 255, 0.08), transparent 50%),
        linear-gradient(200deg, rgba(70, 110, 255, 0.07), transparent 40%);
      pointer-events: none;
      z-index: 1;
    }

    .content-body {
      position: relative;
      z-index: 2;
    }

    .section-heading {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }

    .pill {
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(125, 214, 255, 0.12);
      border: 1px solid rgba(154, 230, 255, 0.4);
      color: #e8f6ff;
      font-size: 13px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .heading-text {
      font-size: clamp(24px, 3vw, 30px);
      font-weight: 600;
      color: #f3f7ff;
      text-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
      margin: 0;
    }

    .subtext {
      max-width: 780px;
      color: #cbd9f1;
      margin: 8px 0 0;
      line-height: 1.6;
      font-size: 15px;
    }

    button {
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: linear-gradient(135deg, rgba(125, 214, 255, 0.22), rgba(82, 116, 255, 0.28));
      color: #f7fbff;
      border-radius: 14px;
      padding: 10px 16px;
      font-weight: 600;
      letter-spacing: 0.2px;
      transition: transform 160ms ease, box-shadow 200ms ease, background 200ms ease;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.04);
      cursor: pointer;
    }

    button:hover {
      transform: translateY(-1px) scale(1.01);
      background: linear-gradient(135deg, rgba(154, 230, 255, 0.35), rgba(115, 147, 255, 0.4));
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
    }

    button:active {
      transform: translateY(0);
    }

    input,
    select,
    textarea {
      background: rgba(17, 29, 55, 0.85);
      color: #eaf3ff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 12px 14px;
      outline: none;
      transition: border 150ms ease, box-shadow 150ms ease, transform 150ms ease;
    }

    input:focus,
    select:focus,
    textarea:focus {
      border: 1px solid rgba(154, 230, 255, 0.35);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(154, 230, 255, 0.3);
      transform: translateY(-1px);
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(13, 22, 40, 0.65);
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(125, 214, 255, 0.6), rgba(82, 116, 255, 0.7));
      border-radius: 20px;
    }

    @keyframes riseIn {
      from {
        opacity: 0;
        transform: translateY(12px) scale(0.99);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `;

  return (
    <div className="app-shell">
      <style>{themeStyles}</style>
      <div className="grain-layer" aria-hidden="true" />

      <div className="frame">
        <div className="frame-inner">
          <Header cartLength={cart.length} />
        </div>
      </div>

      <main className="main-wrap">
        <div className="main-shell">
          <div className="shell-gradient" aria-hidden="true" />
          <div className="content-body">
            <div className="section-heading">
              <span className="pill">Elevated</span>
              <h1 className="heading-text">Dark navy experience, refined.</h1>
            </div>
            <p className="subtext">
              Sleek glassmorphism, responsive layouts, and animated controls give every page a
              professional edge across the storefront, cart, and admin flows.
            </p>
            <div style={{ marginTop: "22px" }}>
              <Routes>
                <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
                <Route path="/product/:id" element={<Product />} />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart cart={cart} setCart={setCart} />
                    </ProtectedRoute>
                  }
                />
                <Route path="/addproduct" element={<AddProducts />} />
                <Route
                  path="/buynow/:id"
                  element={
                    <ProtectedRoute>
                      <BuyNow />
                    </ProtectedRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>

      <div className="frame" style={{ marginTop: "12px" }}>
        <div className="frame-inner">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;