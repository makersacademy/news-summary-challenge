var newsItemList = new NewsItemList();
var newsItem = new NewsItem('Brexit Cancelled', 'Theresa May has given-up. Rejoice!', 'images/brexit.jpeg');
newsItemList.addItem(newsItem);
var newsListView = new NewsListView(newsItemList);
assert.areEqual(newsListView.toHTML(), '<div class="newsItem"><p><img class="" src="images/brexit.jpeg"></p><h1 class="headline">Brexit Cancelled</h1></div>');

var aSecondNewsPiece = new NewsItem('David Cameron Still Loves Bacon', 'images/pig.jpeg', 'Cameron found to be keeping a secret pig farm.');
newsItemList.addItem(aSecondNewsPiece);
assert.areEqual(newsListView.toHTML(), '<div class="newsItem"><p><img class="" src="' + newsItem.image_url() + '"></p><h1 class="headline">' + newsItem.headline() + '</h1></div>' +
  '<div class="newsItem"><p><img class="" src="' + aSecondNewsPiece.image_url() +'"></p><h1 class="headline">' + aSecondNewsPiece.headline() +'</h1></div>');