var newslist = new NewsListModel();

describe('NewsListModel')
  it('Exists upon instantiation')
  assert.exists(newslist)

describe('#list')
  it('Is an empty array upon instantiation')
  assert.isAnArray(newslist.list)
  assert.areEqual(newslist.list.length, 0)
