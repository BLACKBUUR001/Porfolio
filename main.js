/* =========================================================
   BLACKBUUR — main.js
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    /* ---------- Dynamic footer year ---------- */
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Page loader ---------- */
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-text">BLACKBUUR · LOADING</div>
            <div class="loader-progress"><div class="progress-bar"></div></div>
        </div>
    `;
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 500);
        }, 200);
    });

    /* ---------- SMOOTH CURSOR (lerp-based, butter smooth) ---------- */
    if (isDesktop) {
        const cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        document.body.appendChild(cursor);

        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;
        let activated = false;

        const LERP = 0.28; // higher = snappier, lower = smoother trail

        document.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            if (!activated) {
                cursor.classList.add('is-active');
                currentX = targetX;
                currentY = targetY;
                activated = true;
            }
        }, { passive: true });

        document.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
        document.addEventListener('mouseenter', () => { if (activated) cursor.classList.add('is-active'); });

        function tick() {
            currentX += (targetX - currentX) * LERP;
            currentY += (targetY - currentY) * LERP;
            cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(tick);
        }
        tick();

        // Hover state
        document.querySelectorAll('a, button, .modern-card, .service-card, .gallery-item, input, textarea, .specialty-chip')
            .forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
            });
    }

    /* ---------- Mouse glow + grid parallax (rAF throttled) ---------- */
    const glow = document.getElementById('mouse-glow');
    const bg = document.getElementById('tech-canvas-bg');
    let mx = 0, my = 0, rafMouse = null;

    if (isDesktop && (glow || bg)) {
        document.addEventListener('mousemove', (e) => {
            mx = e.clientX;
            my = e.clientY;
            if (!rafMouse) {
                rafMouse = requestAnimationFrame(() => {
                    if (glow) {
                        glow.style.left = mx + 'px';
                        glow.style.top = my + 'px';
                    }
                    if (bg) {
                        const xp = (mx / window.innerWidth - 0.5) * 25;
                        const yp = (my / window.innerHeight - 0.5) * 25;
                        bg.style.transform = `translate(${xp}px, ${yp}px)`;
                    }
                    rafMouse = null;
                });
            }
        }, { passive: true });
    }

    /* ---------- Magnetic buttons ---------- */
    if (isDesktop) {
        document.querySelectorAll('.magnetic-btn, .magnetic-item').forEach(magnet => {
            magnet.addEventListener('mousemove', (e) => {
                const rect = magnet.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                const dist = Math.hypot(dx, dy);
                if (dist < 70) {
                    magnet.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
                }
            });
            magnet.addEventListener('mouseleave', () => {
                magnet.style.transform = '';
            });
        });
    }

    /* ---------- Hero portrait subtle parallax ---------- */
    const heroVisual = document.querySelector('.hero-v6-visual');
    if (heroVisual && isDesktop) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 70;
            const y = (window.innerHeight / 2 - e.pageY) / 70;
            heroVisual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }, { passive: true });
    }

    /* ---------- Theme toggle ---------- */
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme-blackbuur') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme-blackbuur', next);
            updateToggleIcon(next);
            // Sync meta theme color
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) meta.setAttribute('content', next === 'dark' ? '#0a0a0b' : '#faf8f3');
        });
    }
    function updateToggleIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('.toggle-icon');
        if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    }

    /* ---------- Mobile popup menu ---------- */
    const mobileToggle = document.getElementById('nav-mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-menu-close');

    const openMenu = () => {
        if (!mobileMenu) return;
        mobileMenu.classList.add('open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        mobileToggle?.classList.add('open');
        mobileToggle?.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll');
    };
    const closeMenu = () => {
        if (!mobileMenu) return;
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileToggle?.classList.remove('open');
        mobileToggle?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    };

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
        });
        mobileClose?.addEventListener('click', closeMenu);
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) closeMenu();
        });
        mobileMenu.querySelectorAll('.mobile-menu-card a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
        });
    }

    /* ---------- Reveal on scroll ---------- */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal-up, .reveal-image').forEach(el => {
        revealObserver.observe(el);
    });

    /* Staggered reveal for grids */
    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.reveal-up, .modern-card, .service-card');
                items.forEach((item, i) => {
                    setTimeout(() => item.classList.add('revealed'), i * 80);
                });
                gridObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.projects-modern-grid, .services-grid').forEach(el => {
        gridObserver.observe(el);
    });

    /* ---------- Active nav link on scroll ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active',
                        link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => navObserver.observe(s));

    /* ---------- Smooth anchor scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ---------- SCROLL TO TOP button ---------- */
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    scrollTopBtn.classList.toggle('show', window.pageYOffset > 600);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Contact form ---------- */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const btnText = btn.querySelector('.btn-text');
            const originalText = btnText.textContent;

            btnText.textContent = 'Envoi...';
            btn.disabled = true;

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    btnText.textContent = 'Message envoyé ✓';
                    form.reset();
                } else {
                    btnText.textContent = 'Erreur — réessayez';
                }
            } catch {
                btnText.textContent = 'Erreur de connexion';
            }
            setTimeout(() => {
                btnText.textContent = originalText;
                btn.disabled = false;
            }, 3200);
        });
    }

    /* ---------- Lightbox (project pages) ---------- */
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox && lightboxImg) {
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.classList.add('no-scroll');
            });
        });
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
        };
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
        });
    }
});
