class ArticleHeadlineListView{
  constructor(articleList = new ArticleList){
    this.headlines = articleList.returnHeadlines()
    // assuming argument passed is an object which responds to .returnHeadlines()
  }

  returnHTML(){
    let htmlHeadlineArray = ""
    for (let i = 0; i < this.headlines.length; i++) {
      htmlHeadlineArray += `<li>
                              <div class="newsheadlineclass">
                                <img class="image" src="${this.headlines[i].thumbnail}" alt="The News Today">
                                <h2 id="headline" href='#articles/${i}'>${this.headlines[i]}</h2>
                              </div>
                            </li>`
    }
    return `<ul style="list-style-type:none">${htmlHeadlineArray}</ul>`
  }
}