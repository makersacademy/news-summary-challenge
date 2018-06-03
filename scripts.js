const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'the_guardian_logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://content.guardianapis.com/search?api-key=5bba6d5e-cbb0-438b-917a-b64842c1c4db&show-blocks=all&', true);
request.onload = function () {

  // Begin accessing JSON data here
  data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      // console.log(data.response.results[1])
      index = 0
      data.response.results.forEach(news => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.setAttribute('onclick', 'expandNote(event.target.id);')
      h1.setAttribute('id', index)
      h1.textContent = news.webTitle;


      container.appendChild(card);
      card.appendChild(h1);
      index ++;
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }console.log(data.response.results[1])
}



function expandNote(index) {

  document.getElementById('fullnews').innerHTML=  data.response.results[index].blocks.body["0"].bodyTextSummary
  document.getElementById('pic').setAttribute('src', data.response.results[index].blocks.body["0"].elements["1"].assets["0"].file)

  var x = document.getElementById('frontPage');
  x.style.display = "none";
  var y = document.getElementById('secondPage');
  y.style.display = "block";
}
function goBack() {
  var x = document.getElementById('frontPage');
  x.style.display = "block";
  var y = document.getElementById('secondPage');
  y.style.display = "none";

}
request.send();
