import dom from '../core/dom.js'
import pubsub from '../core/pubsub.js'

export default function searchBox (sb) {
  const DOM = dom()
  const PUBSUB = pubsub()

  let input = DOM.query('#search_input')[0]
  let button = DOM.query('#search_button')[0]
  let reset = DOM.query('#quit_search')[0]

  function init () {
    DOM.bind(button, 'click', handleSearch)
    DOM.bind(reset, 'click', quitSearch)
  }

  function destroy () {
    DOM.unbind(button, 'click', handleSearch)
    DOM.unbind(reset, 'click', quitSearch)
    input = null
    button = null
    reset = null
  }

  function handleSearch () {
    let query = input.value
    if (query) {
      PUBSUB.triggerEvent({
        type: 'perform-search',
        data: query
      })
    }
  }

  function quitSearch () {
    input.value = ''
    PUBSUB.triggerEvent({
      type: 'quit-search',
      data: null
    })
  }

  return {
    init,
    destroy,
    handleSearch,
    quitSearch
  }
}
