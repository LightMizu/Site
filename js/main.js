const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation')
const auth_btn = document.querySelector('.auth_btn')
const auth_window = document.querySelector('.auth')
const auth_close = document.querySelector('.auth .close')
const reg_btn = document.querySelector('.no_acc')
const reg_window = document.querySelector('.register')
const reg_close = document.querySelector('.register .close')
burger.addEventListener('click', () => {
  nav.classList.toggle('active')
})

auth_btn.addEventListener('click', () => {
  auth_window.classList.toggle('active')
})

auth_close.addEventListener('click', () => {
  auth_window.classList.toggle('active')
})

reg_btn.addEventListener('click', () => {
  auth_window.classList.toggle('active')
  reg_window.classList.toggle('active')
})

reg_close.addEventListener('click', () => {
  reg_window.classList.toggle('active')
})