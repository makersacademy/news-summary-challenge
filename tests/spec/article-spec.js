describe("Article", () => {
  let sampleArticle = new Article(
    "Coronavirus live news: US vaccinations to begin 'in 24 hours' after FDA approves Pfizer jab",
    "https://www.theguardian.com/world/live/2020/dec/12/coronavirus-live-news-brazil-investigates-reinfection-australia-pins-hopes-on-oxford-vaccine",
    "https://media.guim.co.uk/f3ef200a10cb3ccdf67f523c07dbba20347e13a4/264_230_3179_1908/500.jpg",
    "2020-12-12T06:02:24Z"
  );

  it("returns appropriate HTML", () => {
      let expectedHTML = `<div class="article">`;
      expectedHTML += `<h1 class="title">${sampleArticle.title}</h1>`
      let date = new Date(Date.parse(sampleArticle.date))
      expectedHTML += `<h2 class="date">${date.toLocaleDateString()}</h2>`
      expectedHTML += `<img src="${sampleArticle.thumbnail}" class="thumbnail">`
      expectedHTML += `<a href="${sampleArticle.link}">Full article</a>`
      expectedHTML += `</div>`

      isEqual(
          sampleArticle.getListHTML(),
          expectedHTML
      )
  })
});
