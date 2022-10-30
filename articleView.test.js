/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ArticleView = require('./articleView');
 const ArticleModel = require('./articleModel');
 const testApi = require('./apiExample') 
 const { doesNotMatch } = require('assert');
const GuardianApi = require('./guardianApi');

require('jest-fetch-mod').enableFetchMocks()

describe('ArticleView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays headline(s)', () => {
    const articleModel = new ArticleModel();
    const articleView = new ArticleView(articleModel, testApi);
    articleModel.setArticleInfo(testApi)
    articleModel.getArticleHeadlines()
    console.log(articleModel.getArticleHeadlines())
    articleView.display()
    
    // const newsButtonEl = document.querySelector('#pull-news');
    // newsButtonEl.click()

    expect(document.querySelectorAll('h3').length).toEqual(10)
    expect(document.querySelectorAll('h3')[0].textContent).toEqual('Hand creams: 10 of the best')
  });
});