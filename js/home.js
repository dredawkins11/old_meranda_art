//Get any containers of art images
let artColumns = [...document.getElementsByClassName("main-content__recent-works-column")]

setInterval(() => {
  for (let columnNumber = 0; columnNumber < artColumns.length; columnNumber++) {
    const column = artColumns[columnNumber];
    console.log(column)
    
    for (let artworkNumber = 0; artworkNumber < column.childElementCount; artworkNumber++) {
      const wrapper = column.children[artworkNumber];
      const image = wrapper.children[0]
      const cover = wrapper.children[1]
  
      let imgHeight = image.offsetHeight
      let imgWidth = image.offsetWidth
      console.log(`${imgWidth} ,${imgHeight}`)
  
      cover.style.width = `${imgWidth}px`
      cover.style.height = `${imgHeight}px`
    }
  }

}, 100)
