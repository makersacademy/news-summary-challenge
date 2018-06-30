//lets wrap this in an iife. then really interrogate afterwards what I made private and why.

function NewsController(element){
  this.element = element
};

NewsController.prototype.inputHTMLtoDOM = function () {
  this.element.innerHTML = this.APIreturnHTML()
};
