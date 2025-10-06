// ---------------- HAMBURGER MENU ----------------
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ---------------- ANIMATIONS ----------------
  const faders = document.querySelectorAll(".card, .gallery img, section h2");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
// Form Interactivity
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");  
const statusMessage = document.getElementById("status-message");
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  let valid = true;
  statusMessage.textContent = ""; 
  statusMessage.className = "";
  if (nameInput.value.trim() === "") {
    valid = false;
    nameInput.classList.add("error");
    statusMessage.textContent += "Please enter your name. ";
  } else {
    nameInput.classList.remove("error");
  } 
  if (!emailInput.value.match(emailPattern)) {
    valid = false;
    emailInput.classList.add("error");
    statusMessage.textContent += "Please enter a valid email address. ";
  } else {
    emailInput.classList.remove("error");
  }         
  if (messageInput.value.trim() === "") {
    valid = false;
    messageInput.classList.add("error");
    statusMessage.textContent += "Please enter your message.";
    } else {
      messageInput.classList.remove("error");
    } 
  });
  form.addEventListener("hover", function(event) {
    colour = "blue";
    event.target.style.borderColor = colour;
  });
  form.addEventListener("mouseout", function(event) {
    colour = "blue";
    event.target.style.borderColor = colour;
  });