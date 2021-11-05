// const getNote = (noteId, callback) => {
//   fetch(`http://localhost:3000/notes/${noteId}`)
//   .then((response) => response.json())
//   .then((jsonData) => {
//     callback(jsonData);
//   });
// }



getHeadlines = () => {
  fetch(
  "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=headlines"
)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });

};

module.exports = getHeadlines;

