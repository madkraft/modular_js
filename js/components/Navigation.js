// @flow

import React from 'react'

export default class Nav extends React.Component {
  render () {
    return (
      <nav id='navigation' className='top-nav top-nav-dark cf' role='navigation'>
        <input id='menu-toggle' className='menu-toggle' type='checkbox' />
        <label htmlFor='menu-toggle'>Menu</label>
        <ul className='list-unstyled list-inline cf'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/cart'>Cart</a>
          </li>
        </ul>
      </nav>
    )
  }
}
