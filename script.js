const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const fadeElements = document.querySelectorAll(
  ".section, .trust, .service-card, .project, .process-grid > div, .faq-list, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

fadeElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
});

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formSuccess.classList.add("show");

    contactForm.reset();

    setTimeout(() => {
        formSuccess.classList.remove("show");
    }, 5000);

});
