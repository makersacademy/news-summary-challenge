class UI {

  constructor(){
    this.title = document.getElementById('a-title')
    this.cata = document.getElementById('a-cata')
  }

  paint(results) {
    let articlesDiv = ''
      results.forEach(element => {
        let articleShortDiv = document.createElement('div')
        this.title.textContent = element.webTitle;
        this.cata.textContent = element.sectionName;
        articleShortDiv.textContent = `${this.cata}: ${this.title}`
        articlesDiv += articleShortDiv
      });
      console.log(articlesDiv)
  }


}