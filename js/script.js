const makersNewsSummaryApi = "http://news-summary-api.herokuapp.com/";
const guardianApiRequestUrl = "guardian?apiRequestUrl=";
const guardianPolitics = "http://content.guardianapis.com/politics";
const guardian = "http://content.guardianapis.com/";
const aylienApiRequestUrl =
  "aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
const queryImageThumbnail = "?show-fields=thumbnail";

async function fetchNewsArticle(id) {
  try {
    const response = await fetch(
      `${makersNewsSummaryApi}${guardianApiRequestUrl}${guardianPolitics}`
    );
    const politics = await response.json();
    return politics.response.results[id];
  } catch (error) {
    console.error(error);
  }
}

for (let articleId = 0; articleId < 10; articleId++) {
  fetchNewsArticle(articleId).then(
    (data) =>
      (document.getElementsByClassName("headline-title")[articleId].innerText =
        data.webTitle)
  );
  fetchArticleImage(articleId);
}

async function fetchArticleWebUrl(id) {
  try {
    const response = await fetch(
      `${makersNewsSummaryApi}${guardianApiRequestUrl}${guardianPolitics}`
    );
    const webUrl = await response.json();
    return webUrl.response.results[id].webUrl;
  } catch (error) {
    console.error(error);
  }
}

function fetchNewsSummary(id) {
  fetchArticleWebUrl(id)
    .then((url) => fetch(`${makersNewsSummaryApi}${aylienApiRequestUrl}${url}`))
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementsByClassName("modal-body")[0].innerText =
          data.sentences[0])
    );
}

function headlineIntoModalHeader(id) {
  try {
    fetch(`${makersNewsSummaryApi}${guardianApiRequestUrl}${guardianPolitics}`)
      .then((response) => response.json())
      .then(
        (data) =>
          (document.getElementsByClassName(
            "modal-header-title"
          )[0].innerHTML = `<a class="modal-header-link" href=${data.response.results[id].webUrl}>${data.response.results[id].webTitle}</a>`)
      );
  } catch (error) {
    console.error(error);
  }
}

async function fetchArticleHandle(id) {
  try {
    const response = await fetch(
      `${makersNewsSummaryApi}${guardianApiRequestUrl}${guardianPolitics}`
    );
    const webUrl = await response.json();
    return webUrl.response.results[id].id;
  } catch (error) {
    console.error(error);
  }
}

function fetchArticleImage(id) {
  fetchArticleHandle(id)
    .then((handle) =>
      fetch(
        `${makersNewsSummaryApi}${guardianApiRequestUrl}${guardian}${handle}${queryImageThumbnail}`
      )
    )
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementsByClassName("headline-thumbnail")[id].src =
          data.response.content.fields.thumbnail)
    );
}
