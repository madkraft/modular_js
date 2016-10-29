import dom from '../core/dom.js'
import pubsub from '../core/pubsub.js'

export default function filtersBar (sb) {
  const DOM = dom()
  const PUBSUB = pubsub()

  let filters = DOM.query('a')

  function init () {
    DOM.bind(filters, 'click', filterProducts)
  }

  function destroy () {
    DOM.unbind(filters, 'click', filterProducts)
    filters = null
  }

  function filterProducts (e) {
    PUBSUB.triggerEvent({
      type: 'change-filter',
      data: e.currentTarget.innerHTML
    })
  }

  return {
    init,
    destroy,
    filterProducts
  }
}
