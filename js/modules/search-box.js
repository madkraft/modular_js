import dom from '../core/dom'
import events from '../core/pubsub2'

export default function searchBox (sb) {
  const DOM = dom()

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

  function handleSearch (event) {
    event.preventDefault()
    let query = input.value
    if (query) {
      events.emit('perform-search', {
        type: 'perform-search',
        data: query
      })
    }
  }

  function quitSearch (event) {
    event.preventDefault()
    input.value = ''
    events.emit('quit-search', {
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
