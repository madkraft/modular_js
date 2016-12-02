import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  constructor () {
    super()

    this.state = {
      links: [
        {id: 0, name: 'Home', path: '/'},
        {id: 1, name: 'My Cart', path: 'cart'},
        {id: 2, name: 'Login', path: 'login'}
      ]
    }
  }

  render () {
    return (
      <nav id='navigation' className='top-nav top-nav-dark cf' role='navigation'>
        <input id='menu-toggle' className='menu-toggle' type='checkbox' />
        <label htmlFor='menu-toggle'>Menu</label>
        <ul className='list-unstyled list-inline cf'>
          {this.state.links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
                <a href='/'></a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
