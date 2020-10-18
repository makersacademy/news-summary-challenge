"strict mode";

class ListView {
  constructor(list) {
    this.list = list;
  }

  generateHeadlineHtml() {
    return (
      "<ul>" +
      this.list
        .viewArticles()
        .map(function (article) {
          return (
            "<li><div class='list-img'><img src='" +
            article.thumbnail +
            "'></div><div class='list-text'><a href='#articles/" +
            article.id +
            "'>" +
            article.headline +
            " - " +
            article.author +
            " - " +
            article.date +
            "</a></div></li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }
}
