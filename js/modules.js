CORE.createModule('search-box', function (sb) {
  var input, button, reset

  function init () {
    input = sb.find('#search-input')[0]
    button = sb.find('#search-button')[0]
    reset = sb.find('#quit-search')[0]

    sb.addEvent(button, 'click', _handleSearch)
    sb.addEvent(reset, 'click', _quitSearch)
  }

  function destroy () {
    sb.removeEvent(button, 'click', _handleSearch)
    sb.removeEvent(reset, 'click', _quitSearch)
    input = button = reset = null
  }

  function _handleSearch () {
    var query = input.value
    if (query) {
      sb.notify({
        type: 'perform-search',
        data: query
      })
    }
  }

  function _quitSearch () {
    input.value = ''
    sb.notify({
      type: 'quit-search',
      data: null
    })
  }

  return {
    init: init,
    destroy: destroy
  }
})


CORE.createModule('filters-bar', function (sb) {
  var filters;

  function init () {
    filters = sb.find('a')
  }

  function destroy () {

  }

  return {
    init: init,
    destroy: destroy
  }
})