import '../styles/index.styl'
import firebase from 'firebase'
import config from './config'

import CORE from './core/core.js'
import searchBox from './modules/search-box.js'
import filtersBar from './modules/filters-bar.js'
import productPanel from './modules/product-panel.js'
import shoppingCart from './modules/shopping-cart.js'
import auth from './modules/auth'

firebase.initializeApp(config)

CORE.registerModule('search-box', searchBox)
CORE.registerModule('filters-bar', filtersBar)
CORE.registerModule('product-panel', productPanel)
CORE.registerModule('shopping-cart', shoppingCart)
CORE.registerModule('authentication', auth)

CORE.startAll()
