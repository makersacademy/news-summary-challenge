class ApiRequester {
  constructor() {
    this.articlelistview = new Articlelistview();
  }

  sendRequest() {

    let apirequester = this;

    fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2020-01-04&to-date=2020-04-05&q=politics?show-fields=body').then(function(response) {
        return response.json();
      }).then(function(data) {
          mapResult(data);
      }).catch(function (error) {
	     // There was an error
	      console.warn('Uh ohh something went wrong.', error);
    });

      function mapResult(data) {
        for (let i = 0; i < data.response.results.length; i++) {
        let headline = data.response.results[i].webTitle;
        let url = data.response.results[i].webUrl;
        apirequester.articlelistview.articlelist.addArticle(headline, url);
      }
    }
  }
}
