import pMemoize from 'p-memoize'

/**
 * Provides API to make requests to Amiibo servise.
 *
 * @remarks
 * More details about Amiibo servise on {@link https://www.amiiboapi.com/ | AmiiboAPI}.
 *
 * @public
 */
class Amiibo {
  static baseURL:string = 'https://www.amiiboapi.com/api/'

  /**
   * Return a list of Amiibo available in the API
   *
   * @param params - parameters of the query, see {@link https://www.amiiboapi.com/docs/#amiibo | Amiibo documentation}
   *
   * @public
   */
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

  /**
   * Get all the Amiibo's type available in the database as a list
   *
   * @public
   */
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

/**
* Result of calls `Amiibo.getCategories` cached for 5 min
*
* @remarks
* Uses {@link https://www.npmjs.com/package/p-memoize| p-memoize}.
*
* @public
*/
const getCachedCategories = pMemoize(Amiibo.getCategories.bind(Amiibo), { maxAge: 5 * 60 * 1000 })

export { Amiibo, getCachedCategories }
