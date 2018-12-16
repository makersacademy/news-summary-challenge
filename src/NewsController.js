// function NewsController (headlineListView) {
//   this.headlineListView = headlineListView
//
//   this._setup()
// }
//
// NewsController.prototype = {
//   _setup: function () {
//     var self = this
//
//     window.addEventListener('click', function (event) {
//       event.preventDefault();
//       var html = self.headlineListView.render()
//       self.render(html)
//     })
//   },
//
//   render: function(html) {
//     document.getElementById('app').innerHTML = html
//   }
// }

var render = new Render ()

window.onload = function () {
  document.getElementById('layout').innerHTML = render.base()
  document.getElementById('getNews').addEventListener('click', function () {
    loadHeadlines();
  })
}


// Load Headlines
function loadHeadlines() {
  event.preventDefault()
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://content.guardianapis.com/search?api-key=9ba73e9a-73b3-454e-b973-7c295c6942f5', true);

  xhr.onload = function () {
    if (this.status == 200) {
      var headlines = JSON.parse(this.responseText);

      var output = ""
      for (var i in headlines){
        output +=
          "<div class='article'>" +
          "<ul>" +
          "<li>ID: " + headlines[i].id + "</li>" +
          "<li>Title: " + headlines[i].webTitle + "</li>" +
          "</ul>" +
          "<div>";
      }

      document.getElementById('headlines').innerHTML = output;
    }
  }

  xhr.send();
}
