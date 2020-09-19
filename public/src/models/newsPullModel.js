class NewsPull {
  constructor() {
    this.titles = [];
    this.articles = [];
  }

  getHtmlNews() {
    //fetch first
    return article.response.content.fields.body;
  }

  getTitles() {
    this.getArticles();
    let headers = this.articles.map((each) => {
      let pTags = each.getElementsByTagName('p');
      return pTags[0].innerHTML;
    });

    this.titles = headers;
  }

  getArticles() {
    let htmlNews = this.getHtmlNews();

    //creating div to get the titles
    let hiddenDiv = document.createElement('div');
    hiddenDiv.innerHTML = htmlNews;

    //get the titles only
    let blockDiv = hiddenDiv.getElementsByClassName('block-elements');
    this.articles = [...blockDiv];
  }
}
