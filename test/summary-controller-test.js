import { SummaryController } from '../src/controllers/summary-controller.js'

describe('A summary controller', () => {
  var controller
  var articleList

  beforeEach(() => {
    articleList = {
      articles: [{
        headline: 'This is a headline.',
        summary: 'This is a summary.',
        image: 'This is an image.',
        id: 0 }]
    }
    controller = new SummaryController(articleList)
  })

  it('is instantiated with a headlines list', () => {
    expect(controller.articleList).isEqualTo(articleList)
  })

  it('has no summary view object when instantiated', () => {
    expect(controller.summaryView).isEqualTo(null)
  })
})
