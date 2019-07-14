(function (exports) {
  function HeadlinesView (headlines) {
    var html = []
    var headlines = headlines

    function returnHTML () {
      html = headlines.map(function(headline) {
        return (`<li><img src="${headline.getPicLink()}"><a href="#${headline.getId()}">${headline.getHeadline()}</a></li>`)
      })
      return `<ul>${html.join('')}</ul>`
    }

    return {
      returnHTML: returnHTML
    }
  }
  exports.HeadlinesView = HeadlinesView
})(this);
