const displayFeed = (fetchedData) => {
  feedElement = document.getElementById('feedRequest');
  fetchedData.forEach((article) => {
    let articleElement = document.createElement('p');
    let articleImage = document.createElement('img');
    let articleURL = document.createElement('a');
    let articleTitle = article["webTitle"];
    articleURL.href = article["webUrl"];
    articleImage.src = article["fields"]["thumbnail"];
    articleURL.textContent = articleTitle;
    articleElement.appendChild(articleImage);
    articleElement.appendChild(articleURL);
    feedElement.appendChild(articleElement);
  })
}

module.exports = { displayFeed };