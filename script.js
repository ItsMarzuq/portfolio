<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
    body.classList.toggle("nav-open"); // Toggles overflow hidden on body
  });

  // Smooth scroll and scroll-to-center functionality
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerOffset = 96; // Height of your fixed header (6rem = 96px)
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // Calculate position to center the section
      const viewportHeight = window.innerHeight;
      const sectionHeight = targetSection.offsetHeight;
      const scrollPosition =
        offsetPosition - (viewportHeight - sectionHeight) / 2;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      // Close mobile nav after clicking a link
      if (mobileNav.classList.contains("is-active")) {
        hamburger.classList.remove("is-active");
        mobileNav.classList.remove("is-active");
        body.classList.remove("nav-open");
      }
    }
  }

  // Attach event listeners to desktop navigation links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  // Attach event listeners to mobile navigation links
  document.querySelectorAll(".mobile-nav .mobile-link").forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  // Attach event listener to the hero CTA button
  document.querySelector(".cta-button").addEventListener("click", scrollToSection);

  // Intersection Observer for animations
  const hiddenElements = document.querySelectorAll(".hidden");
  const revealTextElements = document.querySelectorAll(".reveal-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.1 } // Adjust as needed
  );

  hiddenElements.forEach((el) => observer.observe(el));

  // Special observer for skills section to delay skill item animation
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Add a staggered animation for skill items if needed
          const skillSpans = entry.target.querySelectorAll(".skills-list span");
          skillSpans.forEach((span, index) => {
            span.style.transitionDelay = `${index * 50}ms`; // Stagger delay
            span.classList.add("visible");
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("#skills").forEach((el) => skillsObserver.observe(el));
});

// Vanta.js background initialization
VANTA.NET({
=======
document.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
>>>>>>> cd96b52c3b69a56ff253f64b2e25bee2d142aa4d
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
        points: 20.00,
        maxDistance: 30.00,     
        spacing: 20.00        
<<<<<<< HEAD
    });
=======
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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
});
>>>>>>> cd96b52c3b69a56ff253f64b2e25bee2d142aa4d
