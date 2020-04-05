document.write("<h1> TESTS ON TESTS ON TESTS by Benjamaker </h1></br></br>");

let describe = function(message, callBack) {
  document.write("--------------------------");
  document.write(message + "</br>");
  callBack();
};