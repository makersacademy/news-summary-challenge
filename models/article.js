(function (exports) {

  var id = 0

  function Article (headline, summary, link) {
    var headline = headline
    var summary = summary
    var link = link
    id ++

    function getHeadline() {
      return headline
    }

    function getSummary() {
      return summary
    }

    function getLink() {
      return link
    }

    function getId() {
      return id
    }

    return {
      getHeadline: getHeadline,
      getSummary: getSummary,
      getLink: getLink,
      getId: getId
    }

  }

  exports.Article = Article
})(this)
