CORE.createModule('search-box', function (sb) {
  var input, button, reset

  function init () {
    input = sb.find('#search-input')[0]
    button = sb.find('#search-button')[0]
    reset = sb.find('#quit-search')[0]

    sb.addEvent(button, 'click', _handleSearch)
    sb.addEvent(reset, 'click', _quitSearch)
  }

  function destroy () {
    sb.removeEvent(button, 'click', _handleSearch)
    sb.removeEvent(reset, 'click', _quitSearch)
    input = button = reset = null
  }

  function _handleSearch () {
    var query = input.value
    if (query) {
      sb.notify({
        type: 'perform-search',
        data: query
      })
    }
  }

  function _quitSearch () {
    input.value = ''
    sb.notify({
      type: 'quit-search',
      data: null
    })
  }

  return {
    init: init,
    destroy: destroy
  }
})


CORE.createModule('filters-bar', function (sb) {
  var filters;

  function init () {
    filters = sb.find('a')
    sb.addEvent(filters, 'click', _filterProducts)
  }

  function destroy () {
    sb.removeEvent(filters, 'click', _filterProducts)
    filters = null
  }

  function _filterProducts (event) {
    sb.notify({
      type: 'change-filter',
      data: event.currentTarget.innerHTML
    })
  }

  return {
    init: init,
    destroy: destroy
  }
})


CORE.createModule('product-panel', function (sb) {
  var products;

  function init () {
    products = sb.find('li')
    sb.listen({
      'change-filter': _changeFilter,
      'reset-filter': reset,
      'perform-search': _search,
      'quit-search': reset
    })
    _eachProduct(function (product) {
      sb.addEvent(product, 'click', _addToCart)
    })
  }

  function destroy () {
    _eachProduct(function (product) {
      sb.removeEvent(product, 'click', _addToCart)
    })
    sb.ignore(['change-filter', 'reset-filter', 'perform-search', 'quit-search'])
  }

  function _changeFilter (filter) {
    reset()
    _eachProduct(function (product) {
      if (product.getAttribute('data-8088-keyword').toLowerCase().indexOf(filter.toLowerCase()) < 0) {
        product.style.opacity = '0.2'
      }
    })
  }

  function _search (query) {
    query = query.toLowerCase()
    _eachProduct(function (product) {
      if (product.getElementsByTagName('p')[0].innerHTML.toLowerCase().indexOf(query.toLowerCase()) < 0) {
        product.style.opacity = '0.2'
      }
    })
  }

  function _addToCart (event) {
    var li = event.currentTarget
    sb.notify({
      type: 'add-item',
      data: {
        id: li.id,
        name: li.getElementsByTagName('p')[0].innerHTML,
        price: parseInt(li.id, 10)
      }
    })
  }

  function _eachProduct (fn) {
    products.forEach(function (product) {
      fn(product)
    })
  }

  function reset () {
    _eachProduct(function (product) {
      product.style.opacity = '1';
    })
  }

  return {
    init: init,
    destroy: destroy,
    reset: reset
  }
})


CORE.createModule('shopping-cart', function (sb) {
  var cart, cartItems

  function init () {
    cart = sb.find('ul')[0]
    cartItems = {}
    sb.listen({
      'add-item': addItem
    })
  }

  function destroy () {
    cart = cartItems = null
    sb.ignore(['add-item'])
  }

  function addItem (product) {
    var entry
    entry = sb.find('#cart-' + product.id + ' .quantity')[0]
    if (entry) {
      entry.innerHTML = parse(entry.innerHTML, 10) + 1;
      cartItems[product.id]++
    } else {
      entry = sb.createElement('li', {
        id: 'cart-' + product.id,
        children: [
          sb.createElement('span', {
            'class': 'product_name',
            'text': product.name
          }),
          sb.createElement('span', {
            'class': 'quantity',
            'text': '1'
          }),
          sb.createElement('span', {
            'class': 'price',
            'text': product.id
          })
        ],
        'class': 'cart_entry'
      })

      cart.appendChild(entry)
      cartItems[product.id] = 1
    }
  }

  return {
    init: init,
    destroy: destroy,
    addItem: addItem
  }
})