import { useState } from "react";
import { products, categories } from "../data/products";

export default function Products({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState("all");
  const [added, setAdded] = useState({});

  const filtered = activeTab === "all" ? products : products.filter(p => p.categoryKey === activeTab);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500);
  };

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content container">
          <div className="section-label" style={{ justifyContent: "center" }}>Our Products</div>
          <h1>Shop Natural Products</h1>
          <p>From gomaya rituals to premium bilona ghee — pure, organic, and delivered fresh from our farm</p>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="products-tabs">
            {categories.map(cat => (
              <button key={cat.key} className={`tab-btn ${activeTab === cat.key ? "active" : ""}`} onClick={() => setActiveTab(cat.key)}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filtered.map((product, i) => (
              <div className="product-card" key={product.id} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className={`product-img ${product.imgClass}`}>
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <span style={{ fontSize: "64px" }}>{product.emoji}</span>
                </div>
                <div className="product-body">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-main">₹{product.price}</span>
                      <span className="price-unit">{product.unit}</span>
                    </div>
                    <button
                      className="add-cart-btn"
                      onClick={() => handleAdd(product)}
                      style={{ background: added[product.id] ? "#25d366" : undefined, width: "auto", borderRadius: "8px", padding: "0 16px", height: "40px", fontSize: "13px", fontWeight: "600", gap: "6px", display: "flex", alignItems: "center" }}
                      title="Add to cart"
                    >
                      {added[product.id] ? "✓ Added" : "+ Add"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER NOTE */}
          <div style={{ background: "linear-gradient(135deg, var(--forest), var(--leaf))", borderRadius: "20px", padding: "40px", marginTop: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "white", marginBottom: "8px" }}>Custom Order or Bulk Enquiry?</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>Contact us for wholesale rates, subscriptions, or special requirements.</p>
            </div>
            <a href="https://wa.me/919021147485" className="btn-whatsapp" target="_blank" rel="noreferrer">
              💬 WhatsApp for Custom Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
