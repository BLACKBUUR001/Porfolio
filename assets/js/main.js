/* =========================================================
   Projets — source : Notion › Projet UX › Liste Projet UX/UI
   tone : fond de la carte · ac : accent du mockup
   ========================================================= */
const Y = "#ffc61a", K = "#0a0a0a", D1 = "#161616", D2 = "#1d1d1d";

const PROJECTS = [
  { name: "MuridPro", type: "Mobile", desc: "Application mobile", wide: true, img: "assets/img/muridpro.webp",
    url: "https://www.figma.com/proto/R1UovdnSla519lwIdwfO3e/Murid-pro-V4?node-id=1782-10949&viewport=639%2C300%2C0.12&t=2VgUJ8ey9BNZoPcZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1782%3A10949&page-id=0%3A1" },
  { name: "Domtrust", type: "Mobile", desc: "Application mobile", img: "assets/img/domtrust.webp",
    url: "https://www.figma.com/proto/zTXUbU0cSBhNrevVGUsg6M/Maquette-UI?node-id=186-4307&viewport=750%2C487%2C0.43&t=M7ssMc5fImnTqHtf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=76%3A3&page-id=8%3A4486" },
  { name: "Gouvnum", type: "Web", desc: "Plateforme web", wide: true, tone: Y, ac: K,
    url: "https://www.figma.com/proto/nFFNc3kwgvcmswoyT9gffY/GouvNum?node-id=132-2198&viewport=-260%2C-722%2C0.16&t=kgAGWjvBHDKI8oop-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=132%3A2198&page-id=0%3A1&show-proto-sidebar=1" },
  { name: "SenDon", type: "Mobile", desc: "Application mobile", tone: D2, ac: Y,
    url: "https://www.figma.com/proto/yjgTqAqKJzrRcJX3rggype/SenDon?node-id=202-2230&viewport=138%2C438%2C0.09&t=nFpfcZ7NGf7VqjEJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=201%3A1239&show-proto-sidebar=1&page-id=0%3A1" },
  { name: "The Booker Hotels", type: "Web", desc: "Réservation d'hôtels", tone: D1, ac: Y,
    url: "https://www.figma.com/proto/fnKU4v23NoWQueM89710WM/Bookers-hotels?node-id=298-4011&t=jipBfZqCRMwEX1zf-1&scaling=scale-down&content-scaling=fixed&page-id=298%3A1546&starting-point-node-id=298%3A4011" },
  { name: "The Bookers App", type: "Mobile", desc: "Réservation d'hôtels", tone: Y, ac: K,
    url: "https://www.figma.com/proto/fnKU4v23NoWQueM89710WM/Bookers-hotels?node-id=1227-19254&t=Fn7mLQ2By0dQaYDP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1227%3A19254" },
  { name: "Sunu Events", type: "Web", desc: "Plateforme d'événements", tone: D2, ac: Y,
    url: "https://www.figma.com/proto/RFdHzTEwzCh38Ucz3CEOOD/Sen-Events?node-id=1-166&starting-point-node-id=1%3A166&t=WVXtrvQyfjDCfZI1-1" },
  { name: "Smart Park", type: "Web", desc: "Stationnement intelligent", tone: D1, ac: Y,
    url: "https://www.figma.com/proto/AfU2RgnaIsMBkkZYgsLIVB/Smart-park?node-id=2-2&t=MtDQissVwidW7x8Z-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" },
  { name: "ONN", type: "Web", desc: "Observatoire National du Numérique", tone: Y, ac: K,
    url: "https://www.figma.com/proto/zFHIhkHjyaNHSkdohhPZQm/Observatoire-National-de-Num%C3%A9rique?node-id=1-2&t=hR7bFxWYJNmW1Obq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
  { name: "Batinov", type: "Web", desc: "Site web", tone: D1, ac: Y,
    url: "https://www.figma.com/proto/zEKWZ6aXTLSvmwWEepjryo/Batinov-2.0?node-id=147-110&p=f&t=AmG82ginkumEP48r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
  { name: "Diass Industries", type: "Web", desc: "Site corporate", tone: D2, ac: Y,
    url: "https://www.figma.com/proto/78zv7Fl8Er3K0SQAEYTvI2/Diass-industries?node-id=1-2&page-id=0%3A1&starting-point-node-id=1%3A2&t=ZoB3pdTOeJhtxGZW-1" },
  { name: "CPPS", type: "Web", desc: "Site web", tone: Y, ac: K,
    url: "https://www.figma.com/proto/OnyCsM1lSm7VnOPRQtS9aQ/CPPS?node-id=96-2672&t=MoRGOhsZ4vU1XNB3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=96%3A2672" },
  { name: "Landing Page NT", type: "Web", desc: "Landing page", tone: D2, ac: Y,
    url: "https://www.figma.com/proto/qOpzn2iVEW7V1Htlt3fCn0/NT-landingpage?node-id=5-2&t=AjmOsrJrkoVzUDVB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
];

const PAGES = [
  ["index.html", "Accueil", "accueil"],
  ["apropos.html", "À propos", "apropos"],
  ["services.html", "Services", "services"],
  ["projets.html", "Projets", "projets"],
  ["process.html", "Process", "process"],
];

const DOCK = [
  ["index.html", "Accueil", "accueil", "ph:house"],
  ["projets.html", "Projets", "projets", "ph:squares-four"],
  ["process.html", "Process", "process", "ph:path"],
  ["apropos.html", "Profil", "apropos", "ph:user"],
  ["contact.html", "Contact", "contact", "ph:chat-circle-dots"],
];

const SOCIALS = [
  ["LinkedIn", "ph:linkedin-logo", "https://www.linkedin.com/in/cheikh-ahmadou-fall-5411661b9/"],
  ["Behance", "ph:behance-logo", "https://www.behance.net/ahmaduhfaal"],
  ["Instagram", "ph:instagram-logo", "https://www.instagram.com/ahmaduh__faal/"],
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const page = document.body.dataset.page;

/* ---------- Header / footer / modal partagés ---------- */
function renderLayout() {
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="nav" id="nav">
      <div class="container nav__inner">
        <a href="index.html" class="nav__brand" aria-label="Accueil">
          <img src="assets/img/logo-icon.svg" alt="Blackbuur" class="nav__logo">
        </a>
        <nav class="nav__links" id="navLinks">
          ${PAGES.map(([href, label, id]) => `<a href="${href}" class="${id === page ? "is-active" : ""}">${label}</a>`).join("")}
        </nav>
        <div class="nav__actions">
          <a href="contact.html" class="btn btn--primary btn--sm nav__contact">Contact <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a>
          <button class="nav__burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="menu"><span></span><span></span></button>
        </div>
      </div>
    </header>

    <!-- Menu plein écran (mobile) -->
    <div class="menu" id="menu" aria-hidden="true">
      <nav class="menu__links">
        ${[...PAGES, ["contact.html", "Contact", "contact"]].map(([href, label, id], i) => `
          <a href="${href}" class="menu__link${id === page ? " is-active" : ""}" style="--i:${i}">
            <small>0${i + 1}</small><span>${label}</span><iconify-icon icon="ph:arrow-up-right"></iconify-icon>
          </a>`).join("")}
      </nav>
      <div class="menu__foot" style="--i:7">
        <a href="mailto:cheikhfalldigital@gmail.com">cheikhfalldigital@gmail.com</a>
        <div class="menu__socials">${SOCIALS.map(([l, icon, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${l}"><iconify-icon icon="${icon}"></iconify-icon></a>`).join("")}</div>
      </div>
    </div>

    <!-- Barre de navigation du bas (mobile), à portée de pouce -->
    <nav class="dock" id="dock" aria-label="Navigation rapide">
      ${DOCK.map(([href, label, id, icon]) => `
        <a href="${href}" class="dock__item${id === page ? " is-active" : ""}" ${id === page ? `aria-current="page"` : ""}>
          <iconify-icon icon="${icon}"></iconify-icon><span>${label}</span>
        </a>`).join("")}
    </nav>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="footer">
      <div class="container">
        <p class="footer__big">Un projet en tête ?<br><a href="contact.html">Parlons-en <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></p>
        <div class="footer__grid">
          <div>
            <a href="index.html" class="footer__brand" aria-label="Accueil"><img src="assets/img/logo-full.svg" alt="Blackbuur" class="footer__logo"></a>
            <p class="footer__role">UI/UX &amp; Product Designer</p>
          </div>
          <nav><h4>Pages</h4>${PAGES.map(([h, l]) => `<a href="${h}">${l}</a>`).join("")}</nav>
          <nav><h4>Réseaux</h4>${SOCIALS.map(([l, , u]) => `<a href="${u}" target="_blank" rel="noopener">${l}</a>`).join("")}</nav>
          <nav><h4>Contact</h4>
            <a href="mailto:cheikhfalldigital@gmail.com">cheikhfalldigital@gmail.com</a>
            <a href="https://wa.me/221776231314" target="_blank" rel="noopener">+221 77 623 13 14</a>
          </nav>
        </div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} Cheikh Ahmadou Fall · Blackbuur</span>
          <a href="#top">Haut de page ↑</a>
        </div>
      </div>
    </footer>

    <div class="modal" id="modal" aria-hidden="true">
      <div class="modal__backdrop" data-close></div>
      <div class="modal__box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <header class="modal__head">
          <div><small id="modalType"></small><h3 id="modalTitle"></h3></div>
          <div class="modal__actions">
            <a id="modalOpen" href="#" target="_blank" rel="noopener" class="btn btn--outline btn--sm">Ouvrir dans Figma <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a>
            <button class="icon-btn" data-close aria-label="Fermer"><iconify-icon icon="ph:x"></iconify-icon></button>
          </div>
        </header>
        <div class="modal__frame"><iframe id="modalFrame" title="Prototype Figma" allowfullscreen></iframe></div>
      </div>
    </div>`);
  document.body.id = "top";
}

/* ---------- Covers ---------- */
function mockCover(p) {
  if (p.type === "Mobile") {
    return `<div class="mock mock--mobile">
      <div class="mock__title">${p.name}</div>
      <div class="mock__card"></div>
      <div class="mock__row"><i></i><i></i></div>
      <div class="mock__row"><i></i><i></i></div>
    </div>`;
  }
  return `<div class="mock mock--web">
    <div class="mock__bar"><i></i><i></i><i></i></div>
    <div class="mock__content">
      <div><div class="mock__title">${p.name}</div><div class="mock__lines"><i></i><i></i></div><div class="mock__btn"></div></div>
      <div class="mock__img"></div>
    </div>
  </div>`;
}

function projectCard(p, i) {
  return `
    <button class="project reveal${p.wide ? " project--wide" : ""}" style="--d:${(i % 3) * 0.08}s" data-type="${p.type}" data-index="${PROJECTS.indexOf(p)}" aria-label="Voir le prototype ${p.name}">
      <div class="project__cover" style="--tone:${p.tone || D1};--ac:${p.ac || Y}">
        ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : mockCover(p)}
        <span class="project__play"><iconify-icon icon="ph:play-fill"></iconify-icon> Prototype</span>
      </div>
      <div class="project__body">
        <div><h3>${p.name}</h3><p>${p.desc}</p></div>
        <span class="tag"><iconify-icon icon="${p.type === "Mobile" ? "ph:device-mobile" : "ph:monitor"}"></iconify-icon>${p.type}</span>
      </div>
    </button>`;
}

function renderProjects() {
  const grid = $("#projects");
  if (!grid) return;
  const limit = +grid.dataset.limit || PROJECTS.length;
  grid.innerHTML = PROJECTS.slice(0, limit).map(projectCard).join("");

  const counts = { all: PROJECTS.length, Web: 0, Mobile: 0 };
  PROJECTS.forEach(p => counts[p.type]++);
  $$(".filter").forEach(b => { const s = $("sup", b); if (s) s.textContent = counts[b.dataset.filter]; });
}

/* ---------- Bandes de projets (page À propos) ---------- */
function renderReels() {
  $$("[data-reel]").forEach(row => {
    const half = Math.ceil(PROJECTS.length / 2);
    const list = row.dataset.reel === "0" ? PROJECTS.slice(0, half) : PROJECTS.slice(half);
    const items = list.map((p, i) => `
      <span class="reel__item${i % 2 ? " reel__item--outline" : ""}">${p.name}<small>${p.type}</small></span>
      <iconify-icon class="reel__sep" icon="ph:asterisk-bold"></iconify-icon>`).join("");
    // Contenu doublé pour une boucle sans couture
    row.innerHTML = `<div class="reel__track">${items}${items}</div>`;
  });
}

function initFilters() {
  $$(".filter").forEach(btn => btn.addEventListener("click", () => {
    $$(".filter").forEach(b => b.classList.toggle("is-active", b === btn));
    const f = btn.dataset.filter;
    $$(".project").forEach(card => {
      const show = f === "all" || card.dataset.type === f;
      card.classList.toggle("is-hidden", !show);
      card.classList.remove("is-entering");
      if (show) { void card.offsetWidth; card.classList.add("is-entering"); }
    });
  }));
}

/* ---------- Modal (Figma embed) ---------- */
function initModal() {
  const modal = $("#modal"), frame = $("#modalFrame");
  const open = p => {
    $("#modalTitle").textContent = p.name;
    $("#modalType").textContent = `${p.type} · ${p.desc}`;
    $("#modalOpen").href = p.url;
    frame.src = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(p.url)}`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  };
  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    setTimeout(() => { frame.src = "about:blank"; }, 350);
  };
  document.addEventListener("click", e => {
    const card = e.target.closest(".project");
    if (card) open(PROJECTS[card.dataset.index]);
  });
  $$("[data-close]", modal).forEach(el => el.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("is-open")) close(); });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal, .journey").forEach(el => io.observe(el));
}

/* ---------- Parcours Process : tracé dessiné au scroll ---------- */
function initRoad() {
  const road = $("#road");
  if (!road) return;
  const steps = $$(".rstep", road);
  let ticking = false;
  const update = () => {
    ticking = false;
    const r = road.getBoundingClientRect();
    const p = Math.min(Math.max((innerHeight * 0.7 - r.top) / r.height, 0), 1);
    road.style.setProperty("--p", p.toFixed(4));
    steps.forEach((s, i) => s.classList.toggle("is-on", p >= (i + 0.5) / steps.length));
  };
  update();
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update);
}

/* ---------- Counters ---------- */
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
      const pad = end < 10 ? 2 : 0, t0 = performance.now(), dur = 1400;
      const tick = now => {
        const k = Math.min((now - t0) / dur, 1);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - k, 3)))).padStart(pad, "0") + suffix;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$("[data-count]").forEach(el => io.observe(el));
}

