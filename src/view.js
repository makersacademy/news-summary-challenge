var html = {};
(function(exports){

  function heading(title){
    document.write("<h3> <a class='classname' href=''>" + title + "</h3>")
    document.write("<h3> <a class='classname' href=''>" + title + "</h3>")
    document.write("<h3> <a class='classname' href=''>" + title + "</h3>")
    document.write("<h3> <a class='classname' href=''>" + title + "</h3>")
}
  var classname = document.getElementsByClassName("classname");

  function body(){
    document.write("<p id='body'></p>")
  }

  function showBody(text){
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', function (event) {
          event.preventDefault();
          alert(text)
         })
      }
  }

  // function showBody(){
  //   document.getElementById('title').addEventListener('click', function (event) {
  //     event.preventDefault();
  //     document.getElementById('body').innerHTML = "ciao"
  //   })
  // }
  function home(){
    document.write("<h3 id='back'> <a href=''> home </h3>")
  }



  function hideBody(){
    document.getElementById('back').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('body').innerHTML = ""
    })
  }



  // function myFunction() {
  //
  // };
  //
  // for (var i = 0; i < classname.length; i++) {
  //     classname[i].addEventListener('click', myFunction, false);
  // }

  exports.heading = heading
  exports.home = home
  exports.body = body
  exports.showBody = showBody
  exports.hideBody = hideBody
})(html)
