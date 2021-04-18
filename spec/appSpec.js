"When we run createHandler, it puts emoji from makers_emojify in the note list"
//arrange
const stubbedTitle = "testTitle";
const stubbedWebUrl = "https://www.google.com";
const stubbedApiUrl = "https://www.facebook.com/";
const stubbedHeadlines = { response: { results: [ { webTitle: stubbedTitle, webUrl: stubbedWebUrl, apiUrl: stubbedApiUrl } ] } };
const stubbedSummary = { text: "test text", sentences: "test sentences" };
const stubbedImgUrl = "www.test-image.com";
// const htmlStr = `<div><img src="${stubbedImgUrl}"></div>`
const stubbedArticle = { response: { content: { fields: { body: `<div><img src="${stubbedImgUrl}"></div>`} } } }
let sut = new App((callbackHeadlines, callbackSummary, callbackArticle) => {
  callbackHeadlines(stubbedHeadlines);
  // callbackSummary(stubbedWebUrl, stubbedSummary);
  // callbackArticle(stubbedApiUrl, stubbedArticle);
})

//act
//run getHeadlines
sut.getHeadlines()

//assert
console.log(`first article title is ${stubbedTitle}`)
let titleNode = document.getElementById("title-1");
if (titleNode.innerText === stubbedTitle) {
    console.log(titleNode.innerText, "passed")
} else {
    console.log("failed!")
}
