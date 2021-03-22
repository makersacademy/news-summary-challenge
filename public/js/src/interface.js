showHeadlinesAndPictures();
resetHashUrl();
showSummaryOnClick();

function showHeadlinesAndPictures() {
  setTimeout(() => {
    let html = ''
    for (let i = 0; i < frontPage.articles.length; i ++) {
      const headline = frontPage.articles[i].fields.headline
      const thumbnail = frontPage.articles[i].fields.thumbnail
      html += `<img class="image" src="${thumbnail}"><br>`
      html += `<a class="headline" href="#${i}">${headline}</a><br>`
    }
    document.getElementById('headlines')
    .innerHTML = html
  }, 500)
}

function showSummaryOnClick() {
  window.addEventListener('hashchange', showSummary)
}

function getArticleUrl() {
  const index = window.location.hash.split('#')[1];
  const webUrl = frontPage.articles[index].webUrl
  const headline = frontPage.articles[index].fields.headline
  const thumbnail = frontPage.articles[index].fields.thumbnail
  console.log(frontPage.articles[0])
  document.getElementById('hl-intro')
  .innerHTML = `<img src="${thumbnail}"><br><a href="${webUrl}" target="_blank">${headline}<a>`
  return frontPage.articles[index].webUrl;
}

function showSummary() {
  fetchSummaries(getArticleUrl())
  setTimeout(() => {
    document.getElementById('headlines')
    .innerHTML = `<article class="article">${frontPage.summaries[frontPage.summaries.length - 1].text}</article>`;
    window.scrollTo(0, 0);
  }, 200)
}

function resetHashUrl() {
  history.pushState(null, null, ' ')
}
