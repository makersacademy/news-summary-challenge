(function(exports){

    function View() {

    };


    View.prototype.createTitleLink = function(title){
        var htmlElem = document.createElement('a');
        var linkText = document.createTextNode(title.title);
        htmlElem.setAttribute('href', title.url);
        htmlElem.appendChild(linkText);
        return this.htmlElem;

    };

    View.prototype.createTitleHtml = function (title) {
        var htmlElem = document.createElement('li');
        htmlElem.setAttribute('id', title.id);
        htmlElem.appendChild(this.createTitleLink(title));
        return htmlElem;

    };

    View.prototype.addToList = function (title) {
        var list = document.getElementById('title-list');
        list.appendChild(this.createTitleHtml(title));
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
  