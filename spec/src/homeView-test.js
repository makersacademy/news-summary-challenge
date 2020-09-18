(function (exports) {
  function putEachArticleInSeparateDiv() {
    let home = new HomeView();
    let fakeArticleList = ['Article 1', 'Article 2'];

    let expected = home.displayArticles(fakeArticleList);

    confirm.isTrue(
      expected ===
        '<div class=newsDiv id=#a0>Article 1</div><div class=newsDiv id=#a1>Article 2</div>'
    );
  }
  putEachArticleInSeparateDiv();
})(this);
