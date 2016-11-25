import html from 'choo/html'

const ShoppingCart = (state, prev, send) => html`
  <div id="shopping-cart">
      <a id="clearCart" class='button button-large button-warn clear-cart'>Clear cart</a>
      <ul id="cartList" class="list-unstyled">
      </ul>
  </div>
`

export default ShoppingCart
