/**
 * @jest-environment jsdom
 */ 

const fs = require('fs')
const ArticlesModel = require('../lib/articlesModel')
const ArticlesView = require('../lib/articlesView')
const ArticlesClient = require('../lib/articlesClient')

describe('View Class', () => {
  // it('displays the 10 most recent articles from the api', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html')
  //   const model = new ArticlesModel();
  //   const mockClient = { loadArticles: jest.fn(), searchArticles: jest.fn()}
  //   const view = new ArticlesView(model, mockClient)
    
  //   mockClient.loadArticles.mockImplementation(() => {
  //     return([["URL", "HEADLINE", "IMAGE"]])
  //   })

  //   view.displayArticles().then(() => {
  //     expect(document.querySelectorAll('.article').length).toEqual(1)
  //   })
  // })
})