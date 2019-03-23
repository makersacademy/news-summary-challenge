// test a newsitem can be added to a newitemlist
var headline = 'Brexit Cancelled';
var article = 'Theresa May has given-up. Rejoice!';
var image_url = 'images/brexit.jpeg';
var newsItem = new NewsItem(headline,article,image_url);

// test newsItem is returned by NewsListItem.getItems()
var newsItemList = new NewsItemList();
newsItemList.addItem(newsItem);
assert.arrayIncludes(newsItemList.getItems(), newsItem);