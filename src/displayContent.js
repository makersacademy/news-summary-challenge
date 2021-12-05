const displayContent = (data) => {
  const headlines = document.getElementById("headlines");
  headlines.innerHTML = "";
  let results = data.response.results;

  results.forEach((result) => {
    let articleLink = document.createElement("a");
    let articleEl = document.createElement("article");
    let articleHeadline = document.createElement("h2");
    let articleImg = document.createElement("img");
    articleEl.className = "article";
    articleImg.className = "article-img";

    articleHeadline.innerText = result.webTitle;
    articleLink.href = result.webUrl;
    articleImg.src = result.fields.thumbnail;

    articleEl.append(articleImg);
    articleEl.append(articleHeadline);
    articleLink.append(articleEl);
    headlines.append(articleLink);
  });
};

module.exports = displayContent;
