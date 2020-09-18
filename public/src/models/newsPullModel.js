class NewsPull {
  constructor() {
    this.news = [];
  }

  getNews() {
    let pullBody = article.response.content.fields.body;

    let createArray = pullBody.split('</div>');
    let removeEmpty = createArray.filter((e) => {
      return e != '   ';
    });
    this.news = removeEmpty;
  }
}
