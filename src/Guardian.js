'use strict'

class Guardian {
  constructor () {
    this.headlines = []
  }

  getHeadlines (request = new XMLHttpRequest()) {
    request = request
    let key = KEYS.guardian
    let url = `https://content.guardianapis.com/search?api-key=${key}`

    request.open('GET', url, true)
    request.onload = () => {
      let data = JSON.parse(request.response)
      this.headlines.push(data.response.results)
    }
    request.send()
  }
}
