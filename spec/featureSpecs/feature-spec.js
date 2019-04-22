(function() {
  (function(){
    var description = "On page load the app gets the headlines and displays them"

    var app = document.getElementById('app')
    var contents = app.innerHTML

    assert.isTrue(
      contents.includes("Sri Lanka attacks: several arrested after 207 killed at hotels and churches on Easter Sunday – live") &&
      contents.includes("Female teachers need protection from sexual harassment, says union"),
      description
    )
    
  })()
})()
