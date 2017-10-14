(function(exports) {
  function Buddy() {

  }

  Buddy.prototype.createNote = function() {
    var randomImageNumber = Math.floor(Math.random() * 5);
    return "<img src='images/buddy_createnote" +
           randomImageNumber +
           ".png' width='600'>";
  };

  exports.Buddy = Buddy;
})(this);
