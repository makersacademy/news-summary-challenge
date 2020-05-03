class Newspage {
  constructor() {
    this.articles = [1];
  }
  list(){
    return this.articles.map( (article) => { return article.slice(0, 20); } )
  }
  displayNote(index) {
    return this.notes[index]
  }
}