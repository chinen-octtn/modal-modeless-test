import { hello } from '../../_module/_hello'

hello('Hello World')

const toggle = document.querySelectorAll('.toggle')
console.log('aaa')

toggle.forEach((element) => {
  element.addEventListener('click', () => {
    const id = element.getAttribute('data-modal')
    const modal = document.querySelector(`#${id}`)
    const state = Boolean(modal?.getAttribute('aria-hidden'))
    modal?.setAttribute('aria-hidden', 'false')
    console.log(modal)
  })
})

const close = document.querySelectorAll('.close')

close.forEach((element) => {
  element.addEventListener('click', () => {
    const modal = document.querySelectorAll('.modal')
    modal.forEach((element) => {
      element?.setAttribute('aria-hidden', 'true')
    })
  })
})
const start = document.querySelectorAll('.start')

start.forEach((element) => {
  element.addEventListener('click', () => {
    const toast = document.querySelector('.toast')
    console.log(toast)
    toast?.classList.add('is-active')
    setTimeout(() => {
      toast?.classList.remove('is-active')
    }, 6000)
  })
})
