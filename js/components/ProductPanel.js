import React from 'react'
import { Link } from 'react-router'

export default class ProductPanel extends React.Component {
  render () {
    return (
      <div id='product-panel'>
        <ul className='grid-flex-container'>
          <li className='grid-flex-cell-1of3'>
            <Link to='/product/1' className='button button-outlined' id='1' data-8088-keyword='red'>First Item</Link>
          </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='2' data-8088-keyword='blue'>Second Item</a>
          </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='3' data-8088-keyword='mobile'>Third Item</a>
          </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='4' data-8088-keyword='accessory'>Fourth Item</a>
          </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='5' data-8088-keyword='red mobile'>Fifth Item</a>
          </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='6' data-8088-keyword='blue mobile'>Sixth Item</a>
          </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='7' data-8088-keyword='red accessory'>Seventh Item</a>
              </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='8' data-8088-keyword='blue accessory'>Eighth Item</a>
          </li>
          <li className='grid-flex-cell-1of3'>
            <a className='button button-outlined' id='9' data-8088-keyword='red blue'>Ninth Item</a>
          </li>
          <li className='grid-flex-cell-1of3' >
            <a className='button button-outlined' id='10' data-8088-keyword='mobile accessory'>Tenth Item</a>
          </li>
        </ul>
      </div>
    )
  }
}
