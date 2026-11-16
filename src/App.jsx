import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Check, Clock3, MapPin, Menu,
  MessageCircle, Phone, Search, Send, ShieldCheck, Sparkles,
  Sun, Moon, Wrench, X, Zap,
} from 'lucide-react';
import { bringList, gallery, jobs, products, services } from './data';

const PHONE = '7036859233';
const PHONE_PRETTY = '70368 59233';
const WA = `https://wa.me/91${PHONE}`;
const MAP = 'https://www.google.com/maps/place/CHANDU+MOBILE+CARE/@17.688256,83.096552,17z/data=!3m1!4b1!4m6!3m5!1s0x3a396e34eb186ff5:0xcc98618f7e8a4306!8m2!3d17.688256!4d83.096552';
const MAP_EMBED = 'https://maps.google.com/maps?q=17.688256,83.096552&z=17&hl=en&output=embed';
const ADDRESS = '8-82, Sabbavaram Road, Lankelapalem, Visakhapatnam, Andhra Pradesh 531019';

function BrandMark({ id }) {
  const gid = `cmc-grad-${id}`;
  return (
    <svg className="brand-svg" viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="6" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9ec0ff" />
          <stop offset="0.45" stopColor="#5d7dff" />
          <stop offset="1" stopColor="#6b4de3" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill={`url(#${gid})`} />
      <rect x="16.2" y="7.5" width="15.6" height="33" rx="4.2" fill="#0c1224" stroke="#fff" strokeWidth="1.7" />
      <path d="M19.4 22.2h2.8l1.3-3.1 2.1 6.2 1.4-3.1h3" fill="none" stroke="#7de8f2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="36.2" r="1.15" fill="#7de8f2" />
      <path d="M33.2 9.6l4.4 1.5v3.4c0 2.3-1.7 4.2-4.4 5-2.7-.8-4.4-2.7-4.4-5V11.1z" fill="#e7fff8" />
      <path d="M31.2 14.2l1.2 1.2 2.5-2.6" fill="none" stroke="#1d3b66" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Brand({ id }) {
  return (
    <a className="brand" href="#home" aria-label="Chandu Mobile Care home">
      <BrandMark id={id} />
      <span className="brand-copy"><b>CHANDU <em>MOBILE CARE</em></b><small>YOUR MOBILE. OUR CARE.</small></span>
    </a>
  );
}

function WhatsAppLink({ children, message, className = '', ...props }) {
  const href = `${WA}?text=${encodeURIComponent(message || 'Hi Chandu Mobile Care, I would like to enquire.')}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>;
}

function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.25 });
  const links = [['Home', '#home'], ['Products', '#products'], ['Services', '#services'], ['Examples', '#examples'], ['Gallery', '#gallery'], ['Contact', '#contact']];
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Brand id="nav" />
        <nav id="primary-navigation" className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-phone" href={`tel:+91${PHONE}`}><Phone size={15} /> {PHONE_PRETTY}</a>
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <WhatsAppLink className="btn btn-small btn-primary" message="Hi Chandu Mobile Care, I would like to enquire."><MessageCircle size={16} /> Chat now</WhatsAppLink>
        </div>
        <button className="theme-toggle mobile-theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
        <button className="menu-btn" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
      </div>
      <motion.div className="scroll-progress" aria-hidden="true" style={{ scaleX: reduceMotion ? scrollYProgress : scrollProgress }} />
    </header>
  );
}

function SectionHeading({ eyebrow, title, desc, center = false }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={`section-heading ${center ? 'center' : ''}`} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <span className="eyebrow"><i /> {eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </motion.div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('cmc-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return 'dark';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#080b14' : '#f5f7fb';
    try { localStorage.setItem('cmc-theme', theme); } catch {}
  }, [theme]);
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('All');
  const [device, setDevice] = useState('');
  const [issue, setIssue] = useState('Display / touch issue');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const filters = ['All', 'Mobiles', 'Accessories', 'Spare parts'];
  const filtered = products.filter((p) => {
    const blob = [p.name, p.detail, p.tag, ...p.examples.flatMap((e) => [e.name, e.spec])].join(' ').toLowerCase();
    const matchesGroup = group === 'All' || p.group === group;
    return matchesGroup && blob.includes(query.trim().toLowerCase());
  });
  const submitRepair = (e) => {
    e.preventDefault();
    const msg = `Hi Chandu Mobile Care, I need a repair enquiry.%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0ADevice: ${encodeURIComponent(device)}%0AIssue: ${encodeURIComponent(issue)}`;
    window.open(`${WA}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <section className="hero" id="home">
          <div className="container hero-layout">
            <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="hero-kicker"><span className="pulse" /> Cell phone store in Lankelapalem</p>
              <h1>Phones, accessories and repairs. <span>On Sabbavaram Road.</span></h1>
              <p className="hero-desc">Chandu Mobile Care is the shop with the blue and red board. Buy a Samsung, vivo, OPPO, Redmi, realme, OnePlus or iPhone, pick up a case and charger, or get the phone you already own repaired.</p>
              <ul className="hero-points">
                <li><Phone size={16} /> New and pre-owned phones</li>
                <li><ShieldCheck size={16} /> Glass, cases and chargers fitted here</li>
                <li><Wrench size={16} /> Screen, battery and charging repairs</li>
              </ul>
              <div className="hero-buttons">
                <a className="btn btn-primary" href={`tel:+91${PHONE}`}><Phone size={17} /> Call {PHONE_PRETTY}</a>
                <WhatsAppLink className="btn btn-outline" message="Hi Chandu Mobile Care, I would like to know what is available today."><MessageCircle size={17} /> WhatsApp</WhatsAppLink>
                <a className="btn btn-outline" href="#products">See models <ArrowUpRight size={17} /></a>
              </div>
              <a className="hero-address" href={MAP} target="_blank" rel="noreferrer">
                <span className="hero-pin"><MapPin size={18} /></span>
                <span><b>8-82, Sabbavaram Road</b><small>Lankelapalem, Visakhapatnam 531019 · Open directions</small></span>
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
            <motion.figure className="hero-shop" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <img src="/images/shop-front.jpg" alt="Chandu Mobile Care storefront on Sabbavaram Road, next to Ayappa Kirana" />
              <figcaption>
                <b>Chandu Mobile Care</b>
                <span>Look for the board beside Ayappa Kirana</span>
              </figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="brand-strip">
          <div className="container brand-strip-inner">
            <span>BRANDS WE SELL AND SERVICE</span>
            <div className="brand-names"><b>Apple</b><b>Samsung</b><b>vivo</b><b>OPPO</b><b>OnePlus</b><b>Redmi</b><b>realme</b></div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="catalogue-heading">
              <SectionHeading eyebrow="SHOP WITH REAL EXAMPLES" title={<>Find the right fit for <span>your phone.</span></>} desc="Browse popular mobiles, accessories and repair parts. Search by model or category, then message us to check today’s availability and price." />
              <div className="catalogue-help">
                <span className="catalogue-help-icon"><MessageCircle size={19} /></span>
                <div><b>Need help choosing?</b><small>Send us your phone model. We’ll help match the right option.</small></div>
                <WhatsAppLink className="btn btn-outline btn-small" message="Hi Chandu Mobile Care, I need help choosing a mobile or accessory for my phone.">Ask us <ArrowUpRight size={14} /></WhatsAppLink>
              </div>
            </div>
            <div className="catalogue-controls">
              <div className="search-box"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search A55, iPhone 13, charger…" aria-label="Search models and accessories" /></div>
              <div className="filter-row" aria-label="Filter product groups">
                {filters.map((item) => (
                  <button key={item} type="button" aria-pressed={group === item} className={group === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setGroup(item)}>{item}</button>
                ))}
              </div>
              <span className="catalogue-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'category' : 'categories'}</span>
            </div>
            <div className="product-grid">
              {filtered.map((p, i) => (
                <motion.article className="product-card" key={p.name} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="product-image">
                    <img src={p.image} alt={p.name} />
                    <span className="product-tag">{p.tag}</span>
                    <span className="product-icon"><p.icon size={19} /></span>
                  </div>
                  <div className="product-info">
                    <h3>{p.name}</h3>
                    <p>{p.detail}</p>
                    <ul className="example-list">
                      {p.examples.slice(0, 3).map((ex) => (
                        <li key={ex.name}><b>{ex.name}</b><span>{ex.spec}</span></li>
                      ))}
                    </ul>
                    {p.examples.length > 3 && <details className="more-examples"><summary>See {p.examples.length - 3} more examples</summary><ul className="example-list">{p.examples.slice(3).map((ex) => <li key={ex.name}><b>{ex.name}</b><span>{ex.spec}</span></li>)}</ul></details>}
                    <WhatsAppLink className="text-link" message={`Hi Chandu Mobile Care, I am interested in ${p.name}. Please share what is available and today’s price. Examples I saw: ${p.examples.map((ex) => ex.name).join(', ')}.`}>Ask about these <ArrowUpRight size={16} /></WhatsAppLink>
                  </div>
                </motion.article>
              ))}
            </div>
            {filtered.length === 0 && <p className="empty-state">Nothing matches that search. Try “A55”, “iPhone”, “charger”, “display” or “earbuds”.</p>}
            <div className="catalogue-note">
              <span><Sparkles size={18} /></span>
              <div><b>Photos show real phones and accessories of this kind.</b><small>They are not a live shelf photo. Send the model if you need to know what is in the shop right now.</small></div>
              <WhatsAppLink className="btn btn-outline btn-small" message="Hi, please share today’s available mobiles and accessory offers.">Check today’s stock <ArrowRight size={15} /></WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <SectionHeading eyebrow="IN THE SHOP" title={<>Phones and add-ons <span>up close.</span></>} desc="A closer look at the devices, earbuds, chargers and older models we handle every day." />
            <div className="gallery-grid">
              {gallery.map((item, i) => (
                <motion.figure className="gallery-card" key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}>
                  <img src={item.src} alt={item.title} />
                  <figcaption><b>{item.title}</b><span>{item.caption}</span></figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="services-layout">
              <div className="services-intro">
                <SectionHeading eyebrow="REPAIR & SUPPORT" title={<>A little care goes a <span>long way.</span></>} desc="Tell us the symptom in plain words. These are the checks we start with, before anyone buys a part." />
                <div className="service-callout">
                  <div className="callout-icon"><Wrench size={22} /></div>
                  <div><b>Not sure what the issue is?</b><p>Describe what the phone does, and send a photo.</p></div>
                  <WhatsAppLink message="Hi, I need help diagnosing an issue with my mobile phone."><ArrowUpRight size={19} /></WhatsAppLink>
                </div>
                <ul className="bring-list">
                  {bringList.map(([title, text]) => (
                    <li key={title}><Check size={14} /><div><b>{title}</b><span>{text}</span></div></li>
                  ))}
                </ul>
              </div>
              <div className="service-grid">
                {services.map((s, i) => (
                  <motion.div className="service-item" key={s.title} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <div className="service-top"><div className="service-icon"><s.icon size={21} /></div><span className="service-number">0{i + 1}</span></div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul>{s.examples.map((ex) => <li key={ex}>{ex}</li>)}</ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section examples-section" id="examples">
          <div className="container">
            <SectionHeading eyebrow="EXAMPLE JOBS" title={<>How a real enquiry <span>usually goes.</span></>} desc="Six situations we see often. Your phone may differ — the steps show what we check before quoting." center />
            <div className="job-grid">
              {jobs.map((job, i) => (
                <motion.article className="job-card" key={job.device} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}>
                  <span className="job-index">Example 0{i + 1}</span>
                  <h3>{job.device}</h3>
                  <p className="job-issue">{job.issue}</p>
                  <p>{job.story}</p>
                  <ol>{job.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                  <WhatsAppLink className="text-link" message={`Hi Chandu Mobile Care, my case is similar to this example: ${job.device} — ${job.issue}. Please guide me.`}>Enquire about a similar issue <ArrowUpRight size={16} /></WhatsAppLink>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="repair-band">
          <div className="container repair-inner">
            <div>
              <span className="eyebrow"><i /> QUICK REPAIR ENQUIRY</span>
              <h2>Let’s get your phone<br /><span>back in action.</span></h2>
              <p>Share your device and the issue. Your enquiry opens in WhatsApp with the details filled in. A useful device line looks like “Samsung Galaxy A35 5G” or “iPhone 13 128 GB”.</p>
            </div>
            <form className="repair-form" onSubmit={submitRepair}>
              <div className="form-title"><Wrench size={19} /><b>Tell us what you need</b></div>
              <label>Your name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /></label>
              <div className="form-row">
                <label>Phone model<input required value={device} onChange={(e) => setDevice(e.target.value)} placeholder="e.g. Samsung Galaxy A35" /></label>
                <label>Issue
                  <select value={issue} onChange={(e) => setIssue(e.target.value)}>
                    <option>Display / touch issue</option>
                    <option>Battery / charging issue</option>
                    <option>Speaker / microphone issue</option>
                    <option>Software problem</option>
                    <option>Camera / hardware issue</option>
                    <option>Water damage</option>
                    <option>Other issue</option>
                  </select>
                </label>
              </div>
              <label>Contact number<input required type="tel" pattern="[0-9+ ]{10,15}" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Your mobile number" /></label>
              <button className="btn btn-primary form-submit" type="submit">Send repair enquiry <Send size={16} /></button>
              <small className="form-privacy">This form opens WhatsApp with your details. It does not store your information on this website.</small>
            </form>
          </div>
        </section>

        <section className="section why-section" id="why-us">
          <div className="container">
            <SectionHeading eyebrow="THE CHANDU DIFFERENCE" title={<>Your neighbourhood <span>mobile partner.</span></>} desc="A local counter for choosing a phone, matching an accessory, or deciding whether a repair is worth it." center />
            <div className="why-grid">
              <motion.div className="why-card" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}><div className="why-icon"><ShieldCheck /></div><h3>Guidance before you pay</h3><p>We explain glass-only versus a full display, and a new phone versus a battery change, before you commit.</p></motion.div>
              <motion.div className="why-card" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}><div className="why-icon"><Zap /></div><h3>Phone and extras together</h3><p>A typical bundle is the handset, tempered glass, a case and the right watt charger — priced in one conversation.</p></motion.div>
              <motion.div className="why-card" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }}><div className="why-icon"><MapPin /></div><h3>Local & accessible</h3><p>The shop is at {ADDRESS}. Call {PHONE_PRETTY} or open the Google pin for directions.</p></motion.div>
            </div>
          </div>
        </section>

        <section className="offer-section">
          <div className="container offer-card">
            <div className="offer-pattern" />
            <div className="offer-content">
              <span className="offer-kicker"><Sparkles size={15} /> SHOP UPDATE</span>
              <h2>Build a small bundle<br />around the phone.</h2>
              <p>Example: Galaxy A35 or vivo Y28, plus 9H glass, a matte case and a 25W or 33W charger. Message us and we will price what is actually on the shelf today.</p>
              <WhatsAppLink className="btn btn-light" message="Hi Chandu Mobile Care, please share a bundle price for a phone, tempered glass, case and charger.">Price a bundle <ArrowUpRight size={17} /></WhatsAppLink>
            </div>
            <div className="offer-art">
              <div className="offer-circle circle-one" /><div className="offer-circle circle-two" />
              <img src="/images/store-phones.jpg" alt="Person holding a smartphone with the camera open" />
              <div className="offer-sticker">ASK<br /><b>TODAY</b></div>
            </div>
          </div>
        </section>

        <section className="section reviews-section">
          <div className="container reviews-layout">
            <div>
              <SectionHeading eyebrow="A BETTER SHOPPING EXPERIENCE" title={<>Good service starts with <span>you.</span></>} desc="We want every customer to feel informed, welcomed and supported. Have visited us? Share your feedback with the shop." />
              <WhatsAppLink className="text-link" message="Hi Chandu Mobile Care, I would like to share feedback about my experience.">Share your feedback <ArrowUpRight size={16} /></WhatsAppLink>
            </div>
            <div className="review-feature">
              <div className="review-prompt"><MessageCircle size={16} /><span>YOUR VOICE MATTERS</span></div>
              <h3>Visited Chandu Mobile Care?</h3>
              <p>Your genuine feedback helps local customers discover the shop and helps us serve you better.</p>
              <WhatsAppLink className="btn btn-outline" message="Hi Chandu Mobile Care, I would like to share my feedback.">Send feedback <MessageCircle size={16} /></WhatsAppLink>
              <small>Customer feedback is collected directly. No sample reviews or ratings are displayed.</small>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-heading">
              <SectionHeading eyebrow="COME SAY HELLO" title={<>Let’s connect. <span>We’re nearby.</span></>} desc="Have a question, need a repair or want to check a product? Reach out to us." />
            </div>
            <div className="contact-grid">
              <div className="contact-details">
                <a className="contact-item" href={`tel:+91${PHONE}`}><span><Phone /></span><div><small>CALL THE SHOP</small><b>+91 {PHONE_PRETTY}</b><em>Tap to call</em></div><ArrowUpRight /></a>
                <a className="contact-item" href={WA} target="_blank" rel="noreferrer"><span className="whatsapp-icon"><MessageCircle /></span><div><small>WHATSAPP ENQUIRIES</small><b>+91 {PHONE_PRETTY}</b><em>Chat with us</em></div><ArrowUpRight /></a>
                <a className="contact-item" href={MAP} target="_blank" rel="noreferrer"><span><MapPin /></span><div><small>VISIT OUR SHOP</small><b>{ADDRESS}</b><em>Open the Google pin for directions</em></div><ArrowUpRight /></a>
                <div className="hours-note"><Clock3 size={18} /><span><b>Shop timings</b><small>Please call to confirm today’s opening hours.</small></span></div>
              </div>
              <div className="map-card">
                <div className="map-overlay">
                  <span className="map-pin"><MapPin size={22} /></span>
                  <div><b>Chandu Mobile Care</b><small>{ADDRESS}</small></div>
                  <a href={MAP} target="_blank" rel="noreferrer" aria-label="Open Google Maps"><ArrowUpRight /></a>
                </div>
                <iframe title="Map of Chandu Mobile Care on Sabbavaram Road" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <Brand id="footer" />
            <p>Mobiles, accessories, spare parts<br />and repair support — all in one place.</p>
            <WhatsAppLink className="footer-chat" message="Hi Chandu Mobile Care!"><MessageCircle size={17} /> Start a conversation</WhatsAppLink>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Chandu Mobile Care. All rights reserved.</span>
            <span>Made for your everyday mobile needs <span className="heart">♥</span></span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
      <WhatsAppLink className="floating-wa" message="Hi Chandu Mobile Care, I would like to enquire." aria-label="Chat with Chandu Mobile Care on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></WhatsAppLink>
    </>
  );
}

export default App;
