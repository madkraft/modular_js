export default function searchBox (sb) {
  let input = sb.find('#search_input')[0]
  let button = sb.find('#search_button')[0]
  let reset = sb.find('#quit_search')[0]

  function init () {
    sb.addEvent(button, 'click', handleSearch)
    sb.addEvent(reset, 'click', quitSearch)
  }

  function destroy () {
    sb.removeEvent(button, 'click', handleSearch)
    sb.removeEvent(reset, 'click', quitSearch)
    input = null
    button = null
    reset = null
  }

  function handleSearch () {
    let query = input.value
    if (query) {
      sb.notify({
        type: 'perform-search',
        data: query
      })
    }
  }

  function quitSearch () {
    input.value = ''
    sb.notify({
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
