import { useState } from "react";

const posts = [
  {
    id: 1,
    tag: "Organic Farming",
    title: "7 Incredible Benefits of Cow Dung for Your Garden",
    excerpt: "Discover why cow dung is considered nature's best fertilizer. From enriching soil microbes to improving water retention, the benefits are extraordinary.",
    emoji: "🌱",
    bg: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
    date: "15 Jan 2025",
    readTime: "5 min read",
    author: "Mauli Farm Team",
  },
  {
    id: 2,
    tag: "A2 Milk",
    title: "Why A2 Milk from Desi Cows is Superior to Regular Milk",
    excerpt: "The science behind A2 beta-casein protein and why it's easier to digest, more nutritious, and better for your family's health.",
    emoji: "🥛",
    bg: "linear-gradient(135deg, #fff8e1, #ffecb3)",
    date: "8 Jan 2025",
    readTime: "7 min read",
    author: "Mauli Farm Team",
  },
  {
    id: 3,
    tag: "Ghee & Nutrition",
    title: "Bilona Ghee vs Regular Ghee: What's the Real Difference?",
    excerpt: "Traditional bilona ghee made from cultured butter retains vital nutrients lost in industrial production. Here's everything you need to know.",
    emoji: "🧈",
    bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    date: "29 Dec 2024",
    readTime: "6 min read",
    author: "Mauli Farm Team",
  },
  {
    id: 4,
    tag: "Cow Products",
    title: "Panchagavya: The Ancient Superfood Formula from 5 Cow Products",
    excerpt: "Milk, curd, ghee, dung, and urine — when combined, these create a powerful traditional formula used for centuries in Indian Ayurveda.",
    emoji: "🕉️",
    bg: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
    date: "20 Dec 2024",
    readTime: "8 min read",
    author: "Mauli Farm Team",
  },
  {
    id: 5,
    tag: "Organic Living",
    title: "How to Start Your Kitchen Garden Using Organic Cow Manure",
    excerpt: "A step-by-step beginner's guide to creating a thriving kitchen garden using only natural cow dung compost and traditional methods.",
    emoji: "🌿",
    bg: "linear-gradient(135deg, #e8f5e9, #a5d6a7)",
    date: "10 Dec 2024",
    readTime: "9 min read",
    author: "Mauli Farm Team",
  },
  {
    id: 6,
    tag: "Festivals & Traditions",
    title: "Eco-Friendly Diwali: Using Cow Dung Diyas This Festive Season",
    excerpt: "Replace plastic diyas with beautiful, natural cow dung diyas this Diwali. Here's why it's better for you, your family, and the planet.",
    emoji: "🪔",
    bg: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
    date: "5 Nov 2024",
    readTime: "4 min read",
    author: "Mauli Farm Team",
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content container">
          <div className="section-label" style={{ justifyContent: "center" }}>Knowledge Hub</div>
          <h1>Blog & Articles</h1>
          <p>Learn about organic farming, A2 milk, cow products, and traditional wisdom from our farm</p>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "var(--cream)" }}>
        <div className="container">
          {/* Featured */}
          <div style={{ background: "white", borderRadius: "20px", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1.2fr", border: "1px solid var(--border)", marginBottom: "48px", boxShadow: "var(--shadow-md)" }}>
            <div style={{ background: featured.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "96px", minHeight: "280px" }}>
              {featured.emoji}
            </div>
            <div style={{ padding: "40px" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "var(--sage)", textTransform: "uppercase", marginBottom: "12px" }}>
                ⭐ Featured · {featured.tag}
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--forest)", marginBottom: "12px", lineHeight: "1.3" }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "13px", color: "var(--text-muted)" }}>
                <span>📅 {featured.date}</span>
                <span>⏱ {featured.readTime}</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {rest.map((post, i) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-img" style={{ background: post.bg }}>{post.emoji}</div>
                <div className="blog-body">
                  <div className="blog-tag">{post.tag}</div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ background: "linear-gradient(135deg, var(--forest), var(--leaf))", borderRadius: "20px", padding: "48px", marginTop: "60px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "white", marginBottom: "12px" }}>
              Get Farm Updates & Tips
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "28px" }}>
              Subscribe to our WhatsApp channel for product updates, farming tips, and seasonal offers.
            </p>
            <a href="https://wa.me/919021147485?text=Subscribe%20me%20to%20Mauli%20Farm%20updates" className="btn-whatsapp" target="_blank" rel="noreferrer">
              💬 Subscribe on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
