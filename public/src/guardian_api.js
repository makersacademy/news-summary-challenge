(function(exports) {

    async function getResponse() {
        let newsData = await fetch(`https://content.guardianapis.com/search?api-key=${ApiKey()}&show-fields=headline,body,thumbnail,trailText`)
        let newsDataJson = await newsData.json()
        return newsDataJson.response.results
    }
    exports.getResponse = getResponse
})(this)