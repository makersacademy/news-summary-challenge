class NewsList {
  constructor() {
    this.newsarray = [];
  }
}
  getNewsList() {
    var request = new XMLHttpRequest();
    var urlAPI = 'https://content.guardianapis.com/search?api-key=9ffe918e-97c6-466d-949e-c4f06d7079df'
    request.open('GET', urlAPI, true)
    request.onload = function () {
      var result = JSON.parse(this.response); }
    request.send();
  };