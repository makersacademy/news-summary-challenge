(function (exports) {

  var id = 0

  function Headline (headline, link, picLink) {
    var headline = headline
    var link = link
    var picLink = picLink
    id ++

    function getHeadline() {
      return headline
    }

    function getPicLink() {
      return picLink
    }

    function getLink() {
      return link
    }

    function getId() {
      return id
    }

    return {
      getHeadline: getHeadline,
      getPicLink: getPicLink,
      getLink: getLink,
      getId: getId
    }

  }

  exports.Headline = Headline
})(this)
