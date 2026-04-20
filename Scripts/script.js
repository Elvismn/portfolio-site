// ==================== HAMBURGER MENU ====================
// Toggles mobile navigation menu on click
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      // Optional: Add animation to hamburger icon
      hamburger.classList.toggle("active");
    });
  }

  // ==================== SCROLL ANIMATIONS ====================
  // Adds fade-in effect to cards, sections, and headings as they scroll into view
  const animatedElements = document.querySelectorAll(
    ".card, .project-card, .project-card-enhanced, .affiliation-card, .service-card, .strength-card, .value-card, .involvement-card, .interest-card, .timeline-card, .contact-card, .social-card, .stat-card, .skill-category, section h2"
  );

  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  animatedElements.forEach(element => {
    appearOnScroll.observe(element);
  });

  // ==================== NAVIGATION ACTIVE STATE ====================
  // Highlights the current page in the navigation menu
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinksItems = document.querySelectorAll(".nav-links a");
  
  navLinksItems.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // ==================== AFFILIATIONS GALLERY IMAGE STYLING ====================
  // Ensures all affiliation images maintain consistent sizing
  const affiliationImages = document.querySelectorAll(".affiliation-card img, .mini-affiliation img");
  
  affiliationImages.forEach(img => {
    img.style.width = "auto";
    img.style.maxWidth = "140px";
    img.style.height = "140px";
    img.style.objectFit = "contain";
  });

  // ==================== PROJECT IMAGE FALLBACK ====================
  // Adds placeholder styling for missing project images
  const projectImages = document.querySelectorAll(".project-image img");
  
  projectImages.forEach(img => {
    img.addEventListener("error", function() {
      this.style.display = "none";
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder-fallback";
      placeholder.innerHTML = '<span>🖼️</span><p>Image Coming Soon</p>';
      placeholder.style.cssText = `
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #f5f7fa 0%, #fff 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ff9800;
      `;
      this.parentNode.appendChild(placeholder);
    });
  });

  // ==================== SMOOTH SCROLLING ====================
  // Adds smooth scroll behavior for anchor links (if any exist)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ==================== ADD CSS FOR APPEAR ANIMATION ====================
  // Dynamically add the animation styles if they don't exist
  if (!document.querySelector("#appear-styles")) {
    const styleSheet = document.createElement("style");
    styleSheet.id = "appear-styles";
    styleSheet.textContent = `
      .card, .project-card, .project-card-enhanced, .affiliation-card, 
      .service-card, .strength-card, .value-card, .involvement-card, 
      .interest-card, .timeline-card, .contact-card, .social-card, 
      .stat-card, .skill-category, section h2 {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .card.appear, .project-card.appear, .project-card-enhanced.appear, 
      .affiliation-card.appear, .service-card.appear, .strength-card.appear, 
      .value-card.appear, .involvement-card.appear, .interest-card.appear, 
      .timeline-card.appear, .contact-card.appear, .social-card.appear, 
      .stat-card.appear, .skill-category.appear, section h2.appear {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Active navigation link styling */
      .nav-links a.active {
        color: #ff9800;
        border-bottom: 2px solid #ff9800;
        padding-bottom: 2px;
      }
    `;
    document.head.appendChild(styleSheet);
  }
});

// ==================== HAMBURGER MENU CLOSE ON LINK CLICK ====================
// Automatically closes mobile menu when a link is clicked
document.addEventListener("click", function(e) {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  
  if (navLinks && navLinks.classList.contains("active")) {
    // Check if click is outside the menu and not on hamburger
    if (!navLinks.contains(e.target) && !hamburger?.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger?.classList.remove("active");
    }
  }
});

// ==================== RESPONSIVE IMAGE HANDLING ====================
// Ensures gallery images are properly sized on window resize
window.addEventListener("resize", function() {
  const affiliationImages = document.querySelectorAll(".affiliation-card img, .mini-affiliation img");
  
  if (window.innerWidth <= 768) {
    affiliationImages.forEach(img => {
      img.style.maxWidth = "100px";
      img.style.height = "100px";
    });
  } else {
    affiliationImages.forEach(img => {
      img.style.maxWidth = "140px";
      img.style.height = "140px";
    });
  }
});

// Trigger resize event on load to set initial sizes
window.dispatchEvent(new Event("resize"));