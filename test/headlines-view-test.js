import { HeadlinesView } from '../src/views/headlines-view.js'

describe('A headline view', () => {
  var view
  var list
  var article
  var image

  beforeEach(() => {
    article = {
      headline: 'This is a headline.',
      image: 'This is an image.',
      id: 0
    }
    list = { articles: [article] }
    view = new HeadlinesView(list)
    image = '<figure class="test-image" data-media-id="test"> <img src="https://test.jpg" alt="Test." width="1000" height="600" class="test" /> <figcaption> <span class="test">Testing</span> <span class="element-image__credit">Photograph: Test</span> </figcaption> </figure>'
  })

  it('stores a list of articles when instantiated', () => {
    expect(view.articleList).isEqualTo(list)
  })

  it('can render HTML for its headlines list', () => {
    var savedFormatImage = view.formatImage
    view.formatImage = (imageData) => {
      return imageData
    }
    expect(view.renderListHTML()).isEqualTo('<article>This is an image.<a href="#articles/0">This is a headline.</a></article>')
    view.formatImage = savedFormatImage
  })

  it('can format raw image data', () => {
    expect(view.formatImage(image)).isEqualTo('<figure class="headline-image"><img src="https://test.jpg" alt="Test." width="50%" height="30%"/></figure>')
  })
})
