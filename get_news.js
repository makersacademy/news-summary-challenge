const get_news = () => {
	fetch('./news.json').then((response) =>{ 
    //fetch('https://content.guardianapis.com/search?page=1&api-key=test&show-fields=headlines').then((response) =>{ 
  return response.json();
}).then((jsonData)=> {
  articles = jsonData['response']['results'];
  articles.forEach((article) => {
  newId = document.querySelectorAll('p').length + 1;
  articleDiv = document.createElement('p');
  articleDiv.className = 'article';
  articleDiv.id = `article-${newId}`;
  title = document.createElement('span');
  title.className = 'title';
  title.innerText = article.webTitle;
  articleDiv.append(title);
  document.body.appendChild(articleDiv);
  })
  })
};

module.exports = get_news;