const makersApi = "http://news-summary-api.herokuapp.com";
const guardianRequest = "/guardian?apiRequestUrl=";
const AylienRequest = "/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";

function formatDate(date) {
  year = date.getFullYear();
  month = (date.getMonth() + 1).toString().padStart(2, '0');
  day = (date.getDate()).toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

class Client {
  async fetchHeadlines () {
    const headlineRequest = `http://content.guardianapis.com/search?q=politics&from-date=${formatDate(new Date())}&order-by=newest`;
    const url = makersApi + guardianRequest + headlineRequest;
    const response = await fetch(url);
    return response.json();
  }

  async fetchArticle (articleUrl) {
    const url = makersApi + guardianRequest + articleUrl.replace("https", "http") + "?show-fields=body";;
    const response = await fetch(url);
    return response.json();
  }

  async fetchSummary (articleURL) {
    const url = makersApi + AylienRequest + articleURL;
    const response = await fetch(url);
    return response.json();
  }
}

