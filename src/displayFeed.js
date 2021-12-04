const displayFeed = (fetchedData) => {
  feedElement = document.getElementById('feedRequest')
  fetchedData.forEach((article) => {
    let articleElement = document.createElement('p');
    let articleTitle = article['webTitle'];
    let articleURL = document.createElement('a');
    articleURL.href = article['webUrl'];
    articleURL.textContent = articleTitle;
    articleElement.appendChild(articleURL);
    feedElement.appendChild(articleElement);
  });
};

module.exports = { displayFeed };