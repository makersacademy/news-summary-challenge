class UI {

  constructor(){
    this.title = document.getElementById('a-title')
    this.cata = document.getElementById('a-cata')
  }

  paint(results) {
    //console.log(results[0].webTitle)
      results.forEach(element => {
        let articleShortDiv = document.createElement('div')
        this.title.textContent = element.webTitle;
        this.cata.textContent = element.sectionName;
      });
  }


}