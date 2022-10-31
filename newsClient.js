class newsClient {

    loadHeadlines(callback) {
        fetch('https://content.guardianapis.com/search?api-key=fb6641b9-7470-4efe-87ff-d95f13c3c0ff').then((response) => response.json()).then((data) => callback(data))

    }
}

module.exports = newsClient;