document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle")
  const mobileNav = document.getElementById("mobileNav") // optional if you have one

  // Toggle mobile menu
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation()
      menuToggle.classList.toggle("active")
      mobileNav.classList.toggle("active")
    })
  }

  // Handle dropdown toggles
  const dropdowns = document.querySelectorAll(".dropdown > a")
  dropdowns.forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", (event) => {
      event.preventDefault()
      event.stopPropagation()
      const parent = dropdownToggle.parentElement
      parent.classList.toggle("open")

      // close other open dropdowns
      document.querySelectorAll(".dropdown.open").forEach((el) => {
        if (el !== parent) el.classList.remove("open")
      })
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open").forEach((el) => {
      el.classList.remove("open")
    })
  })
})
