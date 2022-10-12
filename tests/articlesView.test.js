/**
 * @jest-environment jsdom
 */

const { ArticlesView } = require("../src/articlesView");
const fs = require("fs");
const { mockArticles } = require("../src/mockArticles");

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

describe("ArticlesView", () => {
  it("displays all articles", () => {
    const view = new ArticlesView();
    view.displayArticles(mockArticles);
    const articles = document.querySelectorAll(".card");
    expect(articles.length).toEqual(4);
    const articleOne = document.querySelector("#article-1");
    expect(articleOne.innerHTML).toEqual(
      `<h6 class="card-title">Russians Fleeing the Draft Find an Unlikely Haven</h6><p class="card-text mb-0"><small class="text-muted">WORLD</small></p><p class="card-text mb-0"><small class="text-muted">2022-10-05 00:01</small></p><p class="card-text mb-0"><small class="text-muted">By Andrew Higgins</small></p><p class="card-text"><small><a href="https://www.nytimes.com/2022/10/05/world/asia/russians-fleeing-draft-kyrgyzstan-putin.html">LINK</a></small></p><p class="card-text">Tens of thousands of men have ended up in places like Kyrgyzstan, a former Soviet territory, that normally see few refugees but are willing to take them.</p>`
    );
    const articleTwo = document.querySelector("#article-2");
    expect(articleTwo.innerHTML).toEqual(
      `<h6 class=\"card-title\">OPEC and Russia meet today, with a big cut in oil output on the table.</h6><p class=\"card-text mb-0\"><small class=\"text-muted\">BUSINESS</small></p><p class=\"card-text mb-0\"><small class=\"text-muted\">2022-10-05 01:08</small></p><p class=\"card-text mb-0\"><small class=\"text-muted\">By Stanley Reed</small></p><p class=\"card-text\"><small><a href=\"https://www.nytimes.com/2022/10/05/business/opec-russia-oil-output.html\">LINK</a></small></p><p class=\"card-text\">Saudi Arabia appears determined to bolster prices and continue coordinating with Russia during the Ukraine war.</p>`
    );
    const articleThree = document.querySelector("#article-3");
    expect(articleThree.innerHTML).toEqual(
      `<h6 class=\"card-title\">Putin signs annexation laws, plowing ahead with a parallel reality as Russia loses ground in Ukraine.</h6><p class=\"card-text mb-0\"><small class=\"text-muted\">WORLD</small></p><p class=\"card-text mb-0\"><small class=\"text-muted\">2022-10-05 07:06</small></p><p class=\"card-text mb-0\"><small class=\"text-muted\">By Anton Troianovski</small></p><p class=\"card-text\"><small><a href=\"https://www.nytimes.com/2022/10/05/world/europe/putin-annexation-ukraine-russia.html\">LINK</a></small></p><p class=\"card-text\">Russian state television trumpeted the news, while playing down or ignoring the fact that Moscow’s forces are in retreat in multiple parts of the front line.</p>`
    );
    const articleFour = document.querySelector("#article-4");
    expect(articleFour.innerHTML).toEqual(
      `<h6 class=\"card-title\">With His 62nd Home Run, Aaron Judge Makes His Case</h6><p class=\"card-text mb-0\"><small class=\"text-muted\">SPORTS</small></p><p class=\"card-text mb-0\"><small class=\"text-muted\">2022-10-04 20:08</small></p><p class=\"card-text mb-0\"><small class=\"text-muted\">By David Waldstein</small></p><p class=\"card-text\"><small><a href=\"https://static01.nyt.com/images/2022/10/04/multimedia/04mlb-judge-62-staffjubo-1-7f68/04mlb-judge-62-staffjubo-1-7f68-superJumbo.jpg\">LINK</a></small></p><p class=\"card-text\">A blast against Texas vaulted Judge past Roger Maris for the American League’s single-season record, rekindling enthusiasm for a milestone spoiled by the steroid era.</p>`
    );
  });

  it("clears articles before display", () => {
    const view = new ArticlesView();
    view.displayArticles(mockArticles);
    view.displayArticles(mockArticles);
    const articles = document.querySelectorAll(".card");
    expect(articles.length).toEqual(4);
  });

  it("displays uneven number of articels", () => {
    const view = new ArticlesView();
    view.displayArticles(mockArticles.slice(0, 3));
    const articles = document.querySelectorAll(".card");
    expect(articles.length).toEqual(3);
  });

  it("adds callback to search button", () => {
    const view = new ArticlesView();
    const mockCallback = jest.fn();
    view.addSearchEventHandler(mockCallback);
    const searchButton = document.querySelector("#search-button");
    searchButton.click();
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("adds callback to reset button", () => {
    const view = new ArticlesView();
    const mockCallback = jest.fn();
    view.addResetEventHandler(mockCallback);
    const resetButton = document.querySelector("#reset-button");
    resetButton.click();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
