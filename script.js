// --------------------------------------------------
// GSAP SETUP
// --------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------
// REUSABLE HELPERS
// --------------------------------------------------

// Heading animation via IntersectionObserver
function animateHeading(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      el.classList.toggle("tracking-in-contract-bck", entry.isIntersecting);
    },
    { threshold: 0.5 }
  );

  observer.observe(el);
}

// GSAP box/card scroll animation
function animateBoxes(selector, start = "top 80%") {
  gsap.utils.toArray(selector).forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start,
        end: "top 60%",
        scrub: true
      },
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "power2.out"
    });
  });
}

// --------------------------------------------------
// HERO
// --------------------------------------------------
gsap.from(".hero-title", {
  scrollTrigger: { trigger: ".hero", start: "top 80%" },
  opacity: 0,
  y: 60,
  scale: 0.97,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".hero-slogan", {
  scrollTrigger: { trigger: ".hero", start: "top 80%" },
  opacity: 0,
  y: 60,
  scale: 0.97,
  duration: 1,
  ease: "power2.out",
  delay: 0.2
});

// --------------------------------------------------
// WELCOME
// --------------------------------------------------
gsap.from(".welcome-content", {
  scrollTrigger: {
    trigger: ".welcome-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out"
});

// --------------------------------------------------
// ABOUT
// --------------------------------------------------
animateHeading(".about-heading");

gsap.from(".about-body", {
  scrollTrigger: {
    trigger: ".about-us-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out"
});

// --------------------------------------------------
// MISSION
// --------------------------------------------------
animateHeading(".mission-heading");
animateBoxes(".mission-box");

// --------------------------------------------------
// ENVIRONMENT
// --------------------------------------------------
animateHeading(".environment-heading");
animateBoxes(".environment-box");

// --------------------------------------------------
// WHY IT MATTERS
// --------------------------------------------------
animateHeading(".why-heading");
animateBoxes(".why-box");

// --------------------------------------------------
// HARMFUL
// --------------------------------------------------
animateHeading(".harmful-heading");
animateBoxes(".harmful-card", "top 85%");

// --------------------------------------------------
// PRESERVE
// --------------------------------------------------
animateHeading(".preserve-heading");

gsap.utils.toArray(".preserve-row").forEach(row => {
  gsap.from(row, {
    scrollTrigger: {
      trigger: row,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });
});
