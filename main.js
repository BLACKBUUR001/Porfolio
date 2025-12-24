document.addEventListener('DOMContentLoaded', () => {
    // --- Liquid Glass Mouse Tracking (Sheen) ---
    document.addEventListener('mousemove', (e) => {
        const glasses = document.querySelectorAll('.liquid-glass');
        glasses.forEach(glass => {
            const rect = glass.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            glass.style.setProperty('--mouse-x', `${x}%`);
            glass.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // --- Magnetic Effect (Organic) ---
    const magnets = document.querySelectorAll('.magnetic-btn, .magnetic-item, .nav-link, .cta-btn');
    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            // Limit magnetism range
            const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            if (dist < 100) {
                magnet.style.transform = `translate(${distanceX * 0.4}px, ${distanceY * 0.4}px)`;
                if (magnet.querySelector('.btn-text')) {
                    magnet.querySelector('.btn-text').style.transform = `translate(${distanceX * 0.1}px, ${distanceY * 0.1}px)`;
                }
            } else {
                magnet.style.transform = 'translate(0px, 0px)';
            }
        });

        magnet.addEventListener('mouseleave', () => {
            magnet.style.transform = 'translate(0px, 0px)';
            if (magnet.querySelector('.btn-text')) {
                magnet.querySelector('.btn-text').style.transform = 'translate(0px, 0px)';
            }
        });
    });

    // --- Page Loader ---
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-text mono">BLACKBUUR // INITIALIZING...</div>
            <div class="loader-progress"><div class="progress-bar"></div></div>
        </div>
    `;
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 800);
        }, 1200);
    });

    // --- Mouse & Glow Interaction ---
    const glow = document.getElementById('mouse-glow');
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        glow.style.left = x + 'px';
        glow.style.top = y + 'px';

        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

        // Background Parallax
        const bg = document.getElementById('tech-canvas-bg');
        if (bg) {
            const movement = 40;
            const xPos = (x / window.innerWidth - 0.5) * movement;
            const yPos = (y / window.innerHeight - 0.5) * movement;
            bg.style.transform = `translate(${xPos}px, ${yPos}px)`;
        }
    });

    // --- Interactive Hover Effects ---
    document.querySelectorAll('.btn, .nav-link, .project-card, .socials a, .nav-logo').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            if (el.classList.contains('project-card')) {
                el.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.02)`;
            }
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });

    // --- Hero Portrait Parallax ---
    const heroVisual = document.querySelector('.hero-v6-visual');
    if (heroVisual) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            heroVisual.style.transform = `translateX(${x}px) translateY(${y}px)`;

            const frame = heroVisual.querySelector('.visual-frame');
            if (frame) {
                frame.style.transform = `translateX(${x * -1.5}px) translateY(${y * -1.5}px)`;
            }
        });
    }

    // --- Theme Management ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme-tech') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    if (themeToggle) updateToggle(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme-tech', next);
            updateToggle(next);
        });
    }

    function updateToggle(theme) {
        const icon = themeToggle.querySelector('.toggle-icon');
        if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    }

    // --- Reveal on Scroll (Staggered) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('projects-grid')) {
                    const children = entry.target.querySelectorAll('.project-card');
                    children.forEach((child, i) => {
                        setTimeout(() => child.classList.add('revealed'), i * 150);
                    });
                } else {
                    entry.target.classList.add('revealed');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text, .reveal-up, .reveal-image, .projects-grid, .section-title').forEach(el => {
        observer.observe(el);
    });

    // --- Parallax for Images ---
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.project-img, .portrait-img').forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * 0.1;
            img.style.transform = `translateY(${offset - 20}px) scale(1.15)`;
        });
    });

    // --- Smooth Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Form Feedback ---
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.querySelector('.btn-text').textContent;
            const btnText = btn.querySelector('.btn-text');

            // UI Feedback: Loading
            btnText.textContent = 'TRANSMISSION...';
            btn.disabled = true;

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // UI Feedback: Success
                    btnText.textContent = 'SIGNAL ENVOYÉ !';
                    form.reset();
                } else {
                    // UI Feedback: Error
                    btnText.textContent = 'ERREUR_SIGNAL';
                }
            } catch (error) {
                btnText.textContent = 'ERREUR_CONNEXION';
            }

            // Reset button after 3 seconds
            setTimeout(() => {
                btnText.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        });
    }
});
