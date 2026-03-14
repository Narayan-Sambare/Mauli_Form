import { Link } from "react-router-dom";

export default function About() {
  const timeline = [
    { year: "Year 1", icon: "🌱", title: "5 Cows, Local Start", desc: "Begin with 5 desi Gir cows. Sell cow dung products, fresh milk, and ghee locally in Pune. Build trust and a loyal customer base." },
    { year: "Year 3", icon: "🐄", title: "20 Cows, Expanding", desc: "Scale the herd to 20 cows. Launch online delivery for milk and ghee. Begin branding and packaging for wider reach." },
    { year: "Year 5", icon: "🌍", title: "All-India Online Brand", desc: "Mauli Farm becomes a recognized national brand. Ship across India via courier. Expand product line with panchagavya products." },
  ];

  const values = [
    { emoji: "🐄", title: "Cow Welfare First", desc: "Our cows are family. They graze freely, eat organic fodder, and are never stressed. Happy cows give the purest products." },
    { emoji: "🕉️", title: "Vedic Wisdom", desc: "Ancient Indian farming and Ayurvedic practices form the backbone of everything we do at Mauli Farm." },
    { emoji: "♻️", title: "Zero Waste", desc: "Milk → ghee, curd. Dung → cakes, manure, diyas. Urine → Ark (medicinal). Every part has purpose." },
    { emoji: "🌿", title: "No Chemicals", desc: "We have never and will never use chemicals, hormones, or artificial feeds. Nature's way, always." },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content container">
          <div className="section-label" style={{ justifyContent: "center" }}>Our Story</div>
          <h1>About Mauli Farm</h1>
          <p>A family's dedication to reviving the sacred bond between humans and desi cows</p>
        </div>
      </div>

      {/* STORY */}
      <section style={{ padding: "100px 0", background: "var(--milk)" }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">Born from Love for Desi Cows</h2>
              <div className="ornament"></div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "20px" }}>
                Mauli Farm started as a dream — to bring back the purity of traditional cow-based living in modern homes. We saw people consuming processed dairy loaded with hormones and chemicals, and we knew there had to be a better way.
              </p>
              <p style={{ fontSize: "15px", color: "var(--text-body)", lineHeight: "1.8", marginBottom: "20px" }}>
                We started with just 2 desi Gir cows on our small farm in Pune. Today, we have 5 cows and are growing steadily. Our mission is simple: provide the purest, most nutritious cow-based products to families across India.
              </p>
              <p style={{ fontSize: "15px", color: "var(--text-body)", lineHeight: "1.8" }}>
                Every product at Mauli Farm is made with respect — for the cow, for the environment, and for the customer who trusts us with their family's health.
              </p>
              <div style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link to="/products" className="btn-primary">Shop Our Products</Link>
                <Link to="/contact" className="btn-secondary">Get in Touch</Link>
              </div>
            </div>
            <div className="about-image-collage">
              <div className="about-img-placeholder about-img-0">
                <div className="emoji">🐄</div>
                <p>Our Beloved Gir Cows</p>
              </div>
              <div className="about-img-placeholder about-img-1">
                <div className="emoji">🌾</div>
                <p>Organic Farm Fields</p>
              </div>
              <div className="about-img-placeholder about-img-2">
                <div className="emoji">👨‍🌾</div>
                <p>Our Family Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Our Values</div>
            <h2 className="section-title">What We Stand For</h2>
            <div className="ornament" style={{ margin: "20px auto" }}></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "28px" }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "32px", border: "1px solid var(--border)", transition: "var(--transition)" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>{v.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--forest)", marginBottom: "10px" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.65" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION TIMELINE */}
      <section className="vision-section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <div className="section-label">Future Vision</div>
              <h2 className="section-title">Our Growth Roadmap</h2>
              <div className="ornament"></div>
              <p className="section-sub" style={{ marginBottom: "40px" }}>
                We're building Mauli Farm to be India's most trusted cow-based natural products brand — one honest product at a time.
              </p>
              <div className="vision-timeline">
                {timeline.map((t, i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-dot">{t.icon}</div>
                    <div className="timeline-year">{t.year}</div>
                    <h3>{t.title}</h3>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* INVESTOR SECTION */}
            <div style={{ background: "var(--forest)", borderRadius: "24px", padding: "40px" }}>
              <div style={{ marginBottom: "32px" }}>
                <div className="section-label" style={{ color: "var(--mint)" }}>
                  <span style={{ background: "var(--mint)" }} className="section-label-line"></span>
                  For Investors
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "white", marginBottom: "12px" }}>Investment Overview</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: "1.7" }}>
                  Mauli Farm is a high-potential agri-business in India's booming organic products market, estimated to reach ₹75,000 Cr by 2025.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                {[
                  { label: "Cows", cost: "₹1–2 Lakh", icon: "🐄" },
                  { label: "Farm Shed", cost: "₹1 Lakh", icon: "🏡" },
                  { label: "Feed & Care", cost: "₹50,000", icon: "🌾" },
                  { label: "Website & App", cost: "₹20,000", icon: "💻" },
                  { label: "Packaging", cost: "₹30,000", icon: "📦" },
                  { label: "Total", cost: "₹3–4 Lakh", icon: "💰" },
                ].map((item, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ fontSize: "24px", marginBottom: "6px" }}>{item.icon}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>{item.label}</div>
                    <div style={{ fontSize: "16px", fontWeight: "700", color: "var(--amber)" }}>{item.cost}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(200,146,42,0.15)", border: "1px solid rgba(200,146,42,0.3)", borderRadius: "12px", padding: "20px" }}>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.65" }}>
                  📈 <strong style={{ color: "white" }}>Revenue Streams:</strong> Cow dung products, A2 dairy, bilona ghee, online sales, subscription model
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <a href="mailto:invest@maulifarm.in" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  📩 Enquire About Investment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
