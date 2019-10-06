// Stub NewsSummary.makeApiRequest method so that
// we don't make a request to the News Summary API
NewsSummary.prototype.makeApiRequest = async function(guardianApiUrl) {
    const newsJson = {
        response: {
            content: {
                webTitle: 'A test news item title'
            }
        }
    };

    return newsJson.response;
};

const news = new NewsSummary();
news.displayNews();