var html = {};
(function(exports){

  function home(){
    document.write("<h3 id='back'> <a href=''> home </h3>")
  }

  function heading(title){
    document.write("<h3> <a id='1' class='links' href=''>" + title + "</h3>")
  }

  function hideHeadings(){
    document.getElementsByClassName('links')[i].style.visibility = 'hidden';
    var classname = document.getElementsByClassName("links");
    document.getElementById('back').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('body').innerHTML = ""
    })
  }


  function body(){
    document.write("<p id='body'></p>")
  }

  function showBody(text){
    var classname = document.getElementsByClassName("links");
    for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('body').innerHTML = text
      })
    }
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
