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
