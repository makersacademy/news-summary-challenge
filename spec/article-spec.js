it('Article is initialized with empty features', function() {
  article = new Article;
  expect(article.headline).toEqual(undefined);
  expect(article.body).toEqual(undefined);
  expect(article.image).toEqual(undefined);
  expect(article.url).toEqual(undefined);
  expect(article.full).toEqual(undefined);
})

