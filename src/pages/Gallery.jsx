const galleryItems = [
  { emoji: "🐄", label: "Our Gir Cows", bg: "linear-gradient(135deg, #1a3a0a, #2d5016)", tall: true },
  { emoji: "🥛", label: "Morning Milking", bg: "linear-gradient(135deg, #4a7c2f, #7aad52)" },
  { emoji: "🧈", label: "Bilona Ghee Making", bg: "linear-gradient(135deg, #c8922a, #e8a93a)" },
  { emoji: "🌾", label: "Organic Fields", bg: "linear-gradient(135deg, #0f2206, #1a3a0a)" },
  { emoji: "🪔", label: "Cow Dung Diyas", bg: "linear-gradient(135deg, #c47a45, #e8a93a)", tall: true },
  { emoji: "🌱", label: "Composting", bg: "linear-gradient(135deg, #2d5016, #4a7c2f)" },
  { emoji: "👨‍🌾", label: "Our Team", bg: "linear-gradient(135deg, #7a5c3a, #c47a45)" },
  { emoji: "🏡", label: "Farm Shed", bg: "linear-gradient(135deg, #4a7c2f, #2d5016)" },
  { emoji: "🫙", label: "Packaging Products", bg: "linear-gradient(135deg, #c8922a, #7a5c3a)" },
  { emoji: "🐾", label: "Happy Calves", bg: "linear-gradient(135deg, #1a3a0a, #4a7c2f)", wide: true },
  { emoji: "🔥", label: "Havan Ceremony", bg: "linear-gradient(135deg, #c8922a, #c47a45)" },
  { emoji: "📦", label: "Ready to Ship", bg: "linear-gradient(135deg, #2d5016, #1a3a0a)" },
];

export default function Gallery() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content container">
          <div className="section-label" style={{ justifyContent: "center" }}>Farm Life</div>
          <h1>Our Farm Gallery</h1>
          <p>A peek into the daily life at Mauli Farm — where nature, tradition, and care meet</p>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "var(--parchment)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {galleryItems.map((item, i) => (
              <div key={i} style={{
                background: item.bg,
                borderRadius: "16px",
                minHeight: item.tall ? "320px" : item.wide ? "200px" : "200px",
                gridColumn: item.wide ? "span 2" : "span 1",
                gridRow: item.tall ? "span 2" : "span 1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: item.tall ? "72px" : "48px", marginBottom: "8px" }}>{item.emoji}</div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: "600" }}>{item.label}</div>
                {/* Hover overlay */}
                <div style={{ position: "absolute", inset: 0, background: "rgba(26,58,10,0.5)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                  <span style={{ color: "white", fontSize: "16px", fontWeight: "600" }}>View Photo</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--forest)", marginBottom: "12px" }}>
              Want to Visit Our Farm?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "28px" }}>
              We welcome visitors! Come see our cows and farm operations firsthand.
            </p>
            <a href="https://wa.me/919999999999?text=I%20would%20like%20to%20visit%20Mauli%20Farm" className="btn-whatsapp" target="_blank" rel="noreferrer">
              💬 Book a Farm Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
