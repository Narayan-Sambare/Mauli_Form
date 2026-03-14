import { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";

export default function Home({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? products.slice(0, 6) : products.filter(p => p.categoryKey === activeTab).slice(0, 6);

  const testimonials = [
    { text: "Mauli Farm's A2 ghee is exceptional. The aroma and taste remind me of my grandmother's homemade ghee. Absolutely authentic!", name: "Priya Kulkarni", location: "Pune", stars: 5, color: "#e8f5e9", emoji: "👩" },
    { text: "We've been buying fresh milk every day for 3 months. The quality is consistent and the cows are clearly well-cared-for. Highly recommend!", name: "Rajesh Sharma", location: "Nashik", stars: 5, color: "#fff8e1", emoji: "👨" },
    { text: "The cow dung diyas were perfect for Diwali. Eco-friendly, beautiful, and my family loved the traditional feel. Will order every year!", name: "Anita Desai", location: "Mumbai", stars: 5, color: "#fce4ec", emoji: "👩" },
    { text: "The organic manure transformed my terrace garden completely. Plants are healthier than ever! Great product at a very fair price.", name: "Suresh Patil", location: "Pune", stars: 5, color: "#e3f2fd", emoji: "👨" },
    { text: "Ordered havan cups for our weekly rituals. Pure cow dung, no smell, burns beautifully. Makes our puja so much more meaningful.", name: "Sunita Joshi", location: "Aurangabad", stars: 5, color: "#f3e5f5", emoji: "👩" },
    { text: "The bilona ghee is worth every rupee. Light, digestible, and you can literally taste the difference from market ghee.", name: "Amit Nair", location: "Kolhapur", stars: 5, color: "#e8f5e9", emoji: "👨" },
  ];

  const benefits = [
    { icon: "🌿", title: "100% Organic", desc: "No chemicals, pesticides, or artificial additives. Everything is grown and produced the natural way." },
    { icon: "🐄", title: "Desi Cow Breeds", desc: "We raise indigenous Gir cows whose A2 milk is scientifically proven to be healthier." },
    { icon: "♻️", title: "Eco-Friendly", desc: "Zero waste farm. Every part of the cow is utilized sustainably, respecting nature." },
    { icon: "🏡", title: "Farm-to-Door", desc: "No middlemen. Products go directly from our farm to your doorstep, fresh every time." },
    { icon: "🕉️", title: "Traditional Methods", desc: "Ancient Vedic practices like bilona ghee churning preserve the full nutritional value." },
    { icon: "💚", title: "Health Benefits", desc: "A2 milk, ghee, and organic products proven to boost immunity and overall wellbeing." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <div className="hero-text animate-in">
            <div className="hero-badge">
              🌿 Natural · Organic · Traditional
            </div>
            <h1 className="hero-title">
              From Our Farm<br />
              to Your <em>Home</em>
            </h1>
            <p className="hero-subtitle">
              100% Natural Cow-Based Products — A2 Ghee, Fresh Milk, Gomaya Products & Organic Manure straight from our desi cows in Pune.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-gold">Shop Products 🛍️</Link>
              <a href="https://wa.me/919999999999" className="btn-whatsapp" target="_blank" rel="noreferrer">
                💬 WhatsApp Us
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">5+</div>
                <div className="hero-stat-label">Desi Cows</div>
              </div>
              <div>
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">Organic</div>
              </div>
              <div>
                <div className="hero-stat-num">500+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div>
                <div className="hero-stat-num">0</div>
                <div className="hero-stat-label">Chemicals Used</div>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-in delay-3">
            <div className="hero-card featured">
              <div className="hero-card-icon">🧈</div>
              <div>
                <div className="hero-card-title">A2 Bilona Ghee</div>
                <div className="hero-card-desc">Our bestseller — pure, golden, and made with ancient Vedic bilona method from Gir cow milk.</div>
              </div>
            </div>
            <div className="hero-card-grid">
              <div className="hero-card">
                <div className="hero-card-icon">🥛</div>
                <div className="hero-card-title">Fresh Milk</div>
                <div className="hero-card-desc">Daily delivery, A2 protein, no preservatives</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-icon">🌱</div>
                <div className="hero-card-title">Organic Manure</div>
                <div className="hero-card-desc">Pure cow dung compost for your garden</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-icon">🪔</div>
                <div className="hero-card-title">Havan Cups</div>
                <div className="hero-card-desc">Eco-friendly puja essentials</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-icon">🐄</div>
                <div className="hero-card-title">Desi Cows</div>
                <div className="hero-card-desc">Gir breed, lovingly raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          {["🚚 Free delivery above ₹500", "🌿 100% Organic & Natural", "🐄 A2 Desi Cow Products", "📦 Fresh Daily Delivery", "💯 No Chemicals Ever", "📞 WhatsApp Support"].map((item, i) => (
            <div className="trust-item" key={i}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-collage">
              <div className="about-img-placeholder about-img-0">
                <div className="emoji">🐄</div>
                <p>Our Desi Gir Cows</p>
              </div>
              <div className="about-img-placeholder about-img-1">
                <div className="emoji">🌾</div>
                <p>Organic Farm</p>
              </div>
              <div className="about-img-placeholder about-img-2">
                <div className="emoji">🧈</div>
                <p>Making Ghee</p>
              </div>
            </div>
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Pure Products, Pure Intentions</h2>
              <div className="ornament"></div>
              <p className="section-sub">
                Mauli Farm was born from a simple belief — that the ancient wisdom of desi cows holds the key to good health, fertile soil, and spiritual wellbeing.
              </p>
              <div className="about-features">
                {[
                  { icon: "🐄", title: "Indigenous Gir Cows", desc: "Our A2 cows are raised with love and care, grazing freely on organic fodder." },
                  { icon: "🕉️", title: "Vedic Traditions", desc: "We follow ancient bilona method and traditional practices passed down for generations." },
                  { icon: "🌍", title: "Sustainable Farming", desc: "Zero-waste approach — milk, dung, urine — everything is used for maximum benefit." },
                ].map((f, i) => (
                  <div className="about-feature" key={i}>
                    <div className="about-feature-icon">{f.icon}</div>
                    <div className="about-feature-text">
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link to="/about" className="btn-primary">Read Our Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <div className="section-label">Our Products</div>
            <h2 className="section-title">Nature's Finest Offerings</h2>
            <div className="ornament"></div>
            <p className="section-sub">From sacred gomaya products to premium A2 ghee — everything pure, everything natural.</p>
          </div>

          <div className="products-tabs">
            {categories.map(cat => (
              <button key={cat.key} className={`tab-btn ${activeTab === cat.key ? "active" : ""}`} onClick={() => setActiveTab(cat.key)}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filtered.map((product, i) => (
              <div className="product-card" key={product.id} style={{ animationDelay: `${i * 0.07}s` }}>
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
                    <button className="add-cart-btn" onClick={() => onAddToCart(product)} title="Add to cart">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link to="/products" className="btn-primary">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-header">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">The Mauli Farm Difference</h2>
            <div className="ornament" style={{ margin: "20px auto", background: "linear-gradient(90deg, var(--gold), var(--amber))" }}></div>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-icon">{b.icon}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="ornament"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: t.color }}>{t.emoji}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-location">📍 {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "linear-gradient(135deg, var(--gold), var(--clay))", padding: "72px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", color: "white", marginBottom: "16px" }}>
            Ready to Experience Pure Nature?
          </h2>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "rgba(255,255,255,0.85)", marginBottom: "36px" }}>
            Order today and have farm-fresh goodness delivered to your door.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/products" className="btn-primary" style={{ background: "white", color: "var(--earth)" }}>
              Shop Now 🛍️
            </Link>
            <a href="https://wa.me/919999999999" className="btn-whatsapp" target="_blank" rel="noreferrer">
              💬 WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
