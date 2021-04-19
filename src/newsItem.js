class NewsItem {
  constructor (num, headline, body, picture) {
    this.id = `item${num}`
    this.headline = headline
    this.body = body
    this.picture = picture
  }

  getId () {
    return this.id
  }

  getheadline () {
    return this.headline
  }

  getBody () {
    return this.body
  }

  getPicture () {
    return this.picture
  }
}