// @flow

import React from 'react'
import Nav from './Navigation'
import Auth from './Auth'
import FiltersBar from './FiltersBar'
import ProductPanel from './ProductPanel'
import SearchBox from './SearchBox'
import ShoppingCart from './ShoppingCart'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <Auth />
          <SearchBox />
          <FiltersBar />
          <ProductPanel />
          <ShoppingCart />
        </div>
      </div>
    )
  }
}
