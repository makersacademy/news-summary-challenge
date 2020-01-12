(function(exports){

    function TitleList(){
        this.titles = [];
    };

    TitleList.prototype.addTitle = function(title) {
        this.titles.push(new Title(title))
    };

    TitleList.prototype.returnTitles = function () {
        return this.titles;
    };

    exports.TitleList = TitleList;

})(this);



// (function(exports) {
//     function NotesList() {
//         this.notes = [];
//     };
  
//     NotesList.prototype.addNote = function (note) {
//         this.notes.push(new Note(note));
//     };
  
//     NotesList.prototype.returnNotes = function() {
//         return this.notes;
//     }
  
//     NotesList.prototype.getById = function(id) {
//       var arr = this.notes.filter(note => note.id == id)
//       return arr[0]
//     }
  
//     exports.NotesList = NotesList;
  
//   })(this);
  