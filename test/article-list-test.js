import { ArticleList } from '../src/article-list.js'

describe('An article list', () => {
  it('can store a list of articles', () => {
    var list = new ArticleList()
    expect(list.articles).isInstanceOf(Array)
    expect(list.articles.length < 1).toBeTruthy()
  })
})
