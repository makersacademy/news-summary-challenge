const displayArticle = (data) => {
  const articleTitle = document.createElement("p");
  articleTitle.innerText = data.response.content.webTitle;
  document.body.append(articleTitle);
};

module.exports = displayArticle;
