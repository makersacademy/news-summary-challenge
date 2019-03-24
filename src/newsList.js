class NewsList {
  constructor() {
    this.newsArray = [];
  }
}
  getNewsList() {
    var date = this.formatDate();
    var numberOfNews = 0;
    var request = new XMLHttpRequest();
    var urlAPI = 'https://content.guardianapis.com/search?api-key=9ffe918e-97c6-466d-949e-c4f06d7079df'
    
    request.open('GET', urlAPI, true)
    request.onload = function() {
      var result = JSON.parse(this.response)
    numberOfNews = data.response.results.length
    this.newsArray.push(data.response.results)
   }
    request.send()
    return numberOfNews ;
  };

  formatDate() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var dateString = year + "-" + "0" + (month + 1) + "-" + date;
    return dateString;
  }
}