"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { imgSrc } from "@/lib/asset";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, clearCart } = useCart();
  const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const handleCheckout = () => {
    setChecked(true);
    setTimeout(() => setChecked(false), 3000);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e0e0dc]">
          <div>
            <h2 className="font-black text-base uppercase tracking-widest">Your Cart</h2>
            {items.length > 0 && (
              <p className="text-[0.65rem] text-[#888] mt-0.5">{items.length} item{items.length !== 1 ? "s" : ""}</p>
            )}
          </div>
          <button onClick={closeCart} className="text-[#888] hover:text-[#0a0a0a] transition-colors p-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="2" y1="2" x2="16" y2="16" /><line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p className="text-[#888] text-sm">Your cart is empty.</p>
              <button onClick={closeCart} className="text-[0.7rem] font-bold uppercase tracking-widest border-b border-[#0a0a0a] pb-0.5 hover:text-[#c5a028] hover:border-[#c5a028] transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 pb-5 border-b border-[#f0f0ee]">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#f5f5f3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgSrc(`/images/${item.imageFile}`)}
                      alt={item.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold leading-tight line-clamp-2">{item.name}</p>
                    <p className="text-[#888] text-xs mt-0.5">€ {item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 border border-[#e0e0dc] flex items-center justify-center text-sm hover:border-[#0a0a0a] transition-colors"
                      >−</button>
                      <span className="text-sm font-medium w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 border border-[#e0e0dc] flex items-center justify-center text-sm hover:border-[#0a0a0a] transition-colors"
                      >+</button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-2 text-[0.6rem] text-[#bbb] hover:text-[#cc2200] uppercase tracking-widest transition-colors"
                      >Remove</button>
                    </div>
                  </div>
                  <p className="text-sm font-black flex-shrink-0">€ {(item.price * item.qty).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#e0e0dc] px-6 py-5 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#888] uppercase tracking-widest">Subtotal</span>
              <span className="font-black text-lg">€ {total().toFixed(2)}</span>
            </div>
            {checked ? (
              <div className="bg-[#f5f5f3] border border-[#e0e0dc] px-4 py-3 text-center">
                <p className="text-[0.75rem] text-[#555] leading-snug">
                  Orders are processed at the museum information desk.<br />
                  Please present this cart to a member of staff.
                </p>
              </div>
            ) : (
              <button
                onClick={handleCheckout}
                className="w-full bg-[#0a0a0a] text-white text-[0.72rem] font-bold uppercase tracking-widest py-3 hover:bg-[#c5a028] transition-colors"
              >
                Checkout
              </button>
            )}
            <button
              onClick={clearCart}
              className="w-full text-[0.65rem] text-[#bbb] uppercase tracking-widest hover:text-[#cc2200] transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
