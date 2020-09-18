let apiData;
// fetch(
//   'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body'
// )
//   .then(function (response) {
//     if (response.status !== 200) {
//       console.log(
//         'Looks like there was a problem. Status Code: ' + response.status
//       );
//       return;
//     }

//     // Examine the text in the response
//     response.json().then(function (data) {
//       console.log(data);
//       apiData = data;
//     });
//   })
//   .catch(function (err) {
//     console.log('Fetch Error :-S', err);
//   });

let text = article.response.content.fields.body;
let app = document.getElementById('app');
let createArray = text.split('</div>');
let pureNews = createArray.filter((e) => {
  return e != '   ';
});
console.log(pureNews[0]);
//console.log(pureNews.slice(0, 3));
app.innerHTML = pureNews[10];
