import './style.css'

export default {
  init () {
    // buscamos todos los disparadores que en este caso serán los botones dentro de accordion-item
    const triggers = document.querySelectorAll('.accordion-item .trigger')
    // ahora debemos escuchar evento click de cada uno de ellos
    triggers.forEach(trigger => trigger.addEventListener('click', this.handleClick))
  },
  handleClick (e) {
    e.stopImmediatePropagation()
    const button = this
    button.classList.toggle('open')
    const content = button.nextElementSibling
    const isOpened = content.style.maxHeight

    // en caso de que tenga maxheight querrá decir
    // que está abierto
    if (isOpened) {
      // lo debemos cerrar
      content.style.maxHeight = null
    }

    if (!isOpened) {
      // lo abrimos
      content.style.maxHeight = `${content.scrollHeight}px`
    }
  }
}
