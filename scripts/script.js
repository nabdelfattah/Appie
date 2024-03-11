const headerEl = document.querySelector(".header");
const openNavBtn = document.querySelector("[name='menu-outline']");
const closeNavBtn = document.querySelector("[name='close-outline']");
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


// FIXING FLEXBOX GAP PROPERTY IN SOME SAFARI VERSIONS
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  if (!isSupported) document.body.classList.add("no-flex-gap");
}
checkFlexGap();

// SET CURRENT YRAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

document.querySelector('.hero-form').addEventListener('submit', e => e.preventDefault())