class ArticleGenerator {
  static generate(article) {
    const head = '<div class="article">';
    const headline = `<div id="headline">${article.headline}</div>\n`;
    const url = `<div id="url">${article.url}</div>\n`;
    const summary = `<div id="summary">${article.summary}</div>`;
    const tail = '</div>';
    return head + headline + url + summary + tail;
  }
}
