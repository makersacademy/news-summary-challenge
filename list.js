(function(exports) {
  function List(){
    this.storage = [];
  }

  List.prototype.add = function(object) {
    this.storage.push(object);

  }

  List.prototype.getNews = function(url) {
     var req = new XMLHttpRequest();
     req.onreadystatechange = function() {
       if (req.readyState == XMLHttpRequest.DONE){
          return JSON.parse(req.responseText);
       }

     }
     req.open("GET", url, true);
     req.send;



  }

  exports.List = List;
})(this)
