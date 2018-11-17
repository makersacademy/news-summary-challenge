import { SummaryView } from '../src/views/summary-view.js'

describe('An article summary view', () => {
  var article
  var view

  beforeEach(() => {
    article = {
      headline: 'This is a headline.',
      image: 'This is an image.',
      id: 0
    }
    view = new SummaryView(article)
  })

  it('can be instantiated with an article', () => {
    expect(view.article).isEqualTo(article)
  })
})
