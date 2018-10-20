import ArticleView from '../models/articleView.js'; // eslint-disable-line

Barracuda.describe('Article View', () => {
  Barracuda.it('gets the ball rolling adding article mock', () => {
    const doubleArticle = {
      header: 'World is Crazy',
      body: 'Yes, sirree',
    };
    const view = new ArticleView();
    Barracuda.expect(view.addArticle(doubleArticle)).toEqual(undefined);
  });
  Barracuda.it('convert article into html header to display', () => {
    const doubleArticle = {
      header: 'World is Crazy',
      body: 'Yes, sirree',
    };
    const view = new ArticleView();
    view.addArticle(doubleArticle);
    Barracuda.expect(view.htmlHeader()).toEqual(
      '<div class="header"><h2>World is Crazy</h2></div>',
    );
  });
});
