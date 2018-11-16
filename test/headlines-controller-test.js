import { HeadlinesController } from '../src/controllers/headlines-controller.js'

describe('A headlines controller', () => {
  var controller
  var headlinesList

  beforeEach(() => {
    headlinesList = {
      articles: []
    }
    controller = new HeadlinesController(headlinesList)
  })

  it('takes a new articles list when instantiated', () => {
    expect(controller.headlinesList).isEqualTo(headlinesList)
  })

  it('creates a new headlines view when instantiated', () => {
    expect(controller.headlinesView.headlinesList).isEqualTo(headlinesList)
  })
})
