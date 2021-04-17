let menuButton = document.getElementById("navbar__dropdown-button")
let isMenuOpen = false

menuButton.addEventListener("click", (e) => {toggleDropdown(e)})

function toggleDropdown(e) {
  let tl = gsap.timeline()

  if (isMenuOpen) {
    tl.to("#navbar__dropdown", {height: 0, duration: .2})
    isMenuOpen = false
  } else {
    tl.to("#navbar__dropdown", {height: 400, duration: .2})
    isMenuOpen = true
  }
}