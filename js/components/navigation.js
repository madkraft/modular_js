import html from 'choo/html'

const Navigation = (state, prev, send) => html`
  <nav class='top-nav top-nav-dark cf' role='navigation'>
    <input id='menu-toggle' class='menu-toggle' type='checkbox'>
    <label for='menu-toggle'>Menu</label>

    <ul class='list-unstyled list-inline cf'>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
    </ul>
  </nav>
`

export default Navigation
