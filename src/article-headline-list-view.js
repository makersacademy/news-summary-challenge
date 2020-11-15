class ArticleHeadlineListView{
  constructor(articleList = new ArticleList){
    this.articleList = articleList.articles
  }

  returnHTML(){
    let htmlHeadlineArray = ""
    for (let i = 0; i < this.articleList.length; i++) {
      htmlHeadlineArray += `<li><div class="newsheadlineclass"><img class="image" src="${this.articleList[i].returnThumbnail()}" alt="The News Today"><a id="headline" href='#articles/${i}'>${this.articleList[i].returnTitle()}</a></div></li>`
    }
    return `<ul style="list-style-type:none">${htmlHeadlineArray}</ul>`
  }
}

