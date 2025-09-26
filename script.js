document.addEventListener('DOMContentLoaded', () => {

    // --- INITIALIZE VANTA.JS (MODIFIED) ---
    VANTA.NET({
        el: "#vanta-bg", 
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x748cab,
        backgroundColor: 0x0d1321,
        points: 20.00,         // Reduced points
        maxDistance: 30.00,     // Adjusted distance
        spacing: 20.00          // Increased spacing
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

    // --- PROJECT CARD SPOTLIGHT EFFECT (REMOVED) ---
});