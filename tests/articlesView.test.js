/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ArticlesView = require('../articlesView');
 const modelMock = {
   articles: [
    {
      fields: {
        headline: "Covid cases have hit plateau in parts of UK, says top medical adviser"
      }
    },
    {
      fields: {
        headline: "Covid live news: UK coronavirus cases could be plateauing, expert says; Beijing reports first Omicron case"
      }
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
  })