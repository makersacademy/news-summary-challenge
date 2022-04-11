const NewsModel = require('./newsModel');

describe('Notes Model', () => {
  let newsModel;
  beforeEach(() => {
    newsModel = new NewsModel();
  });

  it('it should be an instance of NewsModel and return an empty array of stories', () => {
    expect(newsModel).toBeInstanceOf(NewsModel);
    expect(newsModel.showStory()).toEqual([]);
  });

  it('can add a headline', () => {
    newsModel.addStory('Great Story, Read All About It!');
    expect(newsModel.showStory()).toBe('Great Story, Read All About It!');
  });

  it('should be able show added stories', () => {
    const headlines = [
      { Title: 'News About Nothing' },
      { Title: 'News About Something' },
    ];

    newsModel.addStory(headlines);
    expect(newsModel.showStory()).toEqual(headlines);
  });
});