import Core from '../core.js'
import searchBox from './search-box.js'
import filtersBar from './filters-bar.js'
import productPanel from './product-panel.js'
import shoppingCart from './shopping-cart.js'

export default function Modules () {
  const CORE = Core()

  CORE.create_module('search-box', searchBox)
  CORE.create_module('filters-bar', filtersBar)
  CORE.create_module('product-panel', productPanel)
  CORE.create_module('shopping-cart', shoppingCart)

  CORE.start_all()
}
