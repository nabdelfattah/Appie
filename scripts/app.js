import { clickPricingBtnHandler } from "./handlers.js";
import { delayedObserver, initObserver } from "./observer.js"

const headerEl = document.querySelector(".main-header");
const openNavBtn = document.querySelector(".menu-open");
const closeNavBtn = document.querySelector(".menu-close");
const sectionHeroEl = document.querySelector(".section-hero");

// STICKY NAVIGATION
const optionObj = { root: null, threshold: 0, rootMargin: "-80px",}
function callback(entries) {
  const ent = entries[0];
  if (!ent.isIntersecting)  document.body.classList.add("sticky"); 
  else if (!document.querySelector('.open-nav')) document.body.classList.remove("sticky");
}
const observer = new IntersectionObserver(callback, optionObj);
observer.observe(sectionHeroEl);

// MOBIL NAVIGATION
function isInHeroSection() {
  const heroRect = sectionHeroEl.getBoundingClientRect();
  const isInViewport = heroRect.top >= 0 && heroRect.top <= window.innerHeight
  return isInViewport;
}
openNavBtn.addEventListener("click", function () {
  headerEl.classList.add("open-nav");
  document.body.classList.add("sticky");
});
closeNavBtn.addEventListener("click", function () {
  headerEl.classList.remove("open-nav");
  if (isInHeroSection()) document.body.classList.remove("sticky");
});

// SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("open-nav");
    }
  });
});

// Apply Active Style to Navigation Links Based on Section Visibility
function sectionObserver() {
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });
  function cb(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove the active class from the previously active navigation link
        document.querySelector(`#${entry.target.id}-navLink`).classList.add('main-nav-link--active')
      }
      else {
        document.querySelector(`#${entry.target.id}-navLink`).classList.remove('main-nav-link--active')
      }
    });
  } 
  const elements = document.querySelectorAll('.section')
  // if multiple elements are passed; observe each one individually
  if (elements.length) elements.forEach((el) => observer.observe(el));
  // If a single element is passed, observe it directly
  else observer.observe(elements);
}
sectionObserver();

// SET CURRENT YRAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// PREVENT PAGE REFRESH AFTER SUBMITTING FORMS
document.querySelector('.hero-form').addEventListener('submit', e => e.preventDefault())


// PRICING SECTION'S BUTTONS
document.querySelectorAll('.pricing-tag').forEach(btn => {
  btn.addEventListener('click', clickPricingBtnHandler)
})

// ANIMATIONS

// Animate numeric value DOM element from a start value to an end value over a specified duration.
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  window.requestAnimationFrame(step);
  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
}
// Apply animation when element observed on screen
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateValue(entry.target, 1, +entry.target.textContent, 5000);
      observer.unobserve(entry.target)
    }
  });
}, { threshold: 0.1 });
// apply on hero section's feedback counter
counterObserver.observe(document.querySelector('.hero-counter'))
// apply on section statistics
document.querySelectorAll('.data-point strong').forEach(el => counterObserver.observe(el))

// OBSERVER
initObserver(document.querySelectorAll('.main-nav-link'), 'show', 0.5);
initObserver(document.querySelectorAll('.hero-text-box'), 'show', 0.5);
initObserver(document.querySelectorAll('.hero-img-box'), 'show', 0.5);
initObserver(document.querySelectorAll('.header-secondary'), 'show', 0.5);
initObserver(document.querySelectorAll('.feature'), 'show', 0.5);
initObserver(document.querySelectorAll('.feature:nth-child(even)'), 'show', 0.5);
initObserver(document.querySelectorAll('.marketing-box'), 'show', 0.5);
initObserver(document.querySelectorAll('.marketing-item .icon'), 'enlarge', 0.5);
initObserver(document.querySelectorAll('.header'), 'show', 0.5);
delayedObserver(document.querySelectorAll('.event-item'), 'show', 0.5);
initObserver(document.querySelectorAll('.events-img-box'), 'show', 0.5);
delayedObserver(document.querySelectorAll('.statistic div'), 'show', 0.5);
initObserver(document.querySelectorAll('.learn-img-box'), 'show', 0.5);
initObserver(document.querySelectorAll('.learn-text-box'), 'show', 0.5);
initObserver(document.querySelectorAll('.section-download .container'), 'show', 0.5);
initObserver(document.querySelectorAll('.fresh'), 'show', 0.3);
initObserver(document.querySelectorAll('.sweet'), 'show', 0.3);
initObserver(document.querySelectorAll('.juicy'), 'show', 0.3);
initObserver(document.querySelectorAll('.testimonial'), 'show', 0.5);
delayedObserver(document.querySelectorAll('.sponser-img-t'), 'show', 0.5);
delayedObserver(document.querySelectorAll('.sponser-img-b'), 'show', 0.5);
delayedObserver(document.querySelectorAll('.footer-nav div'), 'show', 0.5);
initObserver(document.querySelectorAll('.footer-downloads'), 'show', 0.2);
initObserver(document.querySelectorAll('.feature-description'), 'show', 0.2);
