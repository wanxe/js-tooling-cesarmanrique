import 'bulma/css/bulma.css' // importamos las hojas de estilos
import Accordion from './components/accordion'
import logger from './components/logger'

document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'http://api.icndb.com/jokes/random/5'

  logger('is loading')
  fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      Accordion.mount(response.value)
      logger('not loading')
    })
    .catch(error => {
      console.log(error)
    })
})
