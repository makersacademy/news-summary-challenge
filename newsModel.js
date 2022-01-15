class NewsModel{
  constructor(){
  }

  getNews(newsData){
 
    const news_array = newsData.response.results;

    return news_array;

  }
}

module.exports = NewsModel;