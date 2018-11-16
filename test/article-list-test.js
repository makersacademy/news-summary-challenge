import { ArticleList } from '../src/article-list.js'

describe('An article list', () => {
  it('can store a list of articles', () => {
    var list = new ArticleList()
    expect(list.articles).isInstanceOf(Array)
    expect(list.articles.length < 1).toBeTruthy()
  })

  it('can create an article and store it in its list', () => {
    var list = new ArticleList()
    list.createArticle('This is a headline.')
    expect(list.articles[0].headline).isEqualTo('This is a headline.')
  })

  it('gives an article an ID when created', () => {
    var list = new ArticleList()
    list.createArticle('This is a headline.')
    list.createArticle('This is a second headline.')
    expect(list.articles[0].id).isEqualTo(0)
    expect(list.articles[1].id).isEqualTo(1)
  })
})
