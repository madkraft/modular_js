import Core from '../core/core.js'
import searchBox from './search-box.js'
import filtersBar from './filters-bar.js'
import productPanel from './product-panel.js'
import shoppingCart from './shopping-cart.js'

export default function Modules () {
  CORE.registerModule('search-box', searchBox)
  CORE.registerModule('filters-bar', filtersBar)
  CORE.registerModule('product-panel', productPanel)
  CORE.registerModule('shopping-cart', shoppingCart)

  CORE.start_all()
  // CORE.start('search-box')
}
