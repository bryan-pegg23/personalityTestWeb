
export const API = 'http://localhost:8080'

const createPostRequest = (body = {}, method = 'POST') => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
})

export const postFetch = (url, body, requestType) => fetch(url, createPostRequest(body, requestType))
