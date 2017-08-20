var assert = {
  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      document.getElementById("tests").innerHTML += ("<ul><li><em>🔴 " + description + " </em>failed! </li></ul><br>");
    } else {
      document.getElementById("tests").innerHTML += ("<ul><li><em>✅ " + description + " </em>completed successfully!" + "</li></ul><br>");
    }
  }
};

var describe = function(description, test) {
  document.getElementById("tests").innerHTML += "<b>" + description + "</b><br>";
  try { test(); }
  catch(err) {
    document.getElementById("tests").innerHTML += ("<ul>⚠️ error: " + err.message + "</ul><br>");
    console.error(err);
  }
};
