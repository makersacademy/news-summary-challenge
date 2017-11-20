(function (exports) {

function CreateDiv(type){
  this.type = type;
  this.div = null;
}

CreateDiv.prototype.setMessage = function (message){
  this.div = document.createElement("div");
  this.div.setAttribute('class', this.type);
  var text = document.createTextNode(message);
  this.div.appendChild(text);
  document.body.appendChild(this.div);

}

CreateDiv.prototype.addClass = function (type){
  this.type += " " + type;
  this.div.setAttribute('class', this.type);
}
exports.CreateDiv = CreateDiv;
})(this);