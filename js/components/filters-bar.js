import html from 'choo/html'

const FiltersBar = (state, prev, send) => html`
  <div id="filters-bar">
      <ul>
          <li><a class="filter" data-filter="red" href="#red">Red</a></li>
          <li><a class="filter" data-filter="blue" href="#blue">Blue</a></li>
          <li><a class="filter" data-filter="mobile" href="#mobile">Mobile</a></li>
          <li><a class="filter" data-filter="accessory" href="#accessory">Accessory</a></li>
          <li><a class="filter" data-filter="all" href="#all">All</a></li>
      </ul>
  </div>
`

export default FiltersBar
