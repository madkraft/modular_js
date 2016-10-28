import dom from '../core/dom.js'
import pubsub from '../core/pubsub.js'


export default function shoppingCart (sb) {
  const DOM = dom();
  const PUBSUB = pubsub();
  var name = 'shopping-cart'

  let cart = DOM.query('#' + name).query('ul')[0]
  let cartItems = {}

  function init () {
    cartItems = {}
    PUBSUB.registerEvents({
      'add-item': addItem
    }, name)
  }

  function destroy () {
    cart = null
    cartItems = null
    PUBSUB.removeEvents(['add-item'], name)
  }

  function addItem (product) {
    var entry = DOM.query('#cart-' + product.id + ' .quantity')[0]
    if (entry) {
      entry.innerHTML = (parseInt(entry.innerHTML, 10) + 1)
      cartItems[product.id]++;
    } else {
      entry = DOM.create_element('li', {
        id: 'cart-' + product.id,
        children: [
          DOM.create_element('span', {
            'class': 'product_name',
            text: product.name
          }),
          DOM.create_element('span', {
            'class': 'quantity',
            text: '1'
          }),
          DOM.create_element('span', {
            'class': 'price',
            text: '$' + product.price.toFixed(2)
          })
        ],
        'class': 'cart_entry'
      })

      cart.appendChild(entry)
      cartItems[product.id] = 1
    }
  }

  return {
    init,
    destroy,
    addItem
  }
}
