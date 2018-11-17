import { SummaryController } from '../src/controllers/summary-controller.js'

describe('A summary controller', () => {
  var controller
  var headlinesList

  beforeEach(() => {
    headlinesList = {
      articles: [{
        headline: 'This is a headline.',
        summary: 'This is a summary.',
        image: 'This is an image.',
        id: 0 }]
    }
    controller = new SummaryController(headlinesList)
  })

  it('is instantiated with a headlines list', () => {
    expect(controller.headlinesList).isEqualTo(headlinesList)
  })

  it('has no summary view object when instantiated', () => {
    expect(controller.summaryView).isEqualTo(null)
  })
})
