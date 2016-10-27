import dom from '../core/dom.js'
import pubsub from '../core/pubsub.js'


export default function productPanel (sb) {
  const DOM = dom();
  const PUBSUB = pubsub();

  var products
  var name = 'product-panel'

  function eachProduct (fn) {
    var i = 0
    var product

    for ( ; product = products[i++]; ) {
      fn(product)
    }
  }

  function reset () {
    eachProduct(function (product) {
      product.style.opacity = '1'
    })
  }

  function init () {
    products = DOM.query('li')
    PUBSUB.registerEvents({
      'change-filter': change_filter,
      'reset-fitlers': reset,
      'perform-search': search,
      'quit-search': reset
    }, name)

    eachProduct(function (product) {
      DOM.bind(product, 'click', addToCart)
    })
  }

  function destroy () {
    eachProduct(function (product) {
      DOM.unbind(product, 'click', addToCart)
    })
    PUBSUB.removeEvents(['change-filter', 'reset-filters', 'perform-search', 'quit-search'], name)
  }

  function search (query) {
    reset()
    query = query.toLowerCase()
    eachProduct(function (product) {
      if (product.getElementsByTagName('p')[0].innerHTML.toLowerCase().indexOf(query) < 0) {
        product.style.opacity = '0.2'
      }
    })
  }

  function change_filter (filter) {
    reset()
    eachProduct(function (product) {
      if (product.getAttribute('data-8088-keyword').toLowerCase().indexOf(filter.toLowerCase()) < 0) {
        product.style.opacity = '0.2'
      }
    })
  }

  function addToCart (e) {
    var li = e.currentTarget
    PUBSUB.triggerEvent({
      type: 'add-item',
      data: {
        id: li.id,
        name: li.getElementsByTagName('p')[0].innerHTML,
        price: parseInt(li.id, 10)
      }
    })
  }

  return {
    reset,
    init,
    destroy,
    search,
    change_filter,
    addToCart
  }
}
