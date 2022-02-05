const get_news = () => {
	fetch('./news.json').then((response) =>{ 
    //fetch('https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail&show-blocks=all').then((response) =>{ 
  return response.json();
  
}).then((jsonData)=> {
  console.log(jsonData);
  articles = jsonData['response']['results'];
  articles.forEach((article) => {

  newId = document.querySelectorAll('article').length + 1;

  articleLink = document.createElement('a');
  // elements = article.webUrl.split('/');
  // articlePath = elements[elements.length - 1];
  // articleLink.href = `#${articlePath}`;
  articleLink.href = article.webUrl;

  articleSection = document.createElement('article');
  articleSection.id = `article-${newId}`;

  articleTitle = document.createElement('h3');
  articleTitle.innerText = article.webTitle;

  articlethumbnail = document.createElement('img');
  articlethumbnail.src = article.fields.thumbnail;

  articleSection.append(articleTitle);
  articleSection.append(articlethumbnail);
  articleLink.append(articleSection);

  document.querySelector('.articleContainer').appendChild(articleLink);
  })
  })
};

module.exports = get_news;