var headline = 'Brexit Cancelled';
var article = 'Theresa May has given-up. Rejoice!';
var image_url = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic3.businessinsider.com%2Fimage%2F59672f8e56152c034a3acb84-1067%2Fmay.jpeg&f=1';
var newsItem = new NewsItem(headline,article,image_url);

assert.areEqual(newsItem.article(), article);