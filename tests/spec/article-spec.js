describe("Article", () => {
  let sampleArticle = new Article(
    "Coronavirus live news: US vaccinations to begin 'in 24 hours' after FDA approves Pfizer jab",
    "https://www.theguardian.com/world/live/2020/dec/12/coronavirus-live-news-brazil-investigates-reinfection-australia-pins-hopes-on-oxford-vaccine",
    "2020-12-12T06:02:24Z"
  );

  it("intitalises with a headline, a link, and a publication datetime", () => {
    isEqual(
      sampleArticle.title,
      "Coronavirus live news: US vaccinations to begin 'in 24 hours' after FDA approves Pfizer jab"
    );
    isEqual(
      sampleArticle.link,
      "https://www.theguardian.com/world/live/2020/dec/12/coronavirus-live-news-brazil-investigates-reinfection-australia-pins-hopes-on-oxford-vaccine"
    );
    isEqual(sampleArticle.time, "2020-12-12T06:02:24Z");
  });
});
