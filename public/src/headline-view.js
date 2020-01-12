class HeadlineView {
  constructor(headlines = new Headline()) {
    this.headlines = headlines;
  }

  getHTML() {
    var list = []
    this.headlines.forEach((result) => {
      list.push("<li><div><a href=" + result.webUrl + ">" + result.webTitle + "</a></div></li>")
    })
    list.unshift("<ul>")
    list.push("</ul>")
    return list.join("");
  }
}
