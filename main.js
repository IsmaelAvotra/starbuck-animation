function imgSlider(anything) {
  document.querySelector('.starbucks').src = anything
}

function changeColor(color) {
  const circle = document.querySelector('.circle')
  const sci = document.querySelector('.sci')
  circle.style.backgroundColor = color
  sci.style.backgroundColor = color
}

function toggleMenu() {
  const menu = document.querySelector('.toggle')
  const navigation = document.querySelector('.navigation')
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}
