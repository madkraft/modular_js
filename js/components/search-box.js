import html from 'choo/html'

const SearchBox = (state, prev, send) => html`
  <div id="search-box">
      <form class='form-inline form-no-labels'>
          <div class='form-element'>
              <input id="search_input" class='form-input' type="text" placeholder='Find product' name='q' />
          </div>

          <button id="search_button" type='submit' class='button button-primary'>Search</button>
          <button id="quit_search" class='button button-primary'>Reset</button>
      </form>
  </div>
`

export default SearchBox
