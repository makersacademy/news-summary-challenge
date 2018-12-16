var html = {};
(function(exports){

  function heading(title){
    document.write("<h3 id='title'> <a href=''>" + title + "</h3>")
  }

  function body(){
    document.write("<p id='body'></p>")
  }

  function showBody(){
    document.getElementById('title').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('body').innerHTML = "ciao"
    })
  }

  function home(){
    document.write("<h3 id='back'> <a href=''> home </h3>")
  }

  function hideBody(){
    document.getElementById('back').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('body').innerHTML = ""
    })
  }

  exports.heading = heading
  exports.home = home
  exports.body = body
  exports.showBody = showBody
  exports.hideBody = hideBody
})(html)
