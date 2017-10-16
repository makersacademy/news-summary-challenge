(function(exports) {
  function Note(string) {
    this.body = string;
  }

  Note.prototype.returnNote = function() {
    return this.body;
  };

  exports.Note = Note;
})(this);
