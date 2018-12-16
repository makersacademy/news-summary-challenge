var html = {};
(function(exports){

  function heading(title){
    document.write('<h3><a href=' + model.title() +
     '>' + title +'</h3>')
  }
  function body(){
    document.write('<p id=body></p>')
  }
  function home(title){
    document.write('<h3><a href=' + model.title("https://www.npmjs.com/package/http-server") +
     '>' + title +'</h3>')
  }

  exports.heading = heading
  exports.body = body
  exports.home = home
})(html)
