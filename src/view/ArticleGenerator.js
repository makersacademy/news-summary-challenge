class ArticleGenerator {
  static generate(article) {
    const headline = `<div id="article"><div id="headline">${article.headline}</div>\n`;
    const url = `<div id="url">${article.url}</div>\n`;
    const summary = `<div id="summary">${article.summary}</div></div>`;
    return headline + url + summary;
  }
}
