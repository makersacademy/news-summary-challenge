// test a headline displays on homepage
var newsDiv = document.getElementById('app');
var newsController = new NewsController();

var headline = 'Brexit Cancelled';
var article = 'Theresa May has given-up. Rejoice!';
var image_url = 'images/brexit.jpeg';
var newsItem = new NewsItem(headline,article,image_url);
var newsItemList = new NewsItemList();
newsItemList.addItem(newsItem);
newsController.renderNewsToHTML();
assert.areEqual(newsDiv.innerHTML, '<h1 class="headline">' + headline + '</h1><p><img class="" src="' + image_url + '"></p><p class="detail">' + article + '</p>');