'use strict';

describe("NewsSummary", function() {
  let newsSummary
  let listOfNews = []

  beforeEach(function() {
    newsSummary = new NewsSummary();
  })

  it ('should have a list of news', function () {
    newsSummary.addNews('Hello news 1');
    expect(newsSummary.listOfNews.length).toEqual(1)
  })

  describe('#addNews', function() {
    it ('should add news to list of news', function() {
      newsSummary.addNews('Hello news 1');
      newsSummary.addNews('Hola');
      expect(newsSummary.showNews().length).toEqual(2);
    })
  })

  // describe('#displayNews', function() {
  //   it ('should display news', function () {
  //     expect(newsSummary.displayNews()).toEqual(['Hello news 1', 'Hola']);
  //   })
  // })

})

