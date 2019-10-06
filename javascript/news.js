(function(exports){

    function NewsMachine() {

    }

    NewsMachine.prototype.makeApiRequest = async function(guardianApiUrl) {
        const newsSummaryApiUrl = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${guardianApiUrl}`;

        const response = await fetch(newsSummaryApiUrl);
        const newsJson = await response.json();

        console.log(newsJson);

        return newsJson;
    };

    NewsMachine.prototype.displayNews = async function() {
        const guardianApiUrl = "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";

        const newsItem = await this.makeApiRequest(guardianApiUrl);

        const newsItemTitle = newsItem.response.content.webTitle;

        // console.log(newsItemTitle);

        document.getElementById('news-items').innerHTML = `<h2>${newsItemTitle}</h2>`;
    }

    exports.NewsMachine = NewsMachine;

})(this);