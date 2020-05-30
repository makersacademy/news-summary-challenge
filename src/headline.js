(function (exports) {
  let count = 0;

  function Headline(webTitle, webUrl) {
    this.webTitle = webTitle;
    this.webUrl = webUrl;
    this.id = ++count;
    console.log(this.id);

    Object.defineProperty(this, 'title', {
      get() {
        return this.webTitle;
      },
    });
  }

  exports.Headline = Headline;
})(this);
