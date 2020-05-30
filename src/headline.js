(function (exports) {
  let count = 0;

  function Headline(webTitle, webUrl) {
    this.webTitle = webTitle;
    this.webUrl = webUrl;
    this.id = ++count;
    console.log(this.id);
  }

  exports.Headline = Headline;
})(this);
