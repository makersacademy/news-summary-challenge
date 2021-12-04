const displayFeed = (fetchedData) => {
  feedElement = document.getElementById('feedRequest')
  fetchedData.forEach((article) => {
    let articleElement = document.createElement('p');
    let articleContent = article['webTitle'];
    articleElement.textContent = articleContent;
    feedElement.appendChild(articleElement);
  });
};

module.exports = { displayFeed };