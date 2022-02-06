/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsModel = require('./newsModel');


  describe('News Model class', () => {
      const news = new NewsModel()
      expect(news.getHeadlines()).toEqual([])
  })

  describe('add headlines', () => {
    it('adds a headline to the headlines array', () => {
        const model = new NewsModel()
        model.addHeadlines('Headline1');
        expect(model.addHeadlines()).toEqual(['Headline1'])
    
    })

  describe('#setHeadlines', () => {
      it('populates this.headlines array', () => {
          const model = new NewsModel()

          const newsInfo = [
              {webTitle: 'headline1'},
              {webTitle: 'headline2'},
              {webTitle: 'headline3'},
              
          ]

          model.setHeadlines(newsInfo)
          expect(model.setHeadlines()).toEqual(newsInfo)
      })
  })
  });