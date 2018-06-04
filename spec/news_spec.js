var news = new News('example title', 'example url', 'example summary', 'example image')

describe('News')
  it('Exists upon instantiation')
  assert.exists(news)

describe('#title')
  it('Returns the title of the news')
  assert.areEqual(news.title, 'example title')

describe('#url')
  it('Returns the url of the news')
  assert.areEqual(news.url, 'example url')

describe('#summary')
  it('Returns the summary of the news')
  assert.areEqual(news.summary, 'example summary')

describe('#image')
  it('Returns the image of the news')
  assert.areEqual(news.image, 'example image')
