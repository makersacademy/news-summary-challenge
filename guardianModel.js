class GuardianModel {
  constructor() {
    this.guardianNewsList = []
  }
  
  guardianNewsAdd(guardianNewsData){
    const newsResult = (guardianNewsData.response.result)
    newsResult.forEach((news) => {
      const newsItem = {
        title: news.webTitle,
        image: news.fields.thumbnail
      }
      this.guardianNewsList.push(newsItem);
    })
  }

  guardianNewsShow(){
    return this.guardianNewsList;
  }
}

module.exports = GuardianModel;
