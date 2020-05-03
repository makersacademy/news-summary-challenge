class ArticleSummariser {
  constructor() {
    this.BASE_URL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
    this.GUARDIAN_URL = 'https://www.theguardian.com/'
  }

  async fetchById(id) {
    let url = this.BASE_URL + this.GUARDIAN_URL + id
    let response = await fetch(url)
    let json = await response.json()
    return json.sentences
  }
}
