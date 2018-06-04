function NewsDouble() {
}

var newsList = new NewsListModel();
var newsArticle = new NewsDouble();

describe('NewsListModel')
  it('Exists upon instantiation')
  assert.exists(newsList)

describe('#list')
  it('Is an empty array upon instantiation')
  assert.isAnArray(newsList.list)
  assert.areEqual(newsList.list.length, 0)

describe('#AddNewsArticle')
  it('Adds a News object to the list array')
  newsList.AddNewsArticle(newsArticle)
  assert.areEqual(newsList.list[0], newsArticle)

describe('#ReturnAllNews')
  it('Returns the array of News objects')
  assert.areEqual(newsList.ReturnAllNews(), [newsArticle])
