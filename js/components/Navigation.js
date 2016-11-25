import React from 'react'

export default class Nav extends React.Component {
  render () {
    const {store} = this.props

    return (
      <nav id='navigation' className='top-nav top-nav-dark cf' role='navigation'>
        <input id='menu-toggle' className='menu-toggle' type='checkbox' />
        <label htmlFor='menu-toggle'>Menu</label>
        <ul className='list-unstyled list-inline cf'>
          {store.state.map(link => {
            return (
              <li key={link.id}>
                <a href='/'>{link.name}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
