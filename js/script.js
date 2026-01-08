// Reveal animation
window.addEventListener("load", () => {
  document.querySelectorAll(".animate").forEach(el => {
    el.classList.add("show");
  });
});

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Mobile Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu on link click (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
