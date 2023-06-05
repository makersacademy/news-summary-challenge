/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient');
const NewsView = require('./newsView');


describe('A test for my web page', () => {
  let newsView;
  let mockModel;
  let mockClient;
  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    mockModel = new NewsModel();
    mockClient = new NewsClient();
    newsView = new NewsView(mockModel, mockClient);
  });

  describe('displayNews', () => {
    it('should display news on the page', () => {
      mockModel.addNews({
        response: {
          results: [
            {
              webTitle: 'Article 1',
              webUrl: 'https://www.example.com/article1',
              fields: {
                thumbnail: 'https://www.example.com/article1.jpg',
              },
            },
            {
              webTitle: 'Article 2',
              webUrl: 'https://www.example.com/article2',
              fields: {
                thumbnail: 'https://www.example.com/article2.jpg',
              },
            },
          ],
        },
      });

      newsView.displayNews();

      expect(document.querySelectorAll('div.news').length).toBe(2);
    });

    
  });


});