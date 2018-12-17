function GuardianRequest() {
    this.news = [];
    this.getApiData();
}

GuardianRequest.prototype = {
  getApiData: function () {
      var self = this;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("GET", "https://content.guardianapis.com/search?q=politics&show-tags=contributor&show-fields=headline,thumbnail,body&show-refinements=all&order-by=newest&show-blocks=body&api-key=YOUR_API_KEY", false);
      httpRequest.onload = function () {
          var data = JSON.parse(httpRequest.response);
          self.news = data.response.results;
      };
      httpRequest.send();
  }
};

