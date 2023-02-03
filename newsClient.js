const apiKey = require('./apiKey')

class NewsClient {
    loadNews(callback, callbackError) {
        fetch(`https://content.guardianapis.com/search?api-key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                callback(data);
            })
            .catch((error) => {
                callbackError(error)
            })
    }
}