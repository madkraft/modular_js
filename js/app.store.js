export default class AppStore {
  constructor (reducer, initialState) {
    this.reducer = reducer
    this.state = initialState
    this.listeners = []
  }

  getState () {
    return this.state
  }

  dispatch (action) {
    this.state = this.reducer(this.state, action)
    this.listeners.map(listener => listener())
  }

  subscribe (subListener) {
    this.listeners = [...this.listeners, subListener]

    return function () {
      this.listeners = this.listeners
        .filter(listener => listener !== subListener) 
    }
  }
}
