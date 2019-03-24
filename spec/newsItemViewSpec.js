// test a single news item can be seen only
console.log('newsItemViewSpec.js...');

var newsItem = new NewsItem('Brexit Cancelled', 'Theresa May has given-up. Rejoice!', 'images/brexit.jpeg');
newsItemView = new NewsItemView(newsItem);

assert.areEqual(newsItemView.toHTML(), '<div class="newsItem"><img class="" src="' + newsItem.image_url() + '"><h1 class="headline">' + newsItem.headline() + '</h1><p>' + newsItem.article() + '</p></div>');