# 🐄 Mauli Farm – Website

> Pure Cow-Based Natural Products | Pune, Maharashtra

## 📦 Tech Stack
- **Frontend**: React 18 + React Router v6
- **Styling**: Pure CSS with CSS Variables (no frameworks)
- **Deployment**: Vercel / Netlify / Hostinger

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm start

# Build for production
npm run build
```

---

## 🌐 Deploy to Vercel (Free)

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your GitHub repo
4. Vercel auto-detects React — click **Deploy**
5. Done! Your site is live at `yourproject.vercel.app`

**Custom domain** (e.g. maulifarm.in): Add it in Vercel → Project Settings → Domains

---

## 🌐 Deploy to Netlify (Free)

```bash
npm run build
# Drag the /build folder to netlify.com/drop
```

---

## 📱 Pages

| Route | Page |
|-------|------|
| `/` | Home (Hero, Products preview, Testimonials) |
| `/about` | About Us, Vision, Investor Section |
| `/products` | All Products with Cart |
| `/gallery` | Farm Photo Gallery |
| `/blog` | Blog & Articles |
| `/contact` | Contact Form (WhatsApp integrated) |

---

## 🛒 Cart & Orders

Cart → WhatsApp Order flow is integrated.
When a customer adds items and clicks "Order via WhatsApp", a pre-filled WhatsApp message is sent to your number.

**Update your WhatsApp number** in:
- `src/components/CartSidebar.jsx` → line with `wa.me/919999999999`
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`
- `src/App.js` (floating button)

---

## 💳 Razorpay Integration (Future)

To add online payment:
1. Sign up at razorpay.com
2. Add Razorpay script to `public/index.html`
3. Replace WhatsApp checkout with Razorpay payment handler

---

## 🔧 Customization

- **Phone/WhatsApp**: Replace `919999999999` with your number
- **Email**: Replace `info@maulifarm.in`
- **Location**: Update map link in Contact page
- **Products**: Edit `src/data/products.js`
- **Colors**: Edit CSS variables in `src/index.css` (`:root`)

---

## 📊 SEO

Update meta tags in `public/index.html`:
- Title, description, og:image
- Add your actual farm photos

---

## 🗂️ Project Structure

```
mauli-farm/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CartSidebar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Gallery.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── vercel.json
└── package.json
```

---

Made with 🌿 for Mauli Farm, Pune
