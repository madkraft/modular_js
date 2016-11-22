import dom from '../core/dom.js'
import events from '../core/pubsub2.js'

export default function filtersBar () {
  const DOM = dom()

  let filters = DOM.query('.filter')

  function init () {
    DOM.bind(filters, 'click', filterProducts)
  }

  function destroy () {
    DOM.unbind(filters, 'click', filterProducts)
    filters = null
  }

  function filterProducts (e) {
    events.emit('change-filter', {
      data: e.currentTarget.innerHTML
    })
  }

  return {
    init,
    destroy,
    filterProducts
  }
}
