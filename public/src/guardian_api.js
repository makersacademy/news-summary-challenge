(function(exports) {

    async function getResponse() {
        let newsData = await fetch("https://content.guardianapis.com/search?api-key=c2856b15-2089-4310-b8b5-dbe287674c9f&show-fields=headline,body,thumbnail,trailText")
        let newsDataJson = await newsData.json()
        console.log(newsDataJson)
        return newsDataJson.response.results
    }

    exports.getResponse = getResponse
})(this)