const displayContent = (data) => {
  const headlines = document.getElementById("headlines");
  headlines.innerHTML = "";
  let results = data.response.results;

  results.forEach((result) => {
    let articleLink = document.createElement("a");
    let articleEl = document.createElement("article");
    let articleHeadline = document.createElement("h2");
    articleEl.className = "article";

    articleHeadline.innerText = result.webTitle;
    articleLink.href = result.webUrl;

    articleEl.append(articleHeadline);
    articleLink.append(articleEl);
    headlines.append(articleLink);
  });
};

module.exports = displayContent;
