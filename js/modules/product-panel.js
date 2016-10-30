import dom from '../core/dom.js'
import pubsub from '../core/pubsub.js'

export default function productPanel (sb) {
  const DOM = dom()
  const PUBSUB = pubsub()

  var products
  var name = 'product-panel'

  function reset () {
    products.map(product => {
      product.style.opacity = '1'
    })
  }

  function init () {
    products = DOM.query('#product-panel').query('a')
    PUBSUB.registerEvents({
      'change-filter': changeFilter,
      'reset-fitlers': reset,
      'perform-search': search,
      'quit-search': reset
    }, name)

    products.map(product => DOM.bind(product, 'click', addToCart))
  }

  function destroy () {
    products.map(product => DOM.unbind(product, 'click', addToCart))
    PUBSUB.removeEvents(['change-filter', 'reset-filters', 'perform-search', 'quit-search'], name)
  }

  function search (query) {
    reset(products)
    query = query.toLowerCase()
    products.map(product => {
      if (product.innerHTML.toLowerCase().indexOf(query) < 0) {
        product.style.opacity = '0.2'
      }
    })
  }

  function changeFilter (filter) {
    reset(products)
    products.map(product => {
      if (product.getAttribute('data-8088-keyword').toLowerCase().indexOf(filter.toLowerCase()) < 0) {
        product.style.opacity = '0.2'
      }
    })
  }

  function addToCart (e) {
    var target = e.currentTarget
    PUBSUB.triggerEvent({
      type: 'add-item',
      data: {
        id: target.id,
        name: target.innerHTML,
        price: parseInt(target.id, 10)
      }
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
