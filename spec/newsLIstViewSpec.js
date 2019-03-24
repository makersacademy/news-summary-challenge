console.log('newsListViewSpec.js...');

var newsItemList = new NewsItemList();
var newsItem = new NewsItem('Brexit Cancelled', 'Theresa May has given-up. Rejoice!', 'images/brexit.jpeg');
newsItemList.addItem(newsItem);
var newsListView = new NewsListView(newsItemList);
assert.areEqual(newsListView.toHTML(), '<div class="newsItem"><a href="#newsItem/' + newsItem.id() + '"><img class="" src="' + newsItem.image_url() + '"><h1 class="headline">' + newsItem.headline() + '</h1></a></div>');

var aSecondNewsPiece = new NewsItem('David Cameron Still Loves Bacon', 'images/pig.jpeg', 'Cameron found to be keeping a secret pig farm.');
newsItemList.addItem(aSecondNewsPiece);
assert.areEqual(newsListView.toHTML(), '<div class="newsItem"><a href="#newsItem/' + newsItem.id() + '"><img class="" src="' + newsItem.image_url() + '"><h1 class="headline">' + newsItem.headline() + '</h1></a></div>' +
  '<div class="newsItem"><a href="#newsItem/' + aSecondNewsPiece.id() + '"><img class="" src="' + aSecondNewsPiece.image_url() +'"><h1 class="headline">' + aSecondNewsPiece.headline() +'</h1></a></div>');