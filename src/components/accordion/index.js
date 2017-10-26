import './style.css'

export default {
  mount (items) {
    // Buscamos tags donde anclar nuestros htmls
    const accordionHtmlTags = document.querySelectorAll('accordion')
    // Imprime el html
    this.printHTML(accordionHtmlTags, items)
    // Le añadimos los eventos
    this.attachEvents()
  },
  printHTML (anchor, elements) {
    anchor.forEach(accordion => {
      const accordionItems = elements.map(item =>
        `
          <div class='box accordion-item'>
            <button class='trigger is-block'>Joke-${item.id}</button>
            <div class='accordion--content'>
              <p>
                ${item.joke}
              </p>
            </div>
          </div>
        `)
        .join('')
      accordion.innerHTML = this.getHeader() + `<div class="container-fluid">${accordionItems}</div>`
    })
  },
  attachEvents () {
    const triggers = document.querySelectorAll('.accordion-item .trigger')
    triggers.forEach(trigger => trigger.addEventListener('click', this.handleClick))
  },
  handleClick (e) {
    // https://javascript.info/bubbling-and-capturing
    e.stopImmediatePropagation()

    this.classList.toggle('is-open')
    const content = this.nextElementSibling
    const isOpen = content.style.maxHeight
    if (isOpen) {
      content.style.maxHeight = null
    }
    if (!isOpen) {
      content.style.maxHeight = `${content.scrollHeight}px`
    }
  },
  getHeader () {
    return `
      <section class="hero is-dark is-bold">
        <div class="hero-body">
          <h1 class="title">Mi primer componente</h1>
          <h2 class="subtitle">El acordeón</h2>
        </div>
      </section>
    `
  }
}