/* ---------- Nav ---------- */
function initNav() {
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu"), dock = $("#dock");

  // Header opaque au scroll ; la barre du bas se cache en descendant et revient en remontant
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("is-scrolled", y > 10);
    dock.classList.toggle("is-hidden", y > lastY && y > 300);
    lastY = y;
  };
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  const setMenu = open => {
    document.documentElement.classList.toggle("menu-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  };
  burger.addEventListener("click", () => setMenu(!document.documentElement.classList.contains("menu-open")));
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  addEventListener("pageshow", () => setMenu(false));
}

/* ---------- Sheets : modales animées ---------- */
const EMAIL = "cheikhfalldigital@gmail.com";
const PHONE = "+221 77 623 13 14";

const copyField = value => `
  <div class="copy sheet__item" style="--k:3">
    <code>${value}</code>
    <button type="button" data-copy="${value}">
      <iconify-icon class="i-copy" icon="ph:copy"></iconify-icon><iconify-icon class="i-done" icon="ph:check-bold"></iconify-icon> Copier
    </button>
  </div>`;

const badge = icon => `<div class="sheet__badge sheet__item" style="--k:0"><iconify-icon icon="${icon}"></iconify-icon></div>`;

const SHEETS = {
  email: () => `${badge("ph:envelope-simple")}
    <h3 class="sheet__item" style="--k:1">Écrivez-moi</h3>
    <p class="sheet__item" style="--k:2">Décrivez votre projet en quelques lignes, je vous réponds rapidement.</p>
    ${copyField(EMAIL)}
    <div class="sheet__actions sheet__item" style="--k:4"><a class="btn btn--primary" href="mailto:${EMAIL}">Ouvrir ma messagerie <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  whatsapp: () => `${badge("ph:whatsapp-logo")}
    <h3 class="sheet__item" style="--k:1">Discutons sur WhatsApp</h3>
    <p class="sheet__item" style="--k:2">Le plus rapide pour un premier échange ou une question.</p>
    ${copyField(PHONE)}
    <div class="sheet__actions sheet__item" style="--k:4"><a class="btn btn--primary" href="https://wa.me/221776231314" target="_blank" rel="noopener">Ouvrir WhatsApp <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  linkedin: () => `${badge("ph:linkedin-logo")}
    <h3 class="sheet__item" style="--k:1">Connectons-nous</h3>
    <p class="sheet__item" style="--k:2">Mon parcours, mes expériences et mes actualités de designer.</p>
    <div class="sheet__actions sheet__item" style="--k:3"><a class="btn btn--primary" href="${SOCIALS[0][2]}" target="_blank" rel="noopener">Voir mon profil LinkedIn <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  behance: () => `${badge("ph:behance-logo")}
    <h3 class="sheet__item" style="--k:1">Mon Behance</h3>
    <p class="sheet__item" style="--k:2">Mes projets UI/UX présentés en détail : maquettes, parcours et écrans clés.</p>
    <div class="sheet__actions sheet__item" style="--k:3"><a class="btn btn--primary" href="${SOCIALS[1][2]}" target="_blank" rel="noopener">Voir mon Behance <iconify-icon icon="ph:arrow-up-right"></iconify-icon></a></div>`,
  success: ({ name, mailto }) => `
    <div class="check sheet__item" style="--k:0">
      ${Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2, r = 70 + (i % 3) * 14;
        return `<span class="burst" style="--x:${Math.round(Math.cos(a) * r)}px;--y:${Math.round(Math.sin(a) * r)}px"></span>`;
      }).join("")}
      <svg viewBox="0 0 86 86"><circle cx="43" cy="43" r="43" /><path d="M26 44 l12 12 l22 -24" /></svg>
    </div>
    <h3 class="sheet__item" style="--k:1">Merci ${name} !</h3>
    <p class="sheet__item" style="--k:2">Votre message est prêt. Votre messagerie va s'ouvrir avec tout pré-rempli : il ne reste qu'à cliquer sur Envoyer.</p>
    <div class="sheet__actions sheet__item" style="--k:3">
      <a class="btn btn--primary" href="${mailto}">Ouvrir ma messagerie <iconify-icon icon="ph:paper-plane-tilt"></iconify-icon></a>
      <button type="button" class="btn btn--outline" data-sheet-close>Fermer</button>
    </div>`,
};

let sheetEl, lastFocus;
function openSheet(type, data = {}) {
  if (!sheetEl) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="sheet" aria-hidden="true">
        <div class="sheet__backdrop" data-sheet-close></div>
        <div class="sheet__box" role="dialog" aria-modal="true">
          <button class="sheet__close" data-sheet-close aria-label="Fermer"><iconify-icon icon="ph:x-bold"></iconify-icon></button>
          <div class="sheet__content"></div>
        </div>
      </div>
      <div class="toast" role="status"><iconify-icon icon="ph:check-circle-fill"></iconify-icon> Copié !</div>`);
    sheetEl = $(".sheet");
    sheetEl.addEventListener("click", e => {
      if (e.target.closest("[data-sheet-close]")) closeSheet();
      const copy = e.target.closest("[data-copy]");
      if (copy) copyText(copy);
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && sheetEl.classList.contains("is-open")) closeSheet(); });
  }
  lastFocus = document.activeElement;
  $(".sheet__content", sheetEl).innerHTML = SHEETS[type](data);
  sheetEl.classList.remove("is-closing");
  void sheetEl.offsetWidth; // relance les animations à chaque ouverture
  sheetEl.classList.add("is-open");
  sheetEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $(".sheet__close", sheetEl).focus({ preventScroll: true });
}

