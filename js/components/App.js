import React from 'react'

import Nav from './Navigation'

import FiltersBar from './FiltersBar'
import SearchBox from './SearchBox'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}


// <div className='container'>
//   <Auth />
//   <SearchBox />
//   <FiltersBar />
//   <ProductPanel />
//   <ShoppingCart />
// </div>