(function(exports){

    function NewsItemModel() {

    }

    NewsItemModel.prototype.get = async function() {
        const guardianApiUrl = "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
        const newsItem = await makeApiRequest(guardianApiUrl);

        return {
            title: newsItem.response.content.webTitle
        };
    }

    exports.NewsItemModel = NewsItemModel;

})(this);