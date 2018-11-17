import { ArticleList } from '../src/article-list.js'

describe('An article list', () => {
  var list
  var headline
  var image
  var url

  beforeEach(() => {
    list = new ArticleList()
    headline = 'This is a headline.'
    image = 'This is an image.'
    url = 'http://test.com'
  })

  it('can store a list of articles', () => {
    expect(list.articles).isInstanceOf(Array)
    expect(list.articles.length === 0).toBeTruthy()
  })

  it('can create an article and store it in its list', () => {
    list.createArticle(headline, image, url)
    expect(list.articles[0].headline).isEqualTo('This is a headline.')
  })

  it('gives an article an ID when created', () => {
    list.createArticle(headline, image, url)
    list.createArticle('This is a second headline.', image, url)
    expect(list.articles[0].id).isEqualTo(0)
    expect(list.articles[1].id).isEqualTo(1)
  })

  it('can create an article with an image', () => {
    list.createArticle(headline, image, url)
    expect(list.articles[0].image).isEqualTo(image, url)
  })

  it('can create an article with an ID', () => {
    list.createArticle(headline, image, url)
    expect(list.articles[0].url).isEqualTo(url)
  })
})
