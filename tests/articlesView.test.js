/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ArticlesView = require('../articlesView');
 const modelMock = {
   articles: [
    {
      fields: {
        headline: "Covid cases have hit plateau in parts of UK, says top medical adviser",
        trailText: "I am a short article description"
      },
      webUrl: "https://www.theguardian.com/uk"
    },
    {
      fields: {
        headline: "Covid live news: UK coronavirus cases could be plateauing, expert says; Beijing reports first Omicron case",
        trailText: "I am another short article description"
      },
      webUrl: "https://www.theguardian.com/uk"
    }
   ]
 }
 
describe('ArticlesView', () => {
  it('display the articles', () => {
    document.body.innerHTML = fs.readFileSync('index.html');

    const view = new ArticlesView(modelMock, "mockApi");
    view.displayArticles();
    expect(document.querySelectorAll('.article').length).toBe(2);
    expect(document.querySelectorAll('.article h2')[0].innerText).toBe("Covid cases have hit plateau in parts of UK, says top medical adviser");
  })

  it('display hidden summary paragraph when click on a headline', () => {
    document.body.innerHTML = fs.readFileSync('index.html');

    const view = new ArticlesView(modelMock, "mockApi");
    view.displayArticles();
    expect(document.querySelector('.article .hidden').getAttribute('hidden')).toBe('');
    const headline = document.querySelector('.article h2');
    headline.click()
    expect(document.querySelector('.article .hidden').getAttribute('hidden')).toBeNull();
  })
})
