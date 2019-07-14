(function (exports) {
  function Controller (headlines = Headlines, apiCall = ApiCall, headlinesView = HeadlinesView, documentId = 'app') {
    var documentId = documentId
    var headlines = headlines
    var apiCall = new apiCall
    var headlinesView = headlinesView

    async function frontPage () {
      var result = await apiCall.fetchHeadlines ()
      var news = new headlines(result)
      _renderHTML(news.getHeadlines())
    }

    function _renderHTML(result) {
      var render = new headlinesView(result)
      var html = render.returnHTML()
      var element = document.getElementById(documentId)
      element.innerHTML = html;
    }

    return {
      frontPage: frontPage
    }
  }

  exports.Controller = Controller
})(this)

var controller = new Controller()
controller.frontPage()
