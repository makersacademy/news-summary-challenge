import { HeadlinesController } from '../src/controllers/headlines-controller.js'

describe('A headlines controller', () => {
  var controller
  var headlinesList
  var resultObject
  var createResult

  beforeEach(() => {
    createResult = {
      headline: null,
      image: null
    }
    headlinesList = {
      articles: [],
      create: (headline, image) => {
        createResult.headline = headline
        createResult.image = image
      }
    }
    resultObject = {
      webTitle: 'This is a headline.',
      fields: { main: "<img src='http://test.com/img'>This is an image.</img>"}
    }
    controller = new HeadlinesController(headlinesList)
  })

  it('takes a new articles list when instantiated', () => {
    expect(controller.headlinesList).isEqualTo(headlinesList)
  })

  it('creates a new headlines view when instantiated', () => {
    expect(controller.headlinesView.headlinesList).isEqualTo(headlinesList)
  })

  it('can set headline information', () => {
    var results = [resultObject]
    controller.setHeadlinesInformation(results)
    expect(createResult.headline).isEqualTo(resultObject.webTitle)
  })
})
