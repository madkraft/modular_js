import Core from '../core/core.js'
import Sandbox from '../sandbox.js'
import searchBox from './search-box.js'
import filtersBar from './filters-bar.js'
import productPanel from './product-panel.js'
import shoppingCart from './shopping-cart.js'

export default function Modules () {
  const CORE = Core()
  const sb = Sandbox()

  sb.createModule('search-box', searchBox)
  sb.createModule('filters-bar', filtersBar)
  sb.createModule('product-panel', productPanel)
  sb.createModule('shopping-cart', shoppingCart)

  CORE.start_all()
}
