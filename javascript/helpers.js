(function(exports){

    async function makeApiRequest(guardianApiUrl) {
        const newsSummaryApiUrl = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${guardianApiUrl}`;
    
        const response = await fetch(newsSummaryApiUrl);
        const newsJson = await response.json();
    
        console.log(newsJson);
    
        return newsJson;
    }

    exports.makeApiRequest = makeApiRequest;

})(this);