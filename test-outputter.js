
 var testOutputter = function (title, pass) {
   text = title.match(/[A-Z][a-z]+/g).join(" ")
   style = "color: blue; width: 300px; display: inline-block;"
   string = '<div style="' + style + '">' + text + '</div>: '
   if (pass) {
     color = 'green'
     output = 'PASS'
   }
   else {
     color = 'red'
     output = 'FAIL'
   }
   string += "<span style=\"color: " + color + ";\">" + output + "</span><br />"

   document.write(string);
 };
