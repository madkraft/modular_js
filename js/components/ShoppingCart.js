// @flow
import React from 'react'

export default class ShoppingCart extends React.Component {
  render () {
    return (
      <div id='shopping-cart'>
        <a id='clearCart' className='button button-large button-warn clear-cart'>Clear cart</a>
        <ul id='cartList' className='list-unstyled' />
      </div>
    )
  }
}
