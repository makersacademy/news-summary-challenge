function NewsDouble() {
  this.title = 'title'
  this.url = 'url'
  this.summary = 'summary'
  this.image = 'image'
}

function NewsListDouble() {
  this.list = [new NewsDouble]
}

var newsList = new NewsListDouble();
var newsListView = new NewsListView(newsList);

describe('NewsListView')
  it('Exists upon instantiation')
  assert.exists(newsListView)

describe('#newslist')
  it('Returns the newslist object')
  assert.areEqual(newsListView.newslist, newsList)

//RETURN TO THIS AFTER CREATING SINGLE NEWS VIEW

// describe('#NewsListToHTML')
//   it('Returns an html string of all the news objects in news list')
//   assert.areEqual(newsListView.NewslistToHTML(), `<p><a href='url'>title</a></p><img src=image`)
