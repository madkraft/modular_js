import html from 'choo/html'
import Navigation from '../components/navigation'
import Authentication from '../components/auth'
import FiltersBar from '../components/filters-bar'
import ProductPanel from '../components/product-panel'
import SearchBox from '../components/search-box'
import ShoppingCart from '../components/shopping-cart'

const mainView = (state, prev, send) => html`
  <div>
    ${Navigation(state, send)}
    <div className="container">
      ${Authentication(state, send)}
      ${SearchBox(state, send)}
      ${FiltersBar(state, send)}
      ${ProductPanel(state, send)}
      ${ShoppingCart(state, send)}
    </div>
  </div>
`

export default mainView
