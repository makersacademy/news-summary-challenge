/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsModel = require('./newsModel');

  describe('display healdines on page', () => {
    it('lets user see headlines', () => {

      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new NewsModel();

      expect(document.getElementById('#article-title')).toBeNull();
    
    })
  });