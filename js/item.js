let selectorButtons = [...document.getElementsByClassName("item-selector")]
selectorButtons[0].classList.add('active-item')
console.log(selectorButtons)

for (let i = 0; i < selectorButtons.length; i++) {
  const button = selectorButtons[i];
  button.addEventListener("click", (e) => { selectorAnimations(e) } )
}

function selectorAnimations(e) {
  let inactiveButtons = selectorButtons.filter(button => button != e.target)
  inactiveButtons.forEach(button => {
    button.classList.remove("active-item")
  });

  e.target.classList.add("active-item")
}