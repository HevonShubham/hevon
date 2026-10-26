"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShoppingBag, X, Plus, Minus, Check, Trash2, Menu } from 'lucide-react';
import { product, money } from '@/lib/store';
import Waitlist from './Waitlist';
import DiscoverHub from './DiscoverHub';
import Footer from './Footer';

const storageKey = 'hevon-cart-v1';
export default function Storefront() {
  const [quantity, setQuantity] = useState(0);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [checkoutError, setCheckoutError] = useState('');
  const [checkingOut, setCheckingOut] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const cartButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem(storageKey) || '0'); if (Number.isInteger(saved)) setQuantity(Math.max(0, Math.min(12, saved))); } catch { /* An unavailable browser store does not block shopping. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem(storageKey, JSON.stringify(quantity)); } catch { /* Cart stays available for this visit. */ } } }, [quantity, ready]);
  useEffect(() => {
    if (open) { dialog.current?.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = previous; }; }
    dialog.current?.close();
  }, [open]);
  async function checkout() {
    setCheckingOut(true); setCheckoutError('');
    try {
      const response = await fetch('/api/checkout', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({quantity})});
      const data = await response.json();
      if (!response.ok || !data.url) throw new Error(data.error || 'Checkout is unavailable. Please try again.');
      window.location.assign(data.url);
    } catch (error) { setCheckoutError(error instanceof Error ? error.message : 'Checkout is unavailable.'); setCheckingOut(false); }
  }
  function close() { setOpen(false); cartButton.current?.focus(); }
  function add() { setQuantity(q => Math.min(12, q + 1)); setNotice('Added to your launch cart. No payment or reservation.'); setOpen(true); }
  return <main className="storefront">
    <div className="store-announcement">THE NEXT EVERYDAY ESSENTIAL. <a href="#waitlist">Get on the list <ArrowRight size={13}/></a></div>
    <header className="store-header"><a href="#home" aria-label="HEVON home"><Image src="/logo/hevon-wordmark.svg" alt="HEVON" width={132} height={36} priority /></a><nav aria-label="Main navigation"><a href="#shop">Products</a><a href="#about">Our world</a><a href="#discover">Explore</a></nav><button className="store-menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button><button ref={cartButton} onClick={() => setOpen(true)} className="store-cart" aria-label={`Open cart, ${quantity} items`}><ShoppingBag size={20}/><span>Cart ({quantity})</span></button></header>{menuOpen && <nav className="store-mobile-menu" aria-label="Mobile navigation">{[["The first drop","#shop"],["Our world","#about"],["Explore & play","#discover"],["Good to know","#faq"],["Join the waitlist","#waitlist"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}<ArrowRight size={17}/></a>)}</nav>}
    <section id="home" className="store-hero"><div className="store-hero-copy"><p className="store-kicker">WELCOME TO THE WORLD OF HEVON</p><h1>Good days.<br/><em>Great sips.</em></h1><p className="store-intro">Meet PROFFEE. Coffee and protein, with a whole new everyday energy.</p><div className="store-actions"><a className="store-button" href="#shop">Meet the first drop <ArrowRight size={18}/></a><a className="store-text-link" href="#waitlist">Be first to know ↗</a></div><p className="store-small">{product.available ? 'The first drop is here. Delivery availability shown at checkout.' : 'Coming soon to India. Be there for the reveal.'}</p></div><div className="store-hero-art"><span className="store-orbit">MORE IN YOUR EVERYDAY</span><Image src={product.image} alt="HEVON PROFFEE bottle packaging concept" width={420} height={620} priority className="store-bottle"/><span className="store-art-label">FIRST LOOK / PACKAGING CONCEPT</span></div></section>
    <div className="store-ribbon" aria-label="Coffee, protein, ready to drink"><span>A LITTLE MORE.</span><span>EVERY DAY.</span><span>THAT’S HEVON.</span></div>
    <section id="shop" className="store-section"><div className="store-section-heading"><div><p className="store-kicker">THE FIRST DROP</p><h2>Small bottle.<br/>Big possibility.</h2></div><p>One bottle. A fresh possibility.<br/>The rest is worth the wait.</p></div><div className="store-product"><div className="store-product-art"><span className="store-badge">{product.available ? "THE FIRST DROP" : "COMING SOON"}</span><Image src={product.image} alt="PROFFEE Original packaging concept" width={260} height={390}/></div><div className="store-product-copy"><p className="store-kicker">HEVON PROFFEE</p><h3>{product.name}</h3><p className="store-description">A ready-to-drink blend of coffee and protein, made for your everyday.</p><p className="store-small">Illustrative packaging. Product details will be available at launch.</p><div className="store-price">{product.available && product.price ? money(product.price) : "Price revealed at launch"}</div><button className="store-button" onClick={add} disabled={quantity >= 12}>{quantity >= 12 ? 'Launch cart limit reached' : (product.available ? 'Add to cart' : 'Add to launch cart')} <Plus size={18}/></button><p className="store-small">{product.available ? "Shipping and final total shown at checkout." : "Save your interest. No payment, stock reservation or order is placed."}</p></div></div></section>
    <section id="about" className="store-about"><p className="store-kicker">THIS IS OUR WORLD</p><h2>Made for the<br/><em>everyday in you.</em></h2><div className="store-about-bottom"><p>For the early starts. The in-between moments. The plans that become your day. HEVON brings taste, protein and convenience into one simple idea.</p><span>LESS FUSS.<br/>MORE POSSIBILITY.</span></div></section>
    <section id="faq" className="store-section store-faq"><div><p className="store-kicker">03 / GOOD TO KNOW</p><h2>A little curiosity<br/>looks good on you.</h2></div><div>{[
      ['Can I buy HEVON now?', 'Not just yet. Join the waitlist for the launch announcement. Your launch cart saves your selection on this browser; it is not a pre-order.'],
      ['What’s in the first drop?', 'Meet PROFFEE Original—coffee and protein in one convenient drink. Full product details will be revealed at launch.'],
      ['Where will you deliver?', 'HEVON is coming to India. Join the waitlist with your city to hear about availability.'],
    ].map(([q,a]) => <details key={q}><summary>{q}<Plus size={17}/></summary><p>{a}</p></details>)}</div></section>
    <DiscoverHub/><Waitlist/><Footer/>
    <p className="sr-only" aria-live="polite">{notice}</p>
    <dialog ref={dialog} aria-labelledby="cart-title" className="store-dialog" onCancel={(e) => { e.preventDefault(); close(); }} onClick={e => { if(e.target === dialog.current) close(); }}><div className="store-drawer"><div className="store-drawer-head"><h2 id="cart-title">{product.available ? "Your cart" : "Your launch cart"}</h2><button aria-label="Close cart" onClick={close}><X/></button></div>{quantity ? <><div className="store-cart-item"><Image src={product.image} alt="PROFFEE Original concept" width={80} height={120}/><div><h3>{product.name}</h3><p>250 ml{!product.available && " · Coming soon"}</p><strong>{product.available && product.price ? money(product.price) : "Price at launch"}</strong><div className="store-quantity"><button aria-label="Decrease quantity" onClick={() => setQuantity(q => Math.max(0,q-1))}><Minus size={15}/></button><output aria-label="Quantity">{quantity}</output><button aria-label="Increase quantity" disabled={quantity >= 12} onClick={() => setQuantity(q => Math.min(12,q+1))}><Plus size={15}/></button><button aria-label="Remove product" onClick={() => setQuantity(0)}><Trash2 size={16}/></button></div></div></div><div className="store-cart-note"><Check size={18}/><p>Saved on this browser. No payment taken and no stock reserved.</p></div><div className="store-cart-total"><span>Total</span><strong>{product.available && product.price ? money(product.price * quantity) : "Available at launch"}</strong></div><button className="store-button" disabled={!product.available || checkingOut} onClick={checkout}>{checkingOut ? "Opening secure checkout…" : product.available ? "Continue to checkout" : "Checkout opens at launch"}</button>{checkoutError && <p role="alert">{checkoutError}</p>}<a className="store-button store-button-light" href="#waitlist" onClick={close}>Notify me when it drops <ArrowRight size={17}/></a></> : <div className="store-empty"><ShoppingBag size={44}/><h3>A little room for more.</h3><p>Your cart is empty. Discover what’s coming.</p><a className="store-button" href="#shop" onClick={close}>Explore the first drop</a></div>}<p className="store-small">Adding an item does not join the waitlist. Sign up below for launch updates.</p></div></dialog>
  </main>;
}
