const displayArticles = (data) => {
  let section = document.querySelector('section');
  while (section.firstChild) {
    section.removeChild(section.firstChild);
}
  let results = data.response.results;

  // const headlines = document.getElementById('headlines');
  // headlines.innerHTML = '';
  
  results.forEach(result => {
    // grab references to all DOM elements that need manipulating
 
    let article = document.createElement('article');
    let img = document.createElement('img');
    let heading = document.createElement('h3');
    let link = document.createElement('a');
    let content = document.createElement('p');
    article.className = 'article';
  
    heading.innerText = result.webTitle;
    content.innerText =result.fields.bodyText;
    link.href = result.webUrl;
    link.innerText = heading.innerText
    img.src = result.fields.thumbnail;

 
    article.appendChild(heading);
    heading.appendChild(link);
    article.appendChild(img);
    article.appendChild(content);
    section.appendChild(article);

  });
};


module.exports = displayArticles;