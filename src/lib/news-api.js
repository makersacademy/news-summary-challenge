class NewsAPI {

    getNewsData(section="politics") {
        const url = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${section}?show-fields=thumbnail,body`;
        const newsItems = _executeAjaxRequest(url, _newsDataConverter);
        return newsItems;
    }

    getNewsSummary(newsUrl) {
        const url = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${newsUrl}`;
        const summaryObj = _executeAjaxRequest(url, _summaryConverter);
        return summaryObj;
    }

}

function _executeAjaxRequest(url, converter) {
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    const jsonObj = JSON.parse(request.responseText);
    console.log(jsonObj);
    const model = converter(jsonObj);
    return model;
}

function _newsDataConverter(jsonObj) {
    const newsItems = [];
    jsonObj.response.results.forEach(r => {
        const data = new ArticleData(r.id, r.webTitle, r.fields.body, r.fields.thumbnail, r.webUrl);
        newsItems.push(data);
    });
    return newsItems;
}

function _summaryConverter(jsonObj) {
    return jsonObj.sentences.join(" ");
}