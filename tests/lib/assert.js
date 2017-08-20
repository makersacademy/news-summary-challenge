var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      document.getElementById("tests").innerHTML += ("<ul>🔴 failed: " + assertionToCheck + " is not truthy</ul><br>");
    } else {
      document.getElementById("tests").innerHTML += ("<ul>✅ completed successfully!" + "</ul><br>");
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
