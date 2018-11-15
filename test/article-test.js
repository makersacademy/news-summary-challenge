import { Article } from '../src/article.js'

describe('An article', () => {
  it('can be instantiated with a body', () => {
    var body = 'This is an article body.'
    var article = new Article(body)
    expect(article.body).isEqualTo(body)
  })
})
