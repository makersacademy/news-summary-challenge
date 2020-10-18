window.onload = (function () {
 
  (function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;
  
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";
  
            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }
  
            output += "</span>&nbsp;";
        }
  
        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
  })(document.getElementById("logger"));
  
  // Testing
  SpecHandler.tests()

  // CSS for colours
  SpecHandler.css()

  
});

