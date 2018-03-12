
List = function() {
  this._notes = [];
}

List.prototype = {

  printNotes: function() {
    return this._notes
  },

  // printNotes: function() {
  //   this._notes.forEach(element => {
  //     return element;
  //   });
  // },

  addNote: function(string) {
    note = new Note(string);
    this._notes.push(note);
  }
};
