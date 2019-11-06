class API {
  static baseURL:string = 'https://api.publicapis.org/'

  static getEntries (params:URLSearchParams) {
    var url = new URL(`${this.baseURL}entries`)
    url.search = new URLSearchParams(params).toString()
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

  static getRandom (params:URLSearchParams) {
    var url = new URL(`${this.baseURL}random`)
    url.search = new URLSearchParams(params).toString()
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

  static getcategories () {
    var url = new URL(`${this.baseURL}categories`)
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

export { API }
