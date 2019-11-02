(function(exports) {
  function Headline(item, id) {
    this.item = item
    this.id = id
    this.headlineId = item.id
    this.title = item.webTitle
    this.url = item.webUrl
    this.date = getStringDate(item)
  }

  Headline.prototype.seeSummary = function(detail) {
    return detail
  }

  exports.Headline = Headline
})(this)

function getStringDate(item) {
  var date = new Date(item.webPublicationDate)
  var day = date.getDate().toString()
  var month = (date.getMonth() + 1).toString()
  var year = date.getFullYear().toString()

  return month + '/' + day + '/' + year

}
