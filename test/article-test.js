import { Article } from '../src/article.js'

describe('An article', () => {
  var headline
  var article
  var image
  var id
  var url

  beforeEach(() => {
    headline = 'This is a headline.'
    image = 'This is an image.'
    id = 0
    url = 'http://test.com'
    article = new Article(headline, image, url, id)
  })

  it('can be instantiated with a headline', () => {
    expect(article.headline).isEqualTo(headline)
  })

  it('can be instantiated with an ID', () => {
    expect(article.id).isEqualTo(0)
  })

  it('can be instantiated with an image', () => {
    expect(article.image).isEqualTo(image)
  })

  it('is instantiated with an empty summary', () => {
    expect(article.summary).isEqualTo(null)
  })

  it('can be instantiated with a URL', () => {
    expect(article.url).isEqualTo(url)
  })
})
