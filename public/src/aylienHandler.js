class AylienHandler {
  constructor() {
    this.apiLink = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
  }

  async getSummary(articleUrl) {
    let results
    let link = this.apiLink + articleUrl

    await fetch(link).then(data => data.json())
      .then(data => results = data)
    return results
  }
}

export default AylienHandler