function closeSheet() {
  sheetEl.classList.add("is-closing");
  setTimeout(() => {
    sheetEl.classList.remove("is-open", "is-closing");
    sheetEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    lastFocus?.focus({ preventScroll: true });
  }, 250);
}

async function copyText(btn) {
  try { await navigator.clipboard.writeText(btn.dataset.copy); } catch (e) {
    const t = document.createElement("textarea");
    t.value = btn.dataset.copy; document.body.append(t); t.select(); document.execCommand("copy"); t.remove();
  }
  btn.classList.add("is-done");
  const toast = $(".toast");
  toast.classList.add("is-on");
  setTimeout(() => { btn.classList.remove("is-done"); toast.classList.remove("is-on"); }, 1800);
}

/* ---------- Contact ---------- */
function initContact() {
  const form = $("#contactForm");
  if (!form) return;

  // Heure locale à Dakar
  const clock = $("#dakarTime");
  const tick = () => { clock.textContent = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Dakar" }).format(new Date()); };
  tick(); setInterval(tick, 30000);

  $$("[data-sheet]").forEach(b => b.addEventListener("click", () => openSheet(b.dataset.sheet)));

  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    $$(".field", form).forEach(f => {
      const input = $("input, textarea", f);
      f.classList.remove("is-error");
      if (!input.checkValidity()) { void f.offsetWidth; f.classList.add("is-error"); ok = false; }
    });
    if (!ok) return;

    const d = new FormData(form);
    const subject = `${d.get("type")} — ${d.get("name")}`;
    const body = `${d.get("message")}\n\n${d.get("name")} · ${d.get("email")}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const btn = $(".brief__send", form);
    btn.classList.add("is-loading");
    setTimeout(() => {
      btn.classList.remove("is-loading");
      const first = String(d.get("name")).trim().split(" ")[0].replace(/[<>&"]/g, "");
      openSheet("success", { name: first, mailto });
    }, 900);
  });
  $$(".field input, .field textarea", form).forEach(i => i.addEventListener("input", () => i.parentElement.classList.remove("is-error")));
}

/* ---------- Intro : le logo se dessine, rebondit, puis le rideau se lève ---------- */
const wait = ms => new Promise(r => setTimeout(r, ms));

async function runIntro() {
  const root = document.documentElement;
  if (!root.classList.contains("intro")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="loader" aria-hidden="true"><div class="loader__logo"></div></div>`);
  const loader = $(".loader");
  root.classList.remove("intro");

  // Logo SVG en ligne pour pouvoir animer ses tracés (sa <style> interne est retirée)
  try {
    const svg = await (await fetch("assets/img/logo-icon.svg")).text();
    $(".loader__logo", loader).innerHTML = svg.replace(/<\?xml[^>]*>/, "").replace(/<style>[\s\S]*?<\/style>/, "");
    $$(".loader__logo path", loader).forEach(p => p.style.setProperty("--len", Math.ceil(p.getTotalLength())));
  } catch (e) {
    $(".loader__logo", loader).innerHTML = `<img src="assets/img/logo-icon.svg" alt="">`;
  }

  void loader.offsetWidth;
  loader.classList.add("is-drawing");

  await wait(1300);
  loader.classList.add("is-filled");
  await wait(1100);
  loader.classList.add("is-leaving");
  try { sessionStorage.setItem("bb-seen", "1"); } catch (e) {}
  setTimeout(() => loader.remove(), 1000);
  await wait(500); // le hero s'anime pendant la levée du rideau
}

