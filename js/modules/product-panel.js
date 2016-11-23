import dom from '../core/dom'
import events from '../core/pubsub'

export default function productPanel (sb) {
  const DOM = dom()

  let products
  let name = 'product-panel'

  function reset () {
    products.map(product => {
      product.style.opacity = '1'
    })
  }

  function init () {
    products = DOM.query('#product-panel').query('a')
    events.on('change-filter', changeFilter)
    events.on('reset-fitlers', reset)
    events.on('perform-search', search)
    events.on('quit-search', reset)
    products.map(product => DOM.bind(product, 'click', addToCart))
  }

  function destroy () {
    products.map(product => DOM.unbind(product, 'click', addToCart))
    events.off('change-filter', changeFilter)
    events.off('reset-fitlers', reset)
    events.off('perform-search', search)
    events.off('quit-search', reset)
  }

  function search (payload) {
    reset(products)
    let query = payload.data.toLowerCase()
    products.map(product => {
      if (product.innerHTML.toLowerCase().indexOf(query) < 0) {
        product.style.opacity = '0.2'
      }
    })
  }

  function changeFilter (payload) {
    reset(products)

    products.map(product => {
      if (product.getAttribute('data-8088-keyword').toLowerCase().indexOf(payload.data.toLowerCase()) < 0) {
        product.style.opacity = '0.2'
      }
    })
    
    if (payload.data === 'all') {
      reset(products)
    }
  }

  function addToCart (e) {
    let target = e.currentTarget
    events.emit('add-item', {
      id: target.id,
      name: target.innerHTML,
      price: parseInt(target.id, 10)
    })
  }

  return {
    reset,
    init,
    destroy,
    search,
    changeFilter,
    addToCart
  }
}
