(function (exports) {
  function HeadlinesView (headlines) {
    var html = []
    var headlines = headlines

    function render () {
      html = headlines.map(function(headline) {
        return (`<li><img src="${headline.getPicLink()}"><a href="#${headline.getId()}">${headline.getHeadline()}</a></li>`)
      })
      return `<ul>${html.join('')}</ul>`
    }

    return {
      render: render
    }
  }
  exports.HeadlinesView = HeadlinesView
})(this);
