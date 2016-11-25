// @flow

import React from 'react'

export default class Auth extends React.Component {
  render () {
    return (
      <div id='authentication'>
        <form className='form-inline'>
          <fieldset>
            <div className='form-element'>
              <label htmlFor='txtEmail'>Email</label>
              <input type='email' id='txtEmail' placeholder='Email' className='form-input' />
            </div>
            <div className='form-element'>
              <label htmlFor='txtPassword'>Password</label>
              <input type='password' id='txtPassword' placeholder='Password' className='form-input' />
            </div>
            <button type='submit' className='button button-primary' id='btnLogin'>Log in</button>
            <button type='submit' className='button button-primary' id='btnSignUp'>Sign up</button>
            <button type='submit' className='button button-primary hide' id='btnLogout'>Log out</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
