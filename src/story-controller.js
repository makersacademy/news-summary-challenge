(function(exports){
  function StoryController(storyData = new StoryData()) {
  this._storyData = storyData;
}

  StoryController.prototype.htmlInserter = function() {
    var ulString = this._storyData.webTitlesUlArray();
    var link = document.getElementById('link');
    link.innerHTML = ulString;
  };

  exports.StoryController = StoryController;

})(this);
  var storyController = new StoryController();
  storyController.htmlInserter();

makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage(){
  window.addEventListener("hashchange", showNotesForCurrentPage);
}

function showNotesForCurrentPage(){
  showNote(getNoteFromUrl(window.location));
}

function getNoteFromUrl(location){
  return location.hash.split("#")[1];
}

function showNote(note) {
  document
    .getElementById("note")
    .innerHTML = noteController.noteList.returnNoteTextByIndex(note);
}
