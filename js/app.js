// import '../styles/index.styl'
// import firebase from 'firebase'
// import config from './config'

// import CORE from './core/core.js'
// import searchBox from './modules/search-box.js'
// import filtersBar from './modules/filters-bar.js'
// import productPanel from './modules/product-panel.js'
// import shoppingCart from './modules/shopping-cart.js'
// import auth from './modules/auth'

// firebase.initializeApp(config)

// CORE.registerModule('search-box', searchBox)
// CORE.registerModule('filters-bar', filtersBar)
// CORE.registerModule('product-panel', productPanel)
// CORE.registerModule('shopping-cart', shoppingCart)
// CORE.registerModule('authentication', auth)

// CORE.startAll()



import '../styles/index.styl'
import choo from 'choo'
import firebase from 'firebase'
import config from './config'

import mainView from './views/mainView'
import cart from './views/cart'

firebase.initializeApp(config)
const app = choo()

app.model({
  state: { title: 'Not quite set yet' },
  reducers: {
    update: (data, state) => ({ title: data })
  }
})


app.router('/', (route) => [
  route('/', mainView),
  route('/cart', cart)
])

const tree = app.start()
const root = document.getElementById('root')
root.appendChild(tree)
