class NewsList {
  constructor () {
    this.list = []
    this.counter = 0
  }

  createNewItem (headline, body, picture) {
    this.list.push(new NewsItem(this.counter, headline, body, picture))
    this.counter++
  }

  getList () {
    return this.list
  }

  getCounter () {
    return this.counter
  }
}