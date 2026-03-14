import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Mauli Farm!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterested in: ${form.product}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    { icon: "📍", title: "Our Location", value: "Pune, Maharashtra, India" },
    { icon: "📞", title: "Phone", value: "+91 99999 99999" },
    { icon: "✉️", title: "Email", value: "info@maulifarm.in" },
    { icon: "🕐", title: "Working Hours", value: "Mon–Sat: 8 AM – 7 PM" },
    { icon: "💬", title: "WhatsApp", value: "+91 99999 99999 (Fastest Response)" },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content container">
          <div className="section-label" style={{ justifyContent: "center" }}>Get in Touch</div>
          <h1>Contact Mauli Farm</h1>
          <p>We'd love to hear from you — for orders, enquiries, farm visits, or investment discussions</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section-label">Reach Us</div>
              <h2 className="section-title">Let's Talk</h2>
              <div className="ornament"></div>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", marginBottom: "36px" }}>
                Whether you want to place an order, visit our farm, discuss investment, or just ask a question — we're always happy to help.
              </p>

              <div className="contact-info">
                {contacts.map((c, i) => (
                  <div className="contact-item" key={i}>
                    <div className="contact-icon">{c.icon}</div>
                    <div>
                      <div className="contact-item-title">{c.title}</div>
                      <div className="contact-item-value">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "36px" }}>
                <a href="https://wa.me/919999999999" className="btn-whatsapp" target="_blank" rel="noreferrer">
                  💬 Chat on WhatsApp
                </a>
              </div>

              {/* Map placeholder */}
              <div className="map-placeholder" style={{ marginTop: "28px" }} onClick={() => window.open("https://maps.google.com/?q=Pune,Maharashtra", "_blank")}>
                <div className="emoji">🗺️</div>
                <span>Mauli Farm, Pune, Maharashtra</span>
                <span style={{ fontSize: "12px", opacity: 0.7 }}>Click to open in Google Maps</span>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send an Enquiry</h3>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                  <h4 style={{ color: "var(--leaf)", fontSize: "20px" }}>Message Sent!</h4>
                  <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>We'll respond on WhatsApp shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Patil" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="rahul@example.com" type="email" />
                  </div>
                  <div className="form-group">
                    <label>Interested In</label>
                    <select name="product" value={form.product} onChange={handleChange}>
                      <option value="">Select a product / service</option>
                      <option>A2 Bilona Ghee</option>
                      <option>Fresh Milk Subscription</option>
                      <option>Cow Dung Products</option>
                      <option>Organic Manure</option>
                      <option>Farm Visit</option>
                      <option>Investment Enquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you need..." />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>
                    Send via WhatsApp 💬
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
