class NewsPull {
  constructor() {
    this.titles = [];
  }

  getHtmlNews() {
    //fetch first
    return article.response.content.fields.body;
  }

  getTitles() {
    let htmlNews = this.getHtmlNews();

    //creating div to get the titles
    let hiddenDiv = document.createElement('div');
    hiddenDiv.innerHTML = htmlNews;

    //get the titles only
    let blockDiv = hiddenDiv.getElementsByClassName('block-elements');
    let headers = [...blockDiv].map((each) => {
      let pTags = each.getElementsByTagName('p');
      return pTags[0].innerHTML;
    });
    hiddenDiv.innerHTML = '';

    this.titles = headers;
  }
}
