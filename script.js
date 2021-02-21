async function fetchPoliticsArticle(id) {
  try {
    const response = await fetch(
      "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics",
      {
        method: "GET",
        mode: "cors",
        header: "application/json",
        credentials: "same-origin",
        referrerPolicy: "no-referrer",
      }
    );
    const politics = await response.json();
    return politics.response.results[id];
  } catch (error) {
    console.error(error);
  }
}

for (let articleId = 0; articleId < 10; articleId++) {
  fetchPoliticsArticle(articleId).then(
    (data) =>
      (document.getElementsByClassName("headline-title")[articleId].innerText =
        data.webTitle)
  );
}
