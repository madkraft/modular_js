import React from 'react'
import Nav from './Navigation'
import Auth from './Auth'
import FiltersBar from './FiltersBar'
import ProductPanel from './ProductPanel'
import SearchBox from './SearchBox'
import ShoppingCart from './ShoppingCart'

export default class App extends React.Component {
  render () {
    const {store} = this.props

    return (
      <div>
        <Nav store={store} />
        <div className='container'>
          <Auth />
          <SearchBox />
          <FiltersBar store={store} />
          <ProductPanel />
          <ShoppingCart />
        </div>
      </div>
    )
  }
}
