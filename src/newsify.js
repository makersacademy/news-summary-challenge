class Newsify {

  

  // Fetching information from API
  async getArticles() {
    const response = await fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest");
    const responseData = await response.json();
    console.log(responseData)
    return responseData.response.results
  }

}