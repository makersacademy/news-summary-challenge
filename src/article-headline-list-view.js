class ArticleHeadlineListView{
  constructor(articleList = new ArticleList){
    this.headlines = articleList.returnHeadlines()
    // assuming argument passed is an instance of ArticleList
  }

  returnHTML(){
    let htmlHeadlineArray = []
    this.headlines.forEach(headline => {
      htmlHeadlineArray.push(`<li><div>${headline}</div></li>`);
    })
    return `<ul>${htmlHeadlineArray.join("")}</ul>`
  }
}