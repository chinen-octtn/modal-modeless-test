const modal = () => {
  const toggle = document.querySelectorAll('.toggle')

  toggle.forEach((element) => {
    element.addEventListener('click', () => {
      const id = element.getAttribute('data-modal')
      const modal = document.querySelector(`#${id}`)
      modal?.setAttribute('aria-hidden', 'false')
    })
  })
}

const closeModal = () => {
  const close = document.querySelectorAll('.close')

  close.forEach((element) => {
    element.addEventListener('click', () => {
      const modal = document.querySelectorAll('.modal')
      modal.forEach((element) => {
        element?.setAttribute('aria-hidden', 'true')
      })
    })
  })
}

const toast = () => {
  const start = document.querySelectorAll('.start')

  start.forEach((element) => {
    element.addEventListener('click', () => {
      const toast = document.querySelector('.toast')
      toast?.classList.add('is-active')
      setTimeout(() => {
        toast?.classList.remove('is-active')
      }, 6000)
    })
  })
}

modal()
closeModal()
toast()
