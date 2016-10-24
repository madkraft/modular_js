export default function filtersBar (sb) {
  let filters = sb.find('a')

  function init () {
    sb.addEvent(filters, 'click', filterProducts)
  }

  function destroy () {
    sb.removeEvent(filters, 'click', filterProducts)
    filters = null
  }

  function filterProducts (e) {
    sb.notify({
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