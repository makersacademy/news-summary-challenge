class Article {
  constructor() {
    this.standfirst = ""
    this.image = ""
    this.content = ""
  }
  displayHeadline(){
    return this.standfirst
  }
  displayNote() {
    return this.content
  }
}
