import React from 'react'
import Nav from './Navigation'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
