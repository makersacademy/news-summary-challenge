const proxyurl = "https://cors-anywhere.herokuapp.com/";

const SummaryAPI = function() {

}

SummaryAPI.prototype = {
    getSummary: function(url) {
        return new Promise((resolve, reject) => {
            fetch(proxyurl + `https://api.aylien.com/api/v1/summarize?url=${url}`, {
                method: "get",
                headers: {
                   "X-AYLIEN-TextAPI-Application-Key": config.AYLIEN_API_KEY,
                   "X-AYLIEN-TextAPI-Application-ID": config.ALYIEN_APP_ID
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject('Err! ' + err);
            });
        });
    }
}