import test from 'ava'
import productPanel from './product-panel'

const prodPan = productPanel()

test('It should set opacity to of all products to 1', t => {
  let products = [
    {
      name: '1',
      style: {
        opacity: 0.5
      }
    },
    {
      name: '2',
      style: {
        opacity: 0.5
      }
    }
  ]
  prodPan.reset(products)
  t.is(products[0].style.opacity, '1')
  t.is(products[1].style.opacity, '1')
})

test.skip('It should search for items', t => {
  let query = 'FI'
  let products = [
    {
      name: '1',
      style: {
        opacity: 0.5
      }
    },
    {
      name: '2',
      style: {
        opacity: 0.5
      }
    }
  ]
  prodPan.search(query, products)
  t.is(query, 'fi')
})

test.todo('init')
test.todo('destroy')
test.todo('change filter')
test.todo('add to cart')

