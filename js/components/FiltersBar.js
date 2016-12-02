import React from 'react'

export default class FiltersBar extends React.Component {
  constructor () {
    super()

    this.state = {}
    this.state.filtersBar = [
      {value: 'red', label: 'Red'},
      {value: 'blue', label: 'Blue'},
      {value: 'mobile', label: 'Mobile'},
      {value: 'accessory', label: 'Accessory'}
    ]
  }


  onClick (filter) {
    const {store} = this.props
    store.subscribe(() => {
      this.setState({filtersBar: store.getState()})
    })
    store.dispatch(this.actions.getCategories())
    console.log('filtering', filter)
    console.log(this.state.filtersBar)
  }

  render () {
    return (
      <div id='filters-bar'>
        <ul>
          {this.state.filtersBar.map((filter, index) => {
            return (
              <li key={index}>
                <a href='#0'
                  className='filter'
                  onClick={this.onClick.bind(this, filter.value)}>{filter.label}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
