// @flow
import React from 'react'

export default class FiltersBar extends React.Component {
  render () {
    return (
      <div id='filters-bar'>
        <ul>
          <li><a className='filter' data-filter='red' href='#red'>Red</a></li>
          <li><a className='filter' data-filter='blue' href='#blue'>Blue</a></li>
          <li><a className='filter' data-filter='mobile' href='#mobile'>Mobile</a></li>
          <li><a className='filter' data-filter='accessory' href='#accessory'>Accessory</a></li>
          <li><a className='filter' data-filter='all' href='#all'>All</a></li>
        </ul>
      </div>
    )
  }
}
