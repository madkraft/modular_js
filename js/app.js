import CORE from './core/core.js'
import searchBox from './modules/search-box.js'
import filtersBar from './modules/filters-bar.js'
import productPanel from './modules/product-panel.js'
import shoppingCart from './modules/shopping-cart.js'

CORE.registerModule('search-box', searchBox)
CORE.registerModule('filters-bar', filtersBar)
CORE.registerModule('product-panel', productPanel)
CORE.registerModule('shopping-cart', shoppingCart)

CORE.startAll()
