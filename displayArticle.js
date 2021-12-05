const displayArticle = (data) => {
  // console.log(data);
  const articleTitle1 = document.createElement("p");
  articleTitle1.innerText = data.response.results[0].webTitle;
  document.body.append(articleTitle1);

  const articleTitle2 = document.createElement("p");
  articleTitle2.innerText = data.response.results[1].webTitle;
  document.body.append(articleTitle2);

  const articleTitle3 = document.createElement("p");
  articleTitle3.innerText = data.response.results[2].webTitle;
  document.body.append(articleTitle3);

  const articleTitle4 = document.createElement("p");
  articleTitle4.innerText = data.response.results[3].webTitle;
  document.body.append(articleTitle4);

  const articleTitle5 = document.createElement("p");
  articleTitle5.innerText = data.response.results[4].webTitle;
  document.body.append(articleTitle5);

  const articleTitle6 = document.createElement("p");
  articleTitle6.innerText = data.response.results[5].webTitle;
  document.body.append(articleTitle6);

  const articleTitle7 = document.createElement("p");
  articleTitle7.innerText = data.response.results[6].webTitle;
  document.body.append(articleTitle7);

  const articleTitle8 = document.createElement("p");
  articleTitle8.innerText = data.response.results[7].webTitle;
  document.body.append(articleTitle2);

  const articleTitle9 = document.createElement("p");
  articleTitle9.innerText = data.response.results[8].webTitle;
  document.body.append(articleTitle9);

  const articleTitle10 = document.createElement("p");
  articleTitle10.innerText = data.response.results[9].webTitle;
  document.body.append(articleTitle10);
};

module.exports = displayArticle;
