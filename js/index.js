import '../styles/index.styl'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import AppStore from './app.store'
import { categoriesReducer, initialCategories } from './app.state'

const store = new AppStore(categoriesReducer, initialCategories)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
