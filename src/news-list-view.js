const app = document.getElementById('news');

const logo = document.createElement('img');
logo.src = './logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);



function NewsListView() {
}

NewsListView.prototype.render = function(newsList) {
  console.log(newsList[0].title)
  return [
    "<h1> News Summary </h1>",
    newsList.map(function(news) {
      return  "<div class = container>" 
              + "<a href='" + news.url + "'>" + news.title + "</a>" 
              + "<img src=" + news.thumbnail + ">" +
              "</div>"
    }).join("")
  ].join("")
};