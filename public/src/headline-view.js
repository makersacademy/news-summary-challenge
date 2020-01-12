class HeadlineView {
  constructor(headlines = new Headline()) {
    this.headlines = headlines;
  }

  getHTML() {
    return "<ul>" + this.headlines.map(headline => {
      return "<li><div>" + headline + "</div></li>"
    }).join("") + "</ul>"
  }
}