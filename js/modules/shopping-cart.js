export default function shoppingCart (sb) {
  let cart = sb.find('ul')[0]
  let cartItems = {}

  function init () {
    cartItems = {}
    sb.listen({
      'add-item': addItem
    })
  }

  function destroy () {
    cart = null
    cartItems = null
    sb.ignore(['add-item'])
  }

  function addItem (product) {
    var entry = sb.find('#cart-' + product.id + ' .quantity')[0]
    if (entry) {
      entry.innerHTML = (parseInt(entry.innerHTML, 10) + 1)
      cartItems[product.id]++;
    } else {
      entry = sb.create_element('li', {
        id: 'cart-' + product.id,
        children: [
          sb.create_element('span', {
            'class': 'product_name',
            text: product.name
          }),
          sb.create_element('span', {
            'class': 'quantity',
            text: '1'
          }),
          sb.create_element('span', {
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
