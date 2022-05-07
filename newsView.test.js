const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

jest.mock('./newsModel');

describe('NewsView', () => {
  beforeEach(() => {
    NewsModel.mockClear();
  })

  document.body.innerHTML = fs.readFileSync('./index.html');
  let mockModel = new NewsModel();
  let view = new NewsView(mockModel);

  describe('./displayNews', () => {
    it('displays the news article headlines', () => {
      model.getNews.mockImplementation(() => ['This is a news article'])
      view.displayNews();
      expect(document.querySelectorAll('div.news').length).toEqual(1);
    })
  })

})