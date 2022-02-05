const NewsFetcher = require("./newsFetcher");

const fetcher = new NewsFetcher;

fetcher.getNews(fetcher.displayNewsOnPage.bind(fetcher));