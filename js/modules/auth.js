import firebase from 'firebase'
import dom from '../core/dom.js'


export default function authentication (sb) {
  const DOM = dom()
  const auth = firebase.auth()

  let txtEmail = DOM.query('#txtEmail')
  let txtPassword = DOM.query('#txtPassword')
  let btnLogin = DOM.query('#btnLogin')
  let btnLogout = DOM.query('#btnLogout')
  let btnSignUp = DOM.query('#btnSignUp')

  function init () {
    DOM.bind(btnLogin, 'click', loginHandler)
    DOM.bind(btnLogout, 'click', logoutHandler)
    DOM.bind(btnSignUp, 'click', signupHandler)
  }

  function destroy () {
    DOM.unbind(btnLogin, 'click', loginHandler)
    DOM.unbind(btnLogout, 'click', logoutHandler)
    DOM.unbind(btnSignUp, 'click', signupHandler)
    btnLogin = null
    btnLogout = null
    btnSignUp = null
  }

  function signupHandler (event) {
    event.preventDefault()
    let email = txtEmail[0].value
    let password = txtPassword[0].value
    let promise = auth.createUserWithEmailAndPassword(email, password)
    promise.catch(e => console.log('Error', e.message))
    txtEmail[0].value = ''
    txtPassword[0].value = ''
  }

  function loginHandler (event) {
    event.preventDefault()
    let email = txtEmail[0].value
    let password = txtPassword[0].value
    let promise = auth.signInWithEmailAndPassword(email, password)
    promise.catch(e => console.log('Error', e.message))
    txtEmail[0].value = ''
    txtPassword[0].value = ''
  }

  function logoutHandler (event) {
    event.preventDefault()
    auth.signOut()
  }

  auth.onAuthStateChanged(function (user) {
    console.log('user', user)
    if (user) {
      btnLogout[0].classList.remove('hide')
    } else {
      btnLogout[0].classList.add('hide')
    }
  })

  return {
    init,
    destroy,
    signupHandler,
    loginHandler,
    logoutHandler
  }
}


// export default class Auth {
//   constructor () {
//     this.txtEmail = DOM.query('#txtEmail')
//     this.txtPassword = DOM.query('#txtPassword')
//     this.btnLogin = DOM.query('#btnLogin')
//     this.btnLogout = DOM.query('#btnLogout')
//     this.btnSignUp = DOM.query('#btnSignUp')
//     this.auth = firebase.auth()
//   }

//   init () {
//     DOM.bind(this.btnLogin, 'click', this.loginHandler)
//     DOM.bind(this.btnLogout, 'click', this.logoutHandler)
//     DOM.bind(this.btnSignUp, 'click', this.signupHandler)
//   }

//   destroy () {
//     DOM.unbind(this.btnLogin, 'click', this.loginHandler)
//     DOM.unbind(this.btnLogout, 'click', this.logoutHandler)
//     DOM.unbind(this.btnSignUp, 'click', this.signupHandler)
//     this.btnLogin = null
//     this.btnLogout = null
//     this.btnSignUp = null
//   }

//   signupHandler (event) {
//     event.preventDefault()
//     let email = this.txtEmail[0].value
//     let password = this.txtPassword[0].value
//     let promise = this.auth.createUserWithEmailAndPassword(email, password)
//     promise.catch(e => console.log('Error', e.message))
//     this.txtEmail[0].value = ''
//     this.txtPassword[0].value = ''
//   }

//   loginHandler (event) {
//     event.preventDefault()
//     let email = this.txtEmail[0].value
//     let password = this.txtPassword[0].value
//     let promise = this.auth.signInWithEmailAndPassword(email, password)
//     promise.catch(e => console.log('Error', e.message))
//     this.txtEmail[0].value = ''
//     this.txtPassword[0].value = ''
//   }

//   logoutHandler (event) {
//     event.preventDefault()
//     this.auth.signOut()
//   }
// }
