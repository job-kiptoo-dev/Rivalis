document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle")
  const mobileNav = document.getElementById("mobileNav")

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    mobileNav.classList.toggle("active")
  })

  // Close mobile menu when a link is clicked
  const navLinks = mobileNav.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active")
      mobileNav.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = mobileNav.contains(event.target)
    const isClickOnToggle = menuToggle.contains(event.target)

    if (!isClickInsideNav && !isClickOnToggle && mobileNav.classList.contains("active")) {
      menuToggle.classList.remove("active")
      mobileNav.classList.remove("active")
    }
  })
})
