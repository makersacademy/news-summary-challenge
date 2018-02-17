function NoteList() {

  this.notes = []

}

NoteList.prototype = {

  addNote: function(note) {
    this.notes.push(note)
  },

  getNotes: function() {
    return this.notes
  }


}
