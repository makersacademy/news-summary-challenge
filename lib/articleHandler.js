"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ArticleHandler {
  constructor(guardianHandler, aylienHandler) {
    this.gh = guardianHandler;
    this.ah = aylienHandler;
  }

  async getEverything() {
    let articles = await this.gh.getApi();

    for (let i = 0; i < articles.length; i++) {
      let summary = await this.ah.getSummary(articles[i].webUrl);
      articles[i].sentences = summary.sentences.join(' ');
    }

    return articles;
  }

}

var _default = ArticleHandler;
exports.default = _default;