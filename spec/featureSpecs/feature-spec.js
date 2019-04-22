(function() {
  (function(){
    var description = "On page load the app gets the headlines and displays them, including the thumbnail"

    var app = document.getElementById('app')
    var contents = app.innerHTML

    assert.isTrue(
      contents.includes("Bolsonaro's motorbike escapade provokes helmet backlash") &&
      contents.includes("https://media.guim.co.uk/9daa1ed862f91d0a99219d26b89282b0f90060c6/0_192_2000_1199/500.jpg"),
      description
    )
    
  })()
})()
