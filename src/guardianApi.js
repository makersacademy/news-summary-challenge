(function(exports) {
  class GuardianApi {
    constructor() {}

    guardianUrl(query) {
      return `http://content.guardianapis.com/${query}`;
    }

    url(guardianUrl) {
      return `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${guardianUrl}`;
    }

    getHeadlines(callback) {
      let todayObject = new Date();
      let today = todayObject.toISOString.slice(0, 10);
      const query = `search?section=uk-news%26from-date=${today}%26show-fields=headline,thumbnail`;
      const guardianUrl = this.guardianUrl(query);
      const url = this.url(guardianUrl);

      this.request(url, callback);
    }

    request(url, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          const responseJson = JSON.parse(xmlHttp.responseText);
          callback(responseJson);
        }
      }
      xmlHttp.open("GET", url, true); // true for asynchronous 
      xmlHttp.send(null);
    }
  }

  exports.GuardianApi = GuardianApi;
})(this);