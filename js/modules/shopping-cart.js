import dom from '../core/dom'
import events from '../core/pubsub2'

export default function shoppingCart (sb) {
  const DOM = dom()
  var name = 'shopping-cart'

  let cart = DOM.query('#' + name).query('ul')[0]
  let cartItems = {}

  function init () {
    cartItems = {}
    events.on('add-item', addItem)
  }

  function destroy () {
    cart = null
    cartItems = null
    events.off('add-item', addItem)
  }

  function addItem (payload) {
    var entry = DOM.query('#cart-' + payload.id + ' .quantity')[0]
    if (entry) {
      entry.innerHTML = (parseInt(entry.innerHTML, 10) + 1)
      cartItems[payload.id]++
    } else {
      entry = DOM.createElement('li', {
        id: 'cart-' + payload.id,
        children: [
          DOM.createElement('span', {
            'class': 'product_name',
            text: payload.name
          }),
          DOM.createElement('span', {
            'class': 'quantity',
            text: '1'
          }),
          DOM.createElement('span', {
            'class': 'price',
            text: '$' + payload.price.toFixed(2)
          })
        ],
        'class': 'cart_entry'
      })

      cart.appendChild(entry)
      cartItems[payload.id] = 1
    }
  }

  return {
    init,
    destroy,
    addItem
  }
}
