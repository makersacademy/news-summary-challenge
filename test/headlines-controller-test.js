import { HeadlinesController } from '../src/controllers/headlines-controller.js'

describe('A headlines controller', () => {
  var controller
  var articleList
  var resultObject
  var createResult
  var element
  var results

  beforeEach(() => {
    createResult = {
      headline: null,
      image: null
    }
    articleList = {
      articles: [],
      createArticle: (headline, image) => {
        createResult.headline = headline
        createResult.image = image
      }
    }
    resultObject = {
      webTitle: 'This is a headline.',
      fields: { main: 'This is an image.' }
    }

    results = [resultObject]
    controller = new HeadlinesController(articleList)
  })

  it('gets headlines using the fetch method correctly', () => {
    var i = 0
    var json = { text: 'Test', response: { results: 'Test successful' } }
    var response = { json: () => { return json } }

    window.fetch = url => {
      return new Promise(resolve => {
        i++
        resolve(response)
      })
    }

    controller.setHeadlinesInformation = jsonResults => {
      i++
    }
    controller.renderHeadlinesHTML = () => {
      i++
    }

    controller.initializeHeadlines()

    setTimeout(() => {
      expect(i).isEqualTo(3)
    }, 50)
  })

  it('takes a new articles list when instantiated', () => {
    expect(controller.articleList).isEqualTo(articleList)
  })

  it('creates a new headlines view when instantiated', () => {
    expect(controller.headlinesView.articleList).isEqualTo(articleList)
  })

  it('can set headline information', () => {
    controller.setHeadlinesInformation(results)
    expect(createResult.headline).isEqualTo(resultObject.webTitle)
  })

  it('can list headlines as HTML', () => {
    articleList.articles = [{
      headline: 'This is a headline.',
      image: 'This is an image.',
      id: 0
    }]

    controller.headlinesView.formatImage = (imageData) => {
      return imageData
    }

    controller.renderHeadlinesHTML(results)

    var content = document.getElementById('content')

    expect(content.innerHTML).isEqualTo('<article>This is an image.<a href="#articles/0">This is a headline.</a></article>')
  })
})
