import axios from 'axios'

// permission denined requests
const id = 'YOUR_CLIENT_ID'
const sec = 'YOUR_SECRET_ID'
const params = '?client_id=' + id + '&client_secret=' + sec

function getProfile (username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then((user) => user.data)
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username +
      ' /repos' + params + '?per_page=100')
}

function getStartCount (repos) {
  return repos.data
  .reduce(function (count, repo) {
    return count + repo.stargazers_count
  }, 0)
}

function calculateScore (profile, repos) {
  const followers = profile.followers
  const totalStars = getStartCount(repos)

  return (followers * 3) + totalStars
}

function handleError (error) {
  console.warn(error)
  return null
}

function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    var profile = data[0]
    var repos = data[1]

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

function sortPlayers (players) {
  return players.sort(function (a, b) {
    return b.score - a.score
  })
}

module.exports = {
  battle: function (players) {
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
  },
  fetchPopularRepos: function (language) {
    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' +
      language + '&sort=stars&order=desc&type=Repositories')

    return axios.get(encodedURI)
      .then((response) => response.data.items)
  }
}
