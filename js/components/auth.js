import html from 'choo/html'

const Authentication = (state, prev, send) => html`
  <div id="authentication">
      <form class='form-inline'>
          <fieldset>
              <div class='form-element'>
                  <label for='txtEmail'>Email</label>
                  <input type="email" id="txtEmail" placeholder="Email" class="form-input">
              </div>

              <div class='form-element'>
                  <label for='txtPassword'>Password</label>
                  <input type="password" id="txtPassword" placeholder="Password" class="form-input">
              </div>

              <button type='submit' class='button button-primary' id="btnLogin">Log in</button>
              <button type='submit' class='button button-primary' id="btnSignUp">Sign up</button>
              <button type='submit' class='button button-primary hide' id="btnLogout">Log out</button>
          </fieldset>
      </form>
  </div>
`

export default Authentication
