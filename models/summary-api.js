const SummaryAPI = function() {
    
}

SummaryAPI.prototype = {
    getSummary: function(url, title, img) {
        return new Promise((resolve, reject) => {
            fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`).then(response => {
                return response.json();
            }).then(data => {
                data.title = title;
                data.img = img;
                resolve(data);
            }).catch(err => {
                reject('Err! ' + err);
            });
        });
    }
}