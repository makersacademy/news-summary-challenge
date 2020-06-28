(function(exports) {
  function GetJSON(apiRequestUrl) {
    this.newsSummaryApi = 'http://news-summary-api.herokuapp.com/'
    this.url = this.newsSummaryApi + apiRequestUrl
  }

  GetJSON.prototype.response = async function() {
    const data = await fetch(this.url)
    return data.json()
  }

  exports.GetJSON = GetJSON;
})(this);
