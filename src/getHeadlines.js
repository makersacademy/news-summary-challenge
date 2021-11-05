// const getNote = (noteId, callback) => {
//   fetch(`http://localhost:3000/notes/${noteId}`)
//   .then((response) => response.json())
//   .then((jsonData) => {
//     callback(jsonData);
//   });
// }

// module.exports = getNote;
getHeadlines = () => {
  fetch(
  "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });

};

module.exports = getHeadlines;

