(function(exports) {

function Controller(list = new List(), view = new View(list)){
  this.list = list
  this.view = view
};

Controller.prototype.listMaker = function(element){
  document.getElementById(element).innerHTML = this.view.displayHeadlines();
};

exports.Controller = Controller;

})(this);

function changeURLAndShowNote(){
  window.addEventListener("hashchange", showCurrentNews)
}

function showCurrentNews(location){
  var id = window.location.hash.split("#")[1].split("/")[1]
  showNote(id)
}


function showNote(id){
  var singleNoteView = new SingleNoteView(controller.list.notes[id])
  document
    .getElementById("note")
    .innerHTML = singleNoteView.returnNoteText();
};
