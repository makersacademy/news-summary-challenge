function addElement(text, location) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById(location);
  document.body.insertBefore(newDiv, currentDiv);
}
