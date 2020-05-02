describe('article', function () {
  let article = new Article(1, "this is a headline", "www.headline.com");
  assert.isTrue(article instanceof Article);
  assert.isTrue(article.headline === "this is a headline");
  assert.isTrue(article.url === "www.headline.com");
  assert.isTrue(article.id === 1);
})
