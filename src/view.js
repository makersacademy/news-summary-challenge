(function(exports){

    function View() {

    };


    View.prototype.createTitleLink = function(title){
        var htmlElem = document.createElement('a');
        var linkText = document.createTextNode(title.title);
        htmlElem.setAttribute('href', title.url);
        htmlElem.appendChild(linkText);

    };

    View.prototype.createTitleHtml = function (title) {
        
    };


    exports.View = View;
})(this);


// //
// (function(exports) {
//     function NotesListView(notesList) {
//       this.notesList = notesList;
//     };
  
  
//     NotesListView.prototype.getHTMLString = function() {
//       var string = "<ul>"
//       this.notesList.returnNotes().forEach(note => {
//         string += `<li><a href='#notes/${note.id}'>${note.returnText().substr(0, 20)}</a></li>`;
//       });
//       return string + "</ul>"
//     };
  
  
  
//     exports.NotesListView = NotesListView;
//   })(this);
  