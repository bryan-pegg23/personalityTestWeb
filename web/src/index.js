import React, { Component } from 'react'
import { render } from 'react-dom'

import './app.css'

const MyButton = ({ onClick, text }) => (
  <button
    onClick={onClick}
    >
    {text}
  </button>
)

class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }

    // bindings
    this.onInputChange = this.onInputChange.bind(this)
    this.search = this.search.bind(this)
  }

  onInputChange(event) {
    console.log('changing state')
    this.setState({
      input: event.target.value
    })
  }

  search() {
    console.log(`Searching for ${this.state.input}`)
  }

  render() {
    return (
      <div className='container'>
        <input onChange={this.onInputChange} type='text' />
        <MyButton onClick={this.search} text='search' />
      </div>
    )
  }
}

const App = (props) => (
  <Search />
)

render(
  <App />,
  document.getElementById('root')
)
