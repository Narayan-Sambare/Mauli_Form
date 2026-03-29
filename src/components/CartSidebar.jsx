export default function CartSidebar({ isOpen, onClose, cart, onUpdateQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    const msg = cart.map(i => `${i.name} x${i.qty} = ₹${i.price * i.qty}`).join("\n");
    const fullMsg = `Hello Mauli Farm! I'd like to order:\n\n${msg}\n\nTotal: ₹${total}`;
    window.open(`https://wa.me/919021147485?text=${encodeURIComponent(fullMsg)}`, "_blank");
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? "open" : ""}`} onClick={onClose} />
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart 🛒</h3>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="emoji">🛒</div>
              <p>Your cart is empty</p>
              <p style={{ fontSize: "13px", marginTop: "8px", color: "#999" }}>Add some products!</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className={`cart-item-img ${item.imgClass}`} style={{ fontSize: "28px" }}>
                  {item.emoji}
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price} / {item.unit}</div>
                </div>
                <div className="cart-qty-ctrl">
                  <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
                  <span className="qty-val">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Order via WhatsApp 💬
            </button>
          </div>
        )}
      </div>
    </>
  );
}
