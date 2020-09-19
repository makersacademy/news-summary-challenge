(function (exports) {
  function displayOneArticle() {
    let news = new NewsPull();
    let fakeNews = document.createElement('p');
    fakeNews.innerHTML = 'Fake news 1';
    news.articles.push(fakeNews);

    let articleView = new ArticleView(news.articles, 0);

    confirm.isTrue(
      articleView.displayArticle() === '<div class=articleDiv>Fake news 1</div>'
    );
  }
  displayOneArticle();
})(this);
