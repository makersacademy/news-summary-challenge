describe('Article', function() {
  it('is able to return a article', function() {
    var article = new Article('Headline', 'imageUrl');

    return expect(article.get()).toMatchObject({ headline: 'Headline', image: 'imageUrl' });
  });
});
