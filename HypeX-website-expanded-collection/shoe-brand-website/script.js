
/* Smoky hero headline — based on the supplied smoky-text animation. */
function initSmokyHero(){
  const hero=document.getElementById("heroSmokyText");
  if(!hero || hero.dataset.smokeReady) return;
  hero.dataset.smokeReady="true";
  let index=0;
  hero.querySelectorAll(".smoke-line").forEach(line=>{
    const text=line.textContent; const accent=line.classList.contains("smoke-accent"); line.textContent="";
    [...text].forEach(char=>{
      if(char===" "){const space=document.createElement("span");space.style.display="inline-block";space.innerHTML="&nbsp;";line.appendChild(space);index++;return;}
      const span=document.createElement("span");span.className="smoke-char smoking"+(accent?" accent":"");span.textContent=char;
      span.style.animationName=index%2===0?"heroSmokeBottomA":"heroSmokeBottomB";span.style.animationDelay=`${index*.10}s`;
      line.appendChild(span);index++;
    });
  });
}
window.addEventListener("load",()=>setTimeout(initSmokyHero,700));

/* =========================================================
   SOLEFORM — Vanilla JavaScript
   CHANGE ONLY THIS NUMBER for WhatsApp orders.
   Include country code, without + or spaces.
   ========================================================= */
const whatsappNumber = "923100375494";

