import pMemoize from 'p-memoize'

class API {
  static baseURL:string = 'https://www.amiiboapi.com/api/'

  static getEntries (params?: object) {
    var url = new URL(`${this.baseURL}amiibo`)
    url.search = new URLSearchParams(<URLSearchParams>params).toString()
    return fetch(url.toString())
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(`Non-200 response ${response.status}`)
        }
        return response.json()
      })
      .then(function (data) {
        return data
      })
  }

  static getRandom (params?: object) {
    var url = new URL(`${this.baseURL}random`)
    url.search = new URLSearchParams(<URLSearchParams>params).toString()
    return fetch(url.toString())
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(`Non-200 response ${response.status}`)
        }
        return response.json()
      })
      .then(function (data) {
        return data
      })
  }

  static getCategories () {
    var url = new URL(`${this.baseURL}type`)
    return fetch(url.toString())
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(`Non-200 response ${response.status}`)
        }
        return response.json()
      })
      .then(function (data) {
        return data
      })
  }
}

const getCachedCategories = pMemoize(API.getCategories.bind(API), { maxAge: 5 * 60 * 1000 })

export { API, getCachedCategories }
