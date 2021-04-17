//Get any containers of art images
let artColumns = [...document.getElementsByClassName("main-content__gallery-column")]

//Constantly update image covers to match dimensions of images
setInterval(() => {
  for (let columnNumber = 0; columnNumber < artColumns.length; columnNumber++) {
    const column = artColumns[columnNumber];
    
    for (let artworkNumber = 0; artworkNumber < column.childElementCount; artworkNumber++) {
      const wrapper = column.children[artworkNumber];
      const image = wrapper.children[0]
      const cover = wrapper.children[1]
  
      let imgHeight = image.offsetHeight
      let imgWidth = image.offsetWidth
  
      cover.style.width = `${imgWidth}px`
      cover.style.height = `${imgHeight}px`
    }
  }

}, 100)

let galleryMenuButtons = [...document.getElementsByClassName("main-content__gallery-menu__button")]
console.log(galleryMenuButtons)

for (let i = 0; i < galleryMenuButtons.length; i++) {
  const button = galleryMenuButtons[i];
  button.addEventListener("click", (e) => { galleryMenuAnimations(e) } )
}

function galleryMenuAnimations(e) {
  let inactiveButtons = galleryMenuButtons.filter(button => button != e.target)
  inactiveButtons.forEach(button => {
    button.classList.remove("active-light-button")
  });

  e.target.classList.add("active-light-button")
}