(function(exports) {
  function GetJSON(apiRequestUrl) {
    this.NewsSummaryUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl='
    this.url = this.NewsSummaryUrl + apiRequestUrl
  }

  GetJSON.prototype.response = async function() {
    const data = await fetch(this.url)
    const dataJSON = await data.json()
    return dataJSON.response
  }

  exports.GetJSON = GetJSON;
})(this);
