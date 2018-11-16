import { Article } from '../src/article.js'

describe('An article', () => {
  var headline
  var article

  beforeEach(() => {
    headline = 'This is a headline.'
    article = new Article(headline)
  })

  it('can be instantiated with a headline', () => {
    expect(article.headline).isEqualTo(headline)
  })

  it('can be instantiated with an ID', () => {
    expect(article.id).isEqualTo(0)
  })
})
