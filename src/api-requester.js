class ApiRequester {
  constructor() {
    this.articlelistview = new Articlelistview();
  }

  sendRequest() {

    let apirequester = this;

    fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=  https://content.guardianapis.com/search?from-date=2020-01-04&to-date=2020-04-05&q=politics?show-fields=body').then(function(response) {
	    // The API call was successful!
	      console.log('success!', response);
        let data = JSON.parse(response);
        console.log(data);
    }).catch(function (error) {
	     // There was an error
	      console.warn('Uh ohh something went wrong.', error);
    });

  }
}
