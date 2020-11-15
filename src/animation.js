function animate(elementId) {
  var elem = document.getElementById(elementId);
  var pos = -600;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos += 10;
      elem.style.right = pos + 'px';
    }
  }
}