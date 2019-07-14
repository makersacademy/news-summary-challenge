describe('NewsArticle', function() {
  it('stores headline, url, imageUrl, id', function() {
    let headline = 'Novak Djokovic v Roger Federer – live!';
    let imageUrl = 'http://www.example.com/example.jpg';
    let url = 'http://www.example.com';
    let id = 0
    let article = new NewsArticle(headline, url, imageUrl, id);
    expect(article.headline).toEqual(headline);
    expect(article.imageUrl).toEqual(imageUrl);
    expect(article.url).toEqual(url);
    expect(article.id).toEqual(0);
  })
})