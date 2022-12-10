const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation')
const auth_btn = document.querySelector('.auth_btn')
const auth_window = document.querySelector('.container')
const close = document.querySelector('.close')
burger.addEventListener('click', () => {
  nav.classList.toggle('active')
})

auth_btn.addEventListener('click', () => {
  auth_window.classList.toggle('active')
})

close.addEventListener('click', () => {
  auth_window.classList.toggle('active')
})