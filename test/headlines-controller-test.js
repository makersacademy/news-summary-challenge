import { HeadlinesController } from '../src/controllers/headlines-controller.js'

describe('A headlines controller', () => {
  var controller
  var headlinesList
  var resultObject
  var createResult
  var element
  var results

  beforeEach(() => {
    createResult = {
      headline: null,
      image: null
    }
    headlinesList = {
      articles: [],
      createArticle: (headline, image) => {
        createResult.headline = headline
        createResult.image = image
      }
    }
    resultObject = {
      webTitle: 'This is a headline.',
      fields: { main: "This is an image."}
    }

    results = [resultObject]
    controller = new HeadlinesController(headlinesList)
  })

  it('takes a new articles list when instantiated', () => {
    expect(controller.headlinesList).isEqualTo(headlinesList)
  })

  it('creates a new headlines view when instantiated', () => {
    expect(controller.headlinesView.headlinesList).isEqualTo(headlinesList)
  })

  it('can set headline information', () => {
    controller.setHeadlinesInformation(results)
    expect(createResult.headline).isEqualTo(resultObject.webTitle)
  })

  it('can list headlines as HTML', () => {
    headlinesList.articles = [{
      headline: 'This is a headline.',
      image: 'This is an image.',
      id: 0
    }]

    var savedFormatImage = controller.headlinesView.formatImage
    controller.headlinesView.formatImage = (imageData) => {
      return imageData
    }

    controller.renderHeadlinesHTML(results)
    controller.headlinesView.formatImage = savedFormatImage

    var content = document.getElementById('content')

    expect(content.innerHTML).isEqualTo('<article>This is an image.<a href="#articles/0">This is a headline.</a></article>')
  })
})
