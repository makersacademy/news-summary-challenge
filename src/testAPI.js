



makeNewsAppear();
initializeGrabber();


var newsGrabber = new NewsGrabber();
var renderer = new Renderer;

function initializeGrabber(){
  newsGrabber.apiCallRecord();
  newsGrabber.parseCall();
}

function makeNewsAppear() {

  document
  .getElementById("create_note")
  .addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();


    var values = {
      list_of_headlines: newsGrabber.headlines(),
    };
    renderer.view(values);
  });



}
