console.log('newsControllerSpec.js...');

// test a headline displays on homepage
var newsDiv = document.getElementById('app');
var newsItem = new NewsItem('Brexit Cancelled', 'Theresa May has given-up. Rejoice!', 'images/brexit.jpeg');
var newsItemList = new NewsItemList();
var newsController = new NewsController(newsItemList);
newsItemList.addItem(newsItem);
newsController.renderNewsToHTML();
assert.areEqual(newsDiv.innerHTML, '<div class="newsItem"><a href="#newsItem/' + newsItem.id() + '"><img class="" src="' + newsItem.image_url() + '"><h1 class="headline">' + newsItem.headline() + '</h1></a></div>');

// showing a single, full news item on the page
newsDiv.innerHTML = '';
var newsItemView = new NewsItemView(newsItem);
newsController.renderSingleNewsItemView(newsItemView);
newsItemView.toHTML();
assert.areEqual(newsDiv.innerHTML, '<div class="newsItem"><img class="" src="' + newsItem.image_url() + '"><h1 class="headline">' + newsItem.headline() + '</h1><p>' + newsItem.article() + '</p></div>');