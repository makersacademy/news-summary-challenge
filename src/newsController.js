(function(exports) {
  function Controller(render = new RenderNews) {
    this._render = render;

    Controller.prototype.getNews = function(callback) {
      var guardian = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world"
      var that = this
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", guardian, true);

      xhttp.onreadystatechange = function() {
        console.log('2')
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText)
          callback(data.response);
          // that.render(data.response)
        }
      }
     xhttp.send();
    };

    Controller.prototype.render = function(data) {
      var renderNews = this._render
      renderNews.allNews(data);
    }
  }

  exports.Controller = Controller;
})(this);

   var controller = new Controller();
   controller.getNews(function(data) {
   controller.render(data)
     console.log('1', data)
   });
