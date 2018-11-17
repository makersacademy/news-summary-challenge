import { SummaryView } from '../src/views/summary-view.js'

describe('An article summary view', () => {
  var article
  var view
  var image

  beforeEach(() => {
    article = {
      headline: 'This is a headline.',
      image: 'This is an image.',
      summary: 'This is a summary.',
      id: 0
    }
    view = new SummaryView(article)
    image = '<figure class="test-image" data-media-id="test"> <img src="https://test.jpg" alt="Test." width="1000" height="600" class="test" /> <figcaption> <span class="test">Testing</span> <span class="element-image__credit">Photograph: Test</span> </figcaption> </figure>'
  })

  it('can be instantiated with an article', () => {
    expect(view.article).isEqualTo(article)
  })

  it('can render HTML for an article', () => {
    var savedFunctionState = view.formatImage
    view.formatImage = (imageData) => {
      return imageData
    }

    expect(view.renderSummaryHTML()).isEqualTo('<article>This is an image.<h2>This is a headline.</h2><p>This is a summary.</p></article>')
    view.formatImage = savedFunctionState
  })

  it('can format raw image data', () => {
    expect(view.formatImage(image)).isEqualTo('<figure class="headline-image"><img src="https://test.jpg" alt="Test." width="500" height="300"/></figure>')
  })
})
