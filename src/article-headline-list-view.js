class ArticleHeadlineListView{
  constructor(articleList = new ArticleList){
    this.articleList = articleList
    // assuming argument passed is an object which responds to .returnHeadlines()
  }

  returnHTML(){
    let htmlHeadlineArray = ""
    for (let i = 0; i < this.articleList.length; i++) {
      htmlHeadlineArray += `<li><div class="newsheadlineclass"><img class="image" src="${this.articleList[i].returnThumbnail()}" alt="The News Today"><h2 id="headline" href='#articles/${i}'>${this.articleList[i].returnTitle()}</h2></div></li>`
    }
    return `<ul style="list-style-type:none">${htmlHeadlineArray}</ul>`
  }
}