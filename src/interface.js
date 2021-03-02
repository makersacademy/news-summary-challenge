const guardianAPIKey = "INSERT_YOUR_KEY_HERE";
const guardianUrl = 'https://content.guardianapis.com/search?show-fields=all&api-key='+ guardianAPIKey;
const aylienurl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=';
const newsCollection = new NewsCollection();
const date = new Date();
const d = new Intl.DateTimeFormat('en-US').format(date);
document.getElementById('date').innerHTML = d;


window.onload = function() {
  hideContent('full_news');
  getNews();
};


window.onhashchange = function() {
  const newsUrl = getUrl();
  if (newsUrl == null || !newsUrl) {
    getNews();
  } else {
    getSummary(newsUrl);
  }
};

function getSummary(newsUrl) {
  hideContent('news_collection');
  summarizeText(newsUrl);
}

function getUrl() {
  return window.location.hash.split('#')[1];
}


function getNews() {
  const requestUrl = guardianUrl;
  hideContent('news_summary');
  fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  }).then(function(res) {
    res.json().then(function(data) {
      const response = data.response;
      if (response.status == 'ok') {
        const results = response.results;
        for (const i in results) {
          const headline = results[i].webTitle;
          const articleUrl = results[i].webUrl;
          const thumbnailUrl = results[i].fields.thumbnail;
          const newsBody = results[i].fields.bodyText;
          const news = new News(headline, articleUrl, thumbnailUrl, newsBody);
          newsCollection.addNews(news);


          const news_collection_div = document.getElementById('news_collection');
          const news_div = document.createElement('div');
          news_div.className = "element";
          const a_web_title = document.createElement('a');
          a_web_title.className = "title-art";
          a_web_title.text = news.headline;
          a_web_title.href = '#' + news.articleUrl;


          const thumbnail = document.createElement('img');
          thumbnail.src = news.thumbnailUrl;
          news_div.appendChild(thumbnail);
          const br = document.createElement('br');
          news_div.appendChild(br);
          news_div.appendChild(a_web_title);
          news_collection_div.appendChild(news_div);
        }
      }
    });
  });
}


function summarizeText(newsUrl) {
  const article = newsCollection.getNewsByUrl(newsUrl);
  fetch( aylienurl + newsUrl)
      .then(function(res) {
        if (res.status == '200') {
          article.addSummary(data.sentences);
        } else {
          throw Error;
        }
      })
      .then(function() {
        const news_div = document.getElementById('news_summary');
        const news_summary_p = document.createElement('p');
        const news_summary = document.createTextNode(article.summary);
        news_summary_p.appendChild(news_summary);
        news_div.appendChild(news_summary_p);
        hideContent('full_news');
      })
      .catch(function() {
        displayContent('full_news');
        const news_div = document.getElementById('full_news');
        const news_summary_p = document.createElement('p');
        const news_summary = document.createTextNode(article.body);
        news_summary_p.appendChild(news_summary);
        news_div.appendChild(news_summary_p);
      });
}


function hideContent(elementToHide) {
  const hidden = document.getElementById(elementToHide);
  hidden.style.display = 'none';
};

function displayContent(elementToDisplay) {
  const hidden = document.getElementById(elementToDisplay);
  hidden.style.display = (status !== 'open') ? 'block' : 'none';
};

function createImageElement(thumbnailUrl) {
  const thumbnail = document.createElement('img');
  thumbnail.src = thumbnailUrl;
  return thumbnail;
}
