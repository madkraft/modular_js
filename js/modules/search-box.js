export default function searchBox (sb) {
  let input = sb.find('#search_input')[0]
  let button = sb.find('#search_button')[0]
  let reset = sb.find('#quit_search')[0]

  // let input = document.querySelector('#search_input')
  // let button = document.querySelector('#search_button')
  // let reset = document.querySelector('#quit_search')

  // this code runs two times

  function init () {
    sb.addEvent(button, 'click', handleSearch)
    sb.addEvent(reset, 'click', quitSearch)
    // button.addEventListener('click', handleSearch)
    // reset.addEventListener('click', quitSearch)
  }

  function destroy () {
    sb.removeEvent(button, 'click', handleSearch)
    sb.removeEvent(reset, 'click', quitSearch)
    // button.removeEventListener('click', handleSearch)
    // reset.removeEventListener('click', quitSearch)
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
