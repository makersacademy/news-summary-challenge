const displayArticle = (data) => {
  // get visibility of data response from API
  console.log(data);

  // populate HTML for article 1
  const article1Header = document.querySelector("#article1Header");
  article1Header.innerText = data.response.results[0].webTitle;
  const article1Link = document.querySelector("#article1Link");
  article1Link.href = data.response.results[0].webUrl;
  const article1Image = document.querySelector("#article1Image");
  article1Image.src = data.response.results[0].fields.thumbnail;

  // populate HTML for article 2
  const article2Header = document.querySelector("#article2Header");
  article2Header.innerText = data.response.results[1].webTitle;
  const article2Link = document.querySelector("#article2Link");
  article2Link.href = data.response.results[1].webUrl;
  const article2Image = document.querySelector("#article2Image");
  article2Image.src = data.response.results[1].fields.thumbnail;

  // populate HTML for article 3
  const article3Header = document.querySelector("#article3Header");
  article3Header.innerText = data.response.results[2].webTitle;
  const article3Link = document.querySelector("#article3Link");
  article3Link.href = data.response.results[2].webUrl;
  const article3Image = document.querySelector("#article3Image");
  article3Image.src = data.response.results[2].fields.thumbnail;

  // populate HTML for article 4
  const article4Header = document.querySelector("#article4Header");
  article4Header.innerText = data.response.results[3].webTitle;
  const article4Link = document.querySelector("#article4Link");
  article4Link.href = data.response.results[3].webUrl;
  const article4Image = document.querySelector("#article4Image");
  article4Image.src = data.response.results[3].fields.thumbnail;

  // populate HTML for article 5
  const article5Header = document.querySelector("#article5Header");
  article5Header.innerText = data.response.results[4].webTitle;
  const article5Link = document.querySelector("#article5Link");
  article5Link.href = data.response.results[4].webUrl;
  const article5Image = document.querySelector("#article5Image");
  article5Image.src = data.response.results[4].fields.thumbnail;
};

module.exports = displayArticle;
