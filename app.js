fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
  let body = data.response.content.fields.body;
  document.body.innerHTML = body;
}).catch(err => {
  // Do something for an error here
  console.log("🌈");
});
