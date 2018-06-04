function NewsDouble() {
  this.title = 'title'
  this.url = 'url'
  this.summary = 'summary'
  this.image = 'image'
  this.id = 'id'
}

var news = new NewsDouble();
var singleNewsView = new SingleNewsView(news);

describe('SingleNewsView')
  it('exists upon instantiation')
  assert.exists(singleNewsView)

describe('#news')
  it('Returns the news object')
  assert.areEqual(singleNewsView.news, news)

describe('#DisplaySingleNewsHeader')
  it('Returns an html string')
  assert.areEqual(singleNewsView.DisplaySingleNewsHeader(), `<p><a href='id'>title</a></p><img src=image>`)

describe('#DisplaySingleNewsSummary')
  it('Returns an html string')
  assert.areEqual(singleNewsView.DisplaySingleNewsSummary(), `<p>summary</p><p><a href='url'>url</a></p>'`)
