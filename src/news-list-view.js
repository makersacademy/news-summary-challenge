const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = './logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);



function NewsListView() {
}

NewsListView.prototype.render = function(newsList) {
  return [
    "<h1> News Summary </h1>",
    newsList.map(function(news) {
      "<div>",
        "<a href='" + news.webURL + "'>" + news.headline + "</a>",
      "</div>"
    })
  ].join("")
};