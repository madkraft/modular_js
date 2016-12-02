import React, { Component } from 'react'
import ProductPanel from '../components/ProductPanel'
import FiltersBar from '../components/FiltersBar'
import SearchBox from '../components/SearchBox'

export default class ProductsPage extends Component {
  render () {
    return (
      <div>
        <FiltersBar />
        <SearchBox />
        <ProductPanel />
      </div>
    )
  }
}
