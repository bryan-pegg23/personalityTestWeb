import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'
import Loading from './Loading'

const SelectLanguage = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='languages'>
      {languages.map((lang) =>
        (<li
          style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
          onClick={props.onSelect.bind(null, lang)}
          key={lang}>
          {lang}
        </li>)
      )}
    </ul>
  )
}

const RepoGrid = (props) => {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) =>
        <li key={repo.name} className='popular-item'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img className='avatar' src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login} />
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>
                @{repo.owner.login}
              </li>
              <li>
                {repo.stargazers_count} starts
              </li>
            </li>
          </ul>
        </li>
      )}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    })

    api.fetchPopularRepos(lang)
      .then((repos) =>
        this.setState({repos: repos}))
  }

  render () {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
          {!this.state.repos
            ? <Loading speed={150} />
            : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

export default Popular
