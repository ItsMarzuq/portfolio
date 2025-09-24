document.addEventListener('DOMContentLoaded', () => {

// --- INITIALIZE VANTA.JS ---
    VANTA.NET({
        el: "#vanta-bg", 
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 0.25,
        scaleMobile: 0.25,
        color: 0x748cab, /* Updated accent color */
        backgroundColor: 0x0d1321, /* Updated background color */
        points: 25.00,
        maxDistance: 30.00,
        spacing: 15.00
    });

    // --- SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // --- ON-SCROLL FADE-IN ANIMATION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.id === 'skills') {
                    const skillTags = entry.target.querySelectorAll('.skills-list span');
                    skillTags.forEach((tag, index) => {
                        tag.style.transitionDelay = `${index * 50}ms`;
                    });
                }
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- PROJECT CARD SPOTLIGHT EFFECT ---
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
             card.style.setProperty('--mouse-x', `-1000px`);
             card.style.setProperty('--mouse-y', `-1000px`);
        });
    });
});