class GuardianHandler {
  constructor(apiKey) {
    this.apiLink = 'https://content.guardianapis.com/search?show-fields=thumbnail&api-key=' + apiKey
  }

  async getApi() {
    let results
    await fetch(this.apiLink)
      .then(data => data.json())
      .then(data => { results =  data.response.results })

    return results
  }
}

export default GuardianHandler
