import { Article } from '../src/article.js'

describe('An article', () => {
  it('can be instantiated with a body', () => {
    var headline = 'This is a headline.'
    var article = new Article(headline)
    expect(article.headline).isEqualTo(headline)
  })
})
