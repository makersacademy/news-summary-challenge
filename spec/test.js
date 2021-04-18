"When we run getHeadlines, it puts headline contents in page"
//----------------------------------------------------
//arrange
//----------------------------------------------------
const stubbedTitle = "random picture";
const stubbedWebUrl = "https://www.google.com";
const stubbedApiUrl = "https://www.facebook.com/";
const stubbedHeadlines = { response: { results: [ { webTitle: stubbedTitle, webUrl: stubbedWebUrl, apiUrl: stubbedApiUrl } ] } };
const stubbedSummary = { text: "summary text", sentences: "summary sentences" };
const stubbedImgUrl = "https://picsum.photos/200";
const stubbedArticle = { response: { content: { fields: { body: `<div><img src="${stubbedImgUrl}"></div>`} } } }

let sut = new App((callbackHeadlines) => {
  callbackHeadlines(stubbedHeadlines);
}, (stubbedWebUrl, callbackSummary) => {
  callbackSummary(stubbedSummary);
}, (stubbedApiUrl, callbackArticle) => {
  callbackArticle(stubbedArticle);
});

//----------------------------------------------------
//act
//----------------------------------------------------
//run getHeadlines
sut.getHeadlines();
document.getElementById("1").style.display = 'none';
// document.getElementById("1").classList.add("hide");

//----------------------------------------------------
//assert
//----------------------------------------------------
// Image
it(`image has link as ${stubbedImgUrl}`, () => {
  expect(document.getElementById("image-1").src).toEqual(stubbedImgUrl);
});

// title
it(`title show as ${stubbedTitle}`, () => {
  expect(document.getElementById("title-1").innerText).toEqual(stubbedTitle);
});

// click title show summary
document.getElementById("title-1").click();
it(`show summary as ${stubbedSummary.sentences}`, () => {
  expect(document.getElementById("summary1").innerText.indexOf(stubbedSummary.sentences)).toEqual(0);
});

// link to full article
it(`link to full article ${stubbedWebUrl}`, () => {
  expect(document.getElementById("article-link-1").href.indexOf(stubbedWebUrl)).toEqual(0);
});

