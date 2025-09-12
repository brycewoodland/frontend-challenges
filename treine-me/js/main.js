// Select all nav links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Remove active from all
    navLinks.forEach(l => l.classList.remove("active"));

    // Add active to clicked one
    link.classList.add("active");
  });
});

// Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".main-nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");

  // Prevent scrolling
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
