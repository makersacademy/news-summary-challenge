class NewsModel {
  constructor() {
    this.news = [];
  };

  getNews() {
    return this.news;
  };

  addNews(stories) {
    stories.forEach(story => {
      newsObj = { 
        headline: story.webTitle, 
        link: story.webUrl, 
        image: story.fields.thumbnail
      }
      this.news.push(newsObj);
    });
  };
  
  reset() {
    this.news = [];
  };
 };

export default NewsModel;