/* ---------- Transitions de page ---------- */
const pageLabel = href => {
  const file = href.split("/").pop().split(/[?#]/)[0] || "index.html";
  const hit = PAGES.find(([h]) => h === file);
  return hit ? hit[1] : file === "contact.html" ? "Contact" : "";
};

function ptMarkup(label) {
  return `<div class="pt" aria-hidden="true"><div class="pt__inner">
    <img class="pt__logo" src="assets/img/logo-icon.svg" alt="">
    <div class="pt__mask"><span class="pt__label">${label}</span></div>
  </div></div>`;
}

async function runArrival() {
  const root = document.documentElement;
  if (!root.classList.contains("pt-in")) return;
  let label = "";
  try { label = sessionStorage.getItem("bb-pt") || ""; sessionStorage.removeItem("bb-pt"); } catch (e) {}
  document.body.insertAdjacentHTML("beforeend", ptMarkup(label));
  const pt = $$(".pt").pop();
  pt.classList.add("is-cover");
  root.classList.remove("pt-in");
  await wait(250);
  pt.classList.add("is-leave");
  setTimeout(() => pt.remove(), 1000);
  await wait(350); // le contenu commence à apparaître pendant que le rideau remonte
}

function initTransitions() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !url.pathname.endsWith(".html") && !url.pathname.endsWith("/")) return;
    if (url.pathname === location.pathname && url.hash) return; // ancre sur la même page
    e.preventDefault();

    const label = pageLabel(url.pathname);
    document.body.insertAdjacentHTML("beforeend", ptMarkup(label));
    const pt = $$(".pt").pop();
    pt.style.setProperty("--x", `${e.clientX || innerWidth / 2}px`);
    pt.style.setProperty("--y", `${e.clientY || innerHeight / 2}px`);
    void pt.offsetWidth;
    pt.classList.add("is-out");
    try { sessionStorage.setItem("bb-pt", label || " "); } catch (err) {}
    setTimeout(() => { location.href = url.href; }, 800);
  });
  // Retour arrière (bfcache) : on retire le rideau resté affiché
  addEventListener("pageshow", e => { if (e.persisted) $$(".pt").forEach(p => p.remove()); });
}

/* ---------- Init ---------- */
renderLayout();
renderProjects();
renderReels();
initFilters();
initModal();
initRoad();
initNav();
initContact();
initTransitions();
// Les apparitions au scroll démarrent une fois l'intro ou le rideau d'arrivée terminé
// (finally : même si l'intro échoue, le contenu s'affiche quand même)
Promise.all([runIntro(), runArrival()]).catch(console.error).finally(() => { initReveal(); initCounters(); });
