var headline = 'Brexit Cancelled';
var article = 'Theresa May has given-up. Rejoice!';
var image_url = 'images/brexit.jpeg';
var newsItem = new NewsItem(headline, article, image_url);

// test .article() can return its article text
assert.areEqual(newsItem.article(), article);

// test .image() returns the url for its image as a string
assert.areEqual(newsItem.image_url(), image_url);

// test .headline() returns its headline
assert.areEqual(newsItem.headline(), headline);