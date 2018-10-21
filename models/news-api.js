

const NewsAPI = function() {
    
}

NewsAPI.prototype = {
    getNews: function() {
        return new Promise((resolve, reject) => {
            fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&api-key=${config.NEWS_API_KEY}`).then(response => {
                return response.json();
            }).then(data => {
                resolve(data.response.results);
            }).catch(err => {
                reject('Err! ' + err);
            });
        });
    }
}