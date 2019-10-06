// Stub NewsMachine.makeApiRequest method so that
// we don't make a request to the News Summary API
NewsMachine.prototype.makeApiRequest = async function(guardianApiUrl) {
    const newsJson = {
        response: {
            content: {
                webTitle: 'A test news item title'
            }
        }
    };

    return newsJson.response;
};

const news = new NewsMachine();
news.displayNews();