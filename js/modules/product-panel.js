export default function productPanel (sb) {
  var products

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
    products = sb.find('li')
    sb.listen({
      'change-filter': change_filter,
      'reset-fitlers': reset,
      'perform-search': search,
      'quit-search': reset
    })

    eachProduct(function (product) {
      sb.addEvent(product, 'click', addToCart)
    })
  }

  function destroy () {
    eachProduct(function (product) {
      sb.removeEvent(product, 'click', addToCart)
    })
    sb.ignore(['change-filter', 'reset-filters', 'perform-search', 'quit-search'])
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
    sb.notify({
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