const products = [
  {name:"Air Jordan", category:"jordan", price:"DM for price", description:"HypeX sneaker picks featuring Jordan silhouettes and verified OG pairs.", image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85"},
  {name:"Jordan OG Pair", category:"jordan", price:"DM for price", description:"Ask HypeX for available OG Jordan pairs, sizes and current condition.", image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85"},
  {name:"Rare Jordan Find", category:"jordan", price:"DM for price", description:"Rare sneaker options are posted through the HypeX Instagram page.", image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85"},
  {name:"Nike Air", category:"nike", price:"DM for price", description:"Nike sneaker drops with sizing and availability confirmed directly by HypeX.", image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"},
  {name:"Nike OG Pair", category:"nike", price:"DM for price", description:"Verified OG-focused Nike picks. Message for the current stock list.", image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85"},
  {name:"Rare Nike", category:"nike", price:"DM for price", description:"Looking for a specific Nike pair? Send the model or size on WhatsApp.", image:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85"},
  {name:"adidas Gazelle", category:"adidas", price:"DM for price", description:"Classic adidas style featured among the HypeX sneaker finds.", image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85"},
  {name:"Yeezy", category:"adidas", price:"DM for price", description:"Ask about available Yeezy pairs, sizes and pricing through HypeX.", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"},
  {name:"adidas OG Pair", category:"adidas", price:"DM for price", description:"Verified OG-focused adidas options with COD availability.", image:"https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=900&q=85"},
  {name:"Classic Canvas", category:"canvas", price:"DM for price", description:"Clean canvas footwear for everyday rotation. Ask HypeX for current colors and sizes.", image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85"},
  {name:"Urban Canvas", category:"canvas", price:"DM for price", description:"Simple low-top canvas styling for casual streetwear looks.", image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85"},
  {name:"Premium Canvas Low", category:"canvas", price:"DM for price", description:"Minimal everyday canvas pair. Message for availability and sizing.", image:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=900&q=85"},
  {name:"Performance Run", category:"running", price:"DM for price", description:"Lightweight running style for active days. Confirm available sizes with HypeX.", image:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85"},
  {name:"Speed Runner", category:"running", price:"DM for price", description:"Sport-focused running silhouette with a streamlined everyday feel.", image:"https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85"},
  {name:"Flex Running Pro", category:"running", price:"DM for price", description:"Flexible performance-inspired pair for training and daily movement.", image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85"},
  {name:"Air Motion Sneaker", category:"sneakers", price:"DM for price", description:"Modern lifestyle sneaker for street-ready everyday outfits.", image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85"},
  {name:"Street Runner X", category:"sneakers", price:"DM for price", description:"Bold casual sneaker styling with a streetwear-focused look.", image:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=85"},
  {name:"Urban Pro Sneaker", category:"sneakers", price:"DM for price", description:"Versatile sneaker silhouette made for everyday rotation.", image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85"},
  {name:"Everyday Slides", category:"slides", price:"DM for price", description:"Easy slip-on comfort for off-duty days. Ask about current colors and sizes.", image:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85"},
  {name:"Street Slides", category:"slides", price:"DM for price", description:"Casual slides for relaxed everyday wear. Availability confirmed on WhatsApp.", image:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85"},
  {name:"Comfort Slides", category:"slides", price:"DM for price", description:"Minimal comfort-first footwear for a clean off-duty rotation.", image:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85"}
];

const gallery = [
  {src:"https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&q=85",alt:"Lifestyle shoes in motion"},
  {src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",alt:"Red sneaker product photography"},
  {src:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",alt:"Modern sneaker detail"},
  {src:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",alt:"Running shoes outdoors"},
  {src:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",alt:"Canvas shoe detail"}
];

const productGrid = document.getElementById("productGrid");
const galleryGrid = document.getElementById("galleryGrid");

function orderOnWhatsApp(productName = "your shoe collection") {
  const message = `Hello, I am interested in ${productName}. Please provide me with more details and availability.`;
  if (whatsappNumber === "XXXXXXXXXXXX") {
    alert("Please replace XXXXXXXXXXXX with the business WhatsApp number in script.js.");
    return;
  }
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
window.orderOnWhatsApp = orderOnWhatsApp;

function renderProducts(filter = "all") {
  const visible = filter === "all" ? products : products.filter(p => p.category === filter);
  productGrid.innerHTML = visible.map(p => `
    <article class="product-card reveal visible" tabindex="0" role="button" aria-label="Order ${p.name}" data-product="${p.name}">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="product-tag">${p.category.toUpperCase()}</span>
      </div>
      <div class="product-body">
        <div class="product-top"><h3>${p.name}</h3><span class="price">${p.price}</span></div>
        <p>${p.description}</p>
        <button class="order-btn" type="button"><i class="fa-brands fa-whatsapp"></i> Order on WhatsApp</button>
      </div>
    </article>`).join("");
  productGrid.querySelectorAll(".product-card").forEach(card => {
    const name = card.dataset.product;
    card.addEventListener("click", e => {
      if (!e.target.closest("button") || e.target.closest(".order-btn")) orderOnWhatsApp(name);
    });
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); orderOnWhatsApp(name); } });
  });
}
function renderGallery() {
  galleryGrid.innerHTML = gallery.map((g,i) => `<button class="gallery-item reveal ${i ? `reveal-delay-${Math.min(i,4)}` : ""}" data-src="${g.src}" aria-label="Open ${g.alt}"><img src="${g.src}" alt="${g.alt}" loading="lazy"></button>`).join("");
}
renderProducts(); renderGallery();

/* Preloader */
window.addEventListener("load", () => setTimeout(() => document.getElementById("preloader").classList.add("done"), 650));

/* Navbar + subtle parallax */
const header = document.getElementById("header");
const heroBg = document.querySelector(".hero-bg");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  if (heroBg && window.scrollY < innerHeight) heroBg.style.setProperty("--parallax", `${window.scrollY * .12}px`);
}, {passive:true});

/* Mobile menu */
const menuToggle = document.getElementById("menuToggle"), menuClose = document.getElementById("menuClose"), navLinks = document.getElementById("navLinks");
function closeMenu(){navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");document.body.classList.remove("locked")}
menuToggle.addEventListener("click",()=>{navLinks.classList.add("open");menuToggle.setAttribute("aria-expanded","true");document.body.classList.add("locked")});
menuClose.addEventListener("click",closeMenu);
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));

/* WhatsApp CTAs */
document.querySelectorAll("[data-whatsapp]").forEach(el => el.addEventListener("click", e => {e.preventDefault();orderOnWhatsApp()}));

/* Product filters */
function setFilter(filter) {
  document.querySelectorAll(".filter-tabs button").forEach(b => b.classList.toggle("active", b.dataset.filter === filter));
  renderProducts(filter);
  document.getElementById("collection").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelectorAll(".filter-tabs button").forEach(btn => btn.addEventListener("click",()=>setFilter(btn.dataset.filter)));
document.querySelectorAll(".category-card").forEach(card => card.addEventListener("click",()=>setFilter(card.dataset.filter)));
document.querySelectorAll("[data-footer-filter]").forEach(link => link.addEventListener("click",()=>setTimeout(()=>setFilter(link.dataset.footerFilter),100)));

/* Scroll reveal */
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
}), {threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const statement = document.querySelector(".statement");
new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&statement.classList.add("visible")),{threshold:.2}).observe(statement);

/* Gallery lightbox */
const lightbox = document.getElementById("lightbox"), lightboxImage = document.getElementById("lightboxImage");
galleryGrid.addEventListener("click", e => {
  const item = e.target.closest(".gallery-item"); if(!item)return;
  lightboxImage.src = item.dataset.src; lightboxImage.alt = item.querySelector("img").alt;
  lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false"); document.body.classList.add("locked");
});
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");document.body.classList.remove("locked")}
document.getElementById("lightboxClose").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeLightbox();closeMenu()}});

/* Contact form -> WhatsApp */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const message = `Hello HypeX! My name is ${data.get("name")}. Email: ${data.get("email")}. Phone: ${data.get("phone")}. Message: ${data.get("message")}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  document.getElementById("formSuccess").classList.add("show");
  e.target.reset();
});

/* Keep keyboard focus visible for product cards */


/* =========================================================
   NAVBAR SCAN-GRID BUTTON — vanilla JS
   Runs only on the navbar .nav-cta element.
   ========================================================= */
function initNavScanGridButton() {
  const button = document.querySelector('.nav-cta');
  if (!button || button.dataset.scanGridReady === 'true') return;
  button.dataset.scanGridReady = 'true';
  button.classList.add('scan-grid-nav');

  const icon = button.querySelector('i');
  const textNodes = [...button.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  const label = textNodes.map(n => n.textContent).join(' ').trim() || 'Shop on WhatsApp';
  textNodes.forEach(n => n.remove());

  const textWrap = document.createElement('span');
  textWrap.className = 'nav-scan-text';
  [...label].forEach(ch => {
    const span = document.createElement('span');
    span.className = 'nav-char';
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    textWrap.appendChild(span);
  });
  button.insertBefore(textWrap, icon || null);

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.classList.add('nav-scan-svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('preserveAspectRatio', 'none');

  const line = document.createElementNS(svgNS, 'rect');
  line.classList.add('nav-scanline');
  line.setAttribute('x', '0');
  line.setAttribute('y', '0');
  line.setAttribute('width', '100%');
  line.setAttribute('height', '3');
  svg.appendChild(line);

  const paths = ['tl','tr','br','bl'].map(pos => {
    const p = document.createElementNS(svgNS, 'path');
    p.classList.add('nav-bracket', `nav-bracket-${pos}`);
    svg.appendChild(p);
    return p;
  });
  button.appendChild(svg);

  let w = 0, h = 0, raf = 0, scanRaf = 0, scanning = false;
  const clamp = (v,min,max) => Math.max(min,Math.min(max,v));
  const getPaths = (armPct) => {
    const r = Math.min(12, w/2, h/2);
    const arm = Math.min((armPct/100)*Math.min(w,h)/2, Math.max(0,w/2-r), Math.max(0,h/2-r));
    const s = .75, R = Math.max(.01,r-s);
    return [
      `M ${s} ${r+arm} L ${s} ${r} A ${R} ${R} 0 0 1 ${r} ${s} L ${r+arm} ${s}`,
      `M ${w-r-arm} ${s} L ${w-r} ${s} A ${R} ${R} 0 0 1 ${w-s} ${r} L ${w-s} ${r+arm}`,
      `M ${w-s} ${h-r-arm} L ${w-s} ${h-r} A ${R} ${R} 0 0 1 ${w-r} ${h-s} L ${w-r-arm} ${h-s}`,
      `M ${r+arm} ${h-s} L ${r} ${h-s} A ${R} ${R} 0 0 1 ${s} ${h-r} L ${s} ${h-r-arm}`
    ];
  };
  const render = (hover=false) => {
    w = button.clientWidth; h = button.clientHeight;
    if (!w || !h) return;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    const d = getPaths(hover ? 65 : 8);
    paths.forEach((p,i)=>p.setAttribute('d',d[i]));
  };
  const ro = new ResizeObserver(()=>{ cancelAnimationFrame(raf); raf=requestAnimationFrame(()=>render(button.matches(':hover'))); });
  ro.observe(button);

  const stopScan = () => {
    scanning = false;
    cancelAnimationFrame(scanRaf);
    line.style.opacity = '0';
    line.style.transform = 'translateY(-110%)';
  };
  const startScan = () => {
    scanning = true;
    const start = performance.now();
    const duration = 1800;
    line.style.opacity = '1';
    const tick = now => {
      if (!scanning) return;
      const t = ((now-start) % duration) / duration;
      line.style.transform = `translateY(${(-110 + t*220)}%)`;
      scanRaf = requestAnimationFrame(tick);
    };
    scanRaf = requestAnimationFrame(tick);
  };

  button.addEventListener('mouseenter', () => {
    button.classList.add('nav-is-hovered');
    render(true);
    startScan();
    textWrap.querySelectorAll('.nav-char').forEach((ch,i)=>{
      ch.animate([
        {transform:'translateX(0)',textShadow:'0 0 0 transparent'},
        {transform:'translateX(-1px)',textShadow:'1px 0 0 rgba(255,0,80,.65), -1px 0 0 rgba(0,220,255,.65)'},
        {transform:'translateX(1px)',textShadow:'-1px 0 0 rgba(255,0,80,.65), 1px 0 0 rgba(0,220,255,.65)'},
        {transform:'translateX(0)',textShadow:'0 0 0 transparent'}
      ], {duration:320,delay:i*30,easing:'ease-out'});
    });
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('nav-is-hovered');
    render(false);
    stopScan();
  });
  button.addEventListener('focus', () => { button.dispatchEvent(new MouseEvent('mouseenter')); });
  button.addEventListener('blur', () => { button.dispatchEvent(new MouseEvent('mouseleave')); });
  render(false);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNavScanGridButton);
else initNavScanGridButton();



/* Enable native-cursor hiding only where the custom cursor is active. */
(function () {
  if (!window.matchMedia("(pointer: coarse)").matches) {
    document.documentElement.classList.add("soleform-cursor-active");
  }
})();


/* ============================================================
   SOLEFORM Magic Cursor
   Full-website custom cursor effect
   ============================================================ */
(function () {
  "use strict";

  // Respect touch/mobile devices where a custom mouse cursor is not useful.
  if (window.matchMedia("(pointer: coarse)").matches) return;

  var cursor = document.createElement("div");
  cursor.className = "soleform-magic-cursor";
  cursor.setAttribute("aria-hidden", "true");

  cursor.innerHTML =
    '<svg width="18" height="21" viewBox="0 0 18 21" aria-hidden="true">' +
      '<path d="M0,0 L18,11 L9,13 L6,21 Z"></path>' +
    "</svg>";

  document.body.appendChild(cursor);

  var targetX = -9999;
  var targetY = -9999;
  var x = targetX;
  var y = targetY;
  var vx = 0;
  var vy = 0;
  var angle = 0;
  var pressed = 0;
  var inside = false;
  var seen = false;
  var last = performance.now();

  var FOLLOW_TAU = 0.02;
  var VELOCITY_TAU = 0.05;
  var ARROW_REST = Math.atan2(-15, -12);
  var CURSOR_SIZE = 40;

  function angleDelta(from, to) {
    var d = (to - from) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return d;
  }

  function onMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;

    if (!seen || !inside) {
      x = targetX;
      y = targetY;
      vx = 0;
      vy = 0;
      seen = true;
    }

    inside = true;
  }

  function onEnter(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    x = targetX;
    y = targetY;
    vx = 0;
    vy = 0;
    seen = true;
    inside = true;
  }

  function onLeave() {
    inside = false;
    cursor.style.opacity = "0";
  }

  function onDown() {
    pressed = 1;
  }

  function onUp() {
    pressed = 0;
  }

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerenter", onEnter, { passive: true });
  window.addEventListener("pointerleave", onLeave);
  window.addEventListener("pointerdown", onDown, { passive: true });
  window.addEventListener("pointerup", onUp, { passive: true });

  function frame(now) {
    var dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;

    var followEase = 1 - Math.exp(-dt / FOLLOW_TAU);
    var prevX = x;
    var prevY = y;

    x += (targetX - x) * followEase;
    y += (targetY - y) * followEase;

    if (dt > 0) {
      var vEase = 1 - Math.exp(-dt / VELOCITY_TAU);
      vx += (((x - prevX) / dt) - vx) * vEase;
      vy += (((y - prevY) / dt) - vy) * vEase;
    }

    var speed = Math.hypot(vx, vy);

    if (speed > 40) {
      var targetAngle = Math.atan2(vy, vx) - ARROW_REST;
      angle += angleDelta(angle, targetAngle) *
        (1 - Math.exp(-dt / 0.06));
    }

    var stretch = 1 + Math.min(speed / 3000, 0.35);
    var squash = 1 / Math.sqrt(stretch);

    var press = 1 - pressed * 0.2;
    var s = (CURSOR_SIZE / 21) * press;

    cursor.style.opacity = seen && inside ? "1" : "0";
    cursor.style.transform =
      "translate3d(" + x + "px," + y + "px,0) " +
      "rotate(" + angle + "rad) " +
      "scale(" + (s * squash) + "," + (s * stretch) + ")";

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
