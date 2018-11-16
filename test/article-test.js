import { Article } from '../src/article.js'

describe('An article', () => {
  it('can be instantiated with a headline', () => {
    var headline = 'This is a headline.'
    var article = new Article(headline)
    expect(article.headline).isEqualTo(headline)
  })

  it('can be instantiated with an ID', () => {
    var headline = 'This is a headline.'
    var article = new Article(headline)
    expect(article.id).isEqualTo(0)
  })
})
