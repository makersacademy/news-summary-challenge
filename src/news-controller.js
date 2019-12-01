function NewsController() {

};

NewsController.prototype = (function() {

  function getNews() {
    console.log("calling getNews()")
    const api = 'https://content.guardianapis.com/search?api-key=f4eb11b1-0a1b-4793-8122-376a8dde0093'
    fetch(api)
    .then(data => { return data.json() })
    .then(result => {console.log(result)})
    }

    function listNews() {
      news = this.getNews();
      console.log(news);
      for(i = 0; i < news.length; i++) {
        window.onload = function() {
          document.getElementById("news").innerHTML = news[i].webTitle;
        }
      }
    }

  return {
    getNews: getNews,
    listNews: listNews
  };
})();

x = new NewsController();
x.listNews();




// function NoteController() {
//   this.noteList = new NoteList;
//   this.noteListView = new NoteListView(this.noteList);
// };
//
// NoteController.prototype = (function() {
//
//   function addHTML(text) {
//     this.noteList.createNote(text);
//     content = this.noteListView.htmlString();
//     window.onload = function() {
//       document.getElementById("note-list").innerHTML = content;
//     }
//   };
//
//   return {
//     addHTML: addHTML
//   };
//
// })();
//
// x = new NoteController();
// x.addHTML("Favourite drink: coffee");
