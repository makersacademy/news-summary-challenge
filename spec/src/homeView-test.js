(function (exports) {
  function putEachArticleInSeparateDiv() {
    let home = new HomeView();
    let fakeArticleList = ['Article 1', 'Article 2'];

    let expected = home.displayTitles(fakeArticleList);

    confirm.isTrue(
      expected ===
        '<div class=newsDiv id=#a0><h3>Article 1</h3></div><div class=newsDiv id=#a1><h3>Article 2</h3></div>'
    );
  }
  putEachArticleInSeparateDiv();
})(this);
