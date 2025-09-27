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
    // Check if the link is an external link or a mailto link
    const href = event.currentTarget.getAttribute("href");
    if (!href.startsWith("#")) {
      return; // Allow default behavior for external/mailto links
    }

    event.preventDefault();
    const targetId = href;
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
        offsetPosition - (viewportHeight - sectionHeight) / 2 + (headerOffset / 2);

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

  // Attach event listeners to all internal links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          
          // Add staggered animation for skill items
          if (entry.target.id === 'skills') {
            const skillSpans = entry.target.querySelectorAll(".skills-list span");
            skillSpans.forEach((span, index) => {
              span.style.transitionDelay = `${index * 50}ms`;
            });
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

// Vanta.js background initialization
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x748cab, 
  backgroundColor: 0x0d1321, 
  points: 20.0,
  maxDistance: 25.0,
  spacing: 15.0,
});