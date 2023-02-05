const NewsModel = require('./newsModel');

describe('the newsmodel class', () => {
  
  it('returns no news articles', () => {
    const myNews = new NewsModel;
    expect(myNews.getStoryData()).toEqual([]);
  });

  it('returns storyData using setStoryData', () => {
    const myNews = new NewsModel;
    myNews.setStoryData({
        response: {
          status: 'ok',
          results: [{
            id: 'test-id',
            type: 'test-type',
            sectionId: 'test-section-id',
            webPublicationDate: '2023-02-05T16:00:25Z',
            webTitle: 'Test Title',
            webUrl: 'https://www.test.com',
            apiUrl: 'https://content.test.com',
            isHosted: false,
            pillarId: 'pillar/test',
            pillarName: 'Test'
          }]
        }
      });
      console.log(myNews.getStoryData());
    expect(myNews.getStoryData()[0].id).toEqual('test-id');
  });

});


