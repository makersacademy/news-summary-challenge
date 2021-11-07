/**
 * @jest-environment jsdom
 */
const Presenter = require('./presenter');

describe('Presenter', () => {
  const resultsStub = () => {
    return Array(10).fill({}).map((_, index) => {
      return {
        webTitle: `irrelevant${index}`,
        fields: {thumbnail: `url-${index}`}
      };
    });
  };

  const results = resultsStub();
  const presenter = new Presenter(results);

  describe('createHeadlines', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="headlines"></div>';
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('creates 10 anchor tags', () => {
      const newsSection = document.getElementById('headlines');

      presenter.createHeadlines();

      let elements = newsSection.querySelectorAll('h1');

      expect(elements.length).toBe(10);
    });

    it('creates headlines inside corasponding div id', () => {
      presenter.createHeadlines();

      let resultDiv = document.querySelector('#hl-5');

      expect(resultDiv.firstChild.textContent).toEqual('irrelevant5');
    });

    it('creates img inside corasponding div id', () => {
      presenter.createHeadlines();

      let resultDiv = document.querySelector('#hl-5');

      expect(resultDiv.children[1].outerHTML).toMatch('url-5');
    });
  });
});
