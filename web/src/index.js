import React from 'react'
import { render } from 'react-dom'
import  { API, postFetch } from './utils/PersonalityTestApi'
//import './app.css'
// import App from './components/App'

// runs the react example app
// render(
//   <App />,
//   document.getElementById('root')
// )

const MyButton = ({ onClick, text }) => (
  <button
    onClick={onClick}
    >
    {text}
  </button>
)

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      input: 'bryan',
      errorLog: ''
    }

    // bindings
    this.onInputChange = this.onInputChange.bind(this)
    this.search = this.search.bind(this)
  }

  onInputChange (event) {
    this.setState({
      input: event.target.value
    })
  }

  search () {
    if (this.state.input !== '') {
      console.log(`sending ${this.state.input} to the server`)

      postFetch(API + '/user', {username: this.state.input}, 'POST')
        .then(response => response.json())
        .then(json => console.log(json))
    }
  }

  render () {
    return (
      <div className='container'>
        <input value={this.state.input} onChange={this.onInputChange} type='text' />
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
