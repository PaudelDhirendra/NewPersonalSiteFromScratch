
// Close Navigation on CLicking anywhere
window.onload = function() {
  document.addEventListener("click", function(event) {
    // Check if the clicked element is within the navbar or the nav links
    if (!event.target.closest("#navbar_id") && !event.target.closest("#nav-list")) {
      // Check if the navbar is open
      if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
        document.getElementById("hamburger_menu_button").click();
      }
    }
  });
  
  // Navbar Collapse on clicking nav items
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse.classList.contains("show")) {
        document.getElementById("hamburger_menu_button").click();
      }
    });
  });
};
