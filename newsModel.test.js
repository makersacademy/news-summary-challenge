const NewsModel = require('./newsModel');

describe('NewsModel class', () => {
  it('adds article titles to model using addTitles function', () => {
    model = new NewsModel();

    model.addTitles(
      [
        {webTitle: "title 1"},
        {webTitle: "title 2"},
        {webTitle: "title 3"}
      ]
    );

    expect(model.showTitles()).toEqual(["title 1", "title 2", "title 3"]);
  });
});