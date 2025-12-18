import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;
    const res = await fetch(`${API}/api/deleteProducts/${id}`, {
      method: "DELETE",
    });
    if (res.status === 204) {
      alert("Product deleted successfully");
      setProducts(products.filter((p) => p._id !== id));
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* HEADER */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-[#9ae6ff] font-semibold">
            Curated Collection
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] mb-2">
          Discover Products
        </h1>
        <p className="text-slate-300/80 text-lg">Explore our exclusive range of premium items</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(17,29,55,0.6)] h-80 animate-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(13,22,40,0.8)] to-[rgba(9,16,30,0.88)] shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-300 backdrop-blur flex flex-col"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(125,214,255,0.12),transparent_35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden h-52 bg-[rgba(17,29,55,0.6)]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,16,30,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-[#9ae6ff] transition-colors">
                  {p.name}
                </h3>

                <p className="text-slate-300 text-sm mb-4 line-clamp-2 flex-grow">
                  {p.description}
                </p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#7dd6ff] to-[#9ae6ff] bg-clip-text text-transparent">
                    ?{p.price}
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="grid grid-cols-3 gap-2">
                  {/* VIEW */}
                  <Link
                    to={`/product/${p._id}`}
                    className="text-center px-3 py-2.5 rounded-lg border border-white/15 bg-[rgba(125,214,255,0.12)] hover:bg-[rgba(125,214,255,0.2)] text-[#9ae6ff] font-semibold text-sm transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                  >
                    View
                  </Link>

                  {/* ADD TO CART */}
                  <button
                    onClick={() => addToCart(p)}
                    className="flex items-center justify-center px-3 py-2.5 rounded-lg border border-white/15 bg-gradient-to-r from-[#7dd6ff]/20 to-[#9ae6ff]/20 hover:from-[#7dd6ff]/30 hover:to-[#9ae6ff]/30 text-[#9ae6ff] font-semibold text-sm transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="text-center px-3 py-2.5 rounded-lg border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold text-sm transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
