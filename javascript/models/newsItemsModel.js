(function(exports){

    function NewsItemsModel() {

    }

    NewsItemsModel.prototype.get = async function() {
        const guardianApiUrl = "http://content.guardianapis.com/search?q=headlines";
        const newsItems = await makeApiRequest(guardianApiUrl);

        console.log(newsItems);

        const formattedNewsItems = newsItems.response.results.map(function(newsItem) {
            return {
                title: newsItem.webTitle
            };
        });

        console.log(formattedNewsItems);

        return formattedNewsItems;
    }

    exports.NewsItemsModel = NewsItemsModel;

})(this);