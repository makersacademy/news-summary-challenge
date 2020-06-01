class News {
  constructor(){
    this.stories = []
    this.summary = ""
    this.article = []
  }

  retrieveData(apiRequestUrl){
    this.stories = []
    let self = this;
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', apiRequestUrl, true)

    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      self.stories = data.response.results
      self.displayTitleHTML();
    }

    // Send request
    request.send()
  }


  retrieveSummaryData(){
    let self = this;
    window.addEventListener('hashchange', function(){
      let id = window.location.hash.split('#article/')[1]

      self.article = self.stories[id]
      apiRequestUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + self.stories[id].webUrl

      var request = new XMLHttpRequest()
      request.open('GET', apiRequestUrl, true)

      request.onload = function() {
        var data = JSON.parse(this.response)
        self.summary = data
        self.displaySummaryHTML();
      }
      request.send()
    }, false);
  }

  displayTitleHTML(){
    let htmlString = ''
    this.stories.forEach((item, i) => {
      htmlString += '<div class="card"><img src="' + this.stories[i].fields.thumbnail + '"><h4><a id="' + this.stories.indexOf(item) + '" href="#article/' + this.stories.indexOf(item) + '">' + item.webTitle + '</a></h4></div>'
    });
    let element = document.getElementById('news')
    element.innerHTML = htmlString;
  }

  displaySummaryHTML(){
    let htmlString = '<p>'
    this.summary.sentences.forEach((item, i) => {
      htmlString += item + '</br></br>'
    });
    htmlString += '</p></br><p><a href="' + this.article.webUrl + '"> View the original article here </a></p>'
    let element = document.getElementById('news')
    element.innerHTML = htmlString;
  }
}
