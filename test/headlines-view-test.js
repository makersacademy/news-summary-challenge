import { HeadlinesView } from '../src/views/headlines-view.js'

describe('A headline view', () => {
  var view
  var list
  var article

  beforeEach(() => {
    article = {
      headline: 'This is a headline.',
      id: 0
    }
    list = { articles: [article] }
    view = new HeadlinesView(list)
  })

  it('stores a list of articles when instantiated', () => {
    expect(view.articleList).isEqualTo(list)
  })

  it('can render HTML for its headlines list', () => {
    expect(view.renderListHTML()).isEqualTo("<ul><li><a href='#articles/0'>This is a headline.</a></li></ul>")
  })
})
