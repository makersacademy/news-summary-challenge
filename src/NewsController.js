var render = new Render ()

window.onload = function () {
  document.getElementById('layout').innerHTML = render.base()
  document.getElementById('getNews').addEventListener('click', function () {
    loadHeadlines();
  })
}

function loadHeadlines() {
  event.preventDefault()

  fetch("http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=9ba73e9a-73b3-454e-b973-7c295c6942f5")
  .then(response => {
    return response.json();
  })
  .then(data => {
  // Work with JSON data here
  console.log(data);
  let body = data.response.content.fields.body;
  document.body.innerHTML = body;
  })
  .catch(err => {
  // Do something for an error here
  console.log("🌈");
  });
}
