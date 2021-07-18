'use strict';

describe("mockGuardian", () => {
  it("can get a promise from a fake API", () => {
    let guardian = new MockGuardian();
  
    expect(guardian.getArticleData("dummy url").then()).toBeATypeOf("object");
  })

  it("can render articles", () => {
    let guardian = new MockGuardian();
    guardian.getArticleData("dummy url").then(data => {
      let rendered = guardian.renderArticle(data);

      // test result may appear on wrong area of the testing interface.
      expect(rendered).toInclude('<h2 class="headline">');
    });
  });
});