// test a headline displays on homepage
var newsDiv = document.getElementById('app');
var newsItem = new NewsItem('Brexit Cancelled', 'Theresa May has given-up. Rejoice!', 'images/brexit.jpeg');
var newsItemList = new NewsItemList();
var newsController = new NewsController(newsItemList);
newsItemList.addItem(newsItem);
newsController.renderNewsToHTML();
assert.areEqual(newsDiv.innerHTML, '<div class="newsItem"><p><img class="" src="images/brexit.jpeg"></p><h1 class="headline">Brexit Cancelled</h1></div>');