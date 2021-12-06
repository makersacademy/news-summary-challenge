const displayArticle = (data) => {
  // get visibility of data response from API
  console.log(data);
  
  // Select the div with the id 'articles'
  const articles = document.querySelector('#articles');

  // Store the array needed from the response in results
  let results = data.response.results;

  // Iterate through the array to get each result and build the HTML needed
  results.forEach((result) => {
    let articleLink = document.createElement("a");
    let articleEl = document.createElement('article');
    let articleHeader = document.createElement('h2');
    let articleImage = document.createElement('img');
    articleEl.className = "article";
    articleImage.className = "article-image";

    articleHeader.innerText = result.webTitle;
    articleLink.href = result.webUrl;
    articleImage.src = result.fields.thumbnail;
    
    articleEl.append(articleHeader);
    articleEl.append(articleImage);
    articleLink.append(articleEl);
    articles.append(articleLink);
  });
};

module.exports = displayArticle;
