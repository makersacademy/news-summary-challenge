class Newspage {
  constructor() {
    this.articles = [];
  }
  list(){
    return this.articles.map( (article) => { return article.slice(0, 20); } )
  }
  displayNote(index) {
    return this.notes[index]
  }
}