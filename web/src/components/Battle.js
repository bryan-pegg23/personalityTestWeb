import React from 'react'

class Battle extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(function () {
      var newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://' + username + 'png?size=200'
      return newState
    })
  }

  render () {
    return (
      <div>
        <div className='row'>

        </div>
      </div>
    )
  }
}

export default Battle