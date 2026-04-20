document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    /* ---------- Page Loader ---------- */
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-text mono">BLACKBUUR · LOADING</div>
            <div class="loader-progress"><div class="progress-bar"></div></div>
        </div>
    `;
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 600);
        }, 250);
    });

    /* ---------- Custom cursor (desktop only) ---------- */
    let cursor = null;
    if (isDesktop) {
        cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        document.body.appendChild(cursor);

        let firstMove = true;
        document.addEventListener('mousemove', (e) => {
            if (firstMove) {
                cursor.classList.add('is-active');
                firstMove = false;
            }
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .modern-card, .service-card, .gallery-item, input, textarea')
            .forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
            });
    }

    /* ---------- Mouse glow + grid parallax (throttled via rAF) ---------- */
    const glow = document.getElementById('mouse-glow');
    const bg = document.getElementById('tech-canvas-bg');
    let mouseX = 0, mouseY = 0, rafMouse = null;

    if (isDesktop && (glow || bg)) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!rafMouse) {
                rafMouse = requestAnimationFrame(() => {
                    if (glow) {
                        glow.style.left = mouseX + 'px';
                        glow.style.top = mouseY + 'px';
                    }
                    if (bg) {
                        const xPos = (mouseX / window.innerWidth - 0.5) * 30;
                        const yPos = (mouseY / window.innerHeight - 0.5) * 30;
                        bg.style.transform = `translate(${xPos}px, ${yPos}px)`;
                    }
                    rafMouse = null;
                });
            }
        });
    }

    /* ---------- Magnetic buttons ---------- */
    if (isDesktop) {
        document.querySelectorAll('.magnetic-btn, .magnetic-item, .cta-btn').forEach(magnet => {
            magnet.addEventListener('mousemove', (e) => {
                const rect = magnet.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                const dist = Math.hypot(dx, dy);
                if (dist < 80) {
                    magnet.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
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
            const x = (window.innerWidth / 2 - e.pageX) / 60;
            const y = (window.innerHeight / 2 - e.pageY) / 60;
            heroVisual.style.transform = `translate(${x}px, ${y}px)`;
        });
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
        });
    }

    function updateToggleIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('.toggle-icon');
        if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    }

    /* ---------- Mobile menu ---------- */
    const mobileToggle = document.getElementById('nav-mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            mobileToggle.classList.toggle('open', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileToggle.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    /* ---------- Reveal on scroll ---------- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal-text, .reveal-up, .reveal-image').forEach(el => {
        observer.observe(el);
    });

    /* ---------- Staggered reveal for grids ---------- */
    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.reveal-up, .modern-card, .service-card');
                items.forEach((item, i) => {
                    setTimeout(() => item.classList.add('revealed'), i * 90);
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
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ---------- Contact form ---------- */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const btnText = btn.querySelector('.btn-text');
            const originalText = btnText.textContent;

            btnText.textContent = 'ENVOI...';
            btn.disabled = true;

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    btnText.textContent = 'MESSAGE ENVOYÉ ✓';
                    form.reset();
                } else {
                    btnText.textContent = 'ERREUR — RÉESSAYEZ';
                }
            } catch {
                btnText.textContent = 'ERREUR DE CONNEXION';
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
