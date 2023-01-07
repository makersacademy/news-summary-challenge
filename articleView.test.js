/**
 * @jest-environment jsdom
 */

const ArticleClient = require('./articleClient');
const ArticleModel = require('./articleModel');
const ArticleView = require('./articleView');
const fs = require('fs');

jest.mock('./articleClient');
jest.mock('./articleModel');

describe(ArticleView, () => {

  let client, model, view;
  beforeEach(() => {
    jest.resetAllMocks();
    
    document.body.innerHTML = fs.readFileSync('./index.html');

    client = new ArticleClient();
    model = new ArticleModel();
    view = new ArticleView(client, model);
  });

  it('displays articles from the model', () => {
    model.getArticles.mockImplementationOnce(() => [
      {
        headline: ' Quarter of ambulance patients in England wait an hour to get into A&E after arrival',
        thumbnail: 'https://media.guim.co.uk/329d3c8ff5861ef968efbc4e320dac5b332b3d35/0_185_5554_3333/500.jpg',
        webUrl: 'https://www.theguardian.com/society/2023/jan/06/quarter-of-ambulance-patients-in-england-faced-hours-wait-for-a-and-e'
      },
      {
        headline: 'Antonio Conte mourns another friend with the death of Gianluca Vialli',
        thumbnail: 'https://media.guim.co.uk/4ce2ad9b7030d5c0d12e1cadc1e718de33ebcc9e/0_272_7153_4294/500.jpg',
        webUrl: 'https://www.theguardian.com/football/2023/jan/06/antonio-conte-mourns-another-friend-with-death-of-gianluca-vialli'
      }
    ]);

    view.displayArticles();
    expect(document.querySelectorAll('.headlines .article').length).toBe(2);
    expect(document.querySelector('.article img').src)
      .toBe('https://media.guim.co.uk/329d3c8ff5861ef968efbc4e320dac5b332b3d35/0_185_5554_3333/500.jpg');
    expect(document.querySelector('.article .headline').textContent)
      .toBe(' Quarter of ambulance patients in England wait an hour to get into A&E after arrival');
    expect(document.querySelector('.article .headline a').href)
      .toBe('https://www.theguardian.com/society/2023/jan/06/quarter-of-ambulance-patients-in-england-faced-hours-wait-for-a-and-e');
  });

  it('does not add duplicates when calling displayArticles twice', () => {
    model.getArticles.mockImplementation(() => [
      {
        headline: ' Quarter of ambulance patients in England wait an hour to get into A&E after arrival',
        thumbnail: 'https://media.guim.co.uk/329d3c8ff5861ef968efbc4e320dac5b332b3d35/0_185_5554_3333/500.jpg',
        webUrl: 'https://www.theguardian.com/society/2023/jan/06/quarter-of-ambulance-patients-in-england-faced-hours-wait-for-a-and-e'
      }
    ]);

    view.displayArticles();
    view.displayArticles();

    expect(document.querySelectorAll('.headlines .article').length).toBe(1);
  });
});
