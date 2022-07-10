class GuardianModel {
  constructor() {
    this.guardianNewsList = []
  }
  
  guardianNewsAdd(guardianNewsData){
    const newsResult = (guardianNewsData.response.results)
    console.log(newsResult);
    newsResult.forEach((news) => {
      const newsItem = {
        title: news.webTitle,
        image: news.fields.thumbnail,
        pubDate: news.webPublicationDate.substring(0,10)
      }
      this.guardianNewsList.push(newsItem);
    })
  }

  guardianNewsShow(){
    return this.guardianNewsList;
  }

  clearNewsList() {
    this.guardianNewsList = [];
  }
}

module.exports = GuardianModel;
