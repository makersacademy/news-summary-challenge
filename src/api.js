Articles.create()

async function getData(url) {
    const response = await fetch(url);
    return response.json()
}

async function main() {
    //var api = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all"
    //var search = "http://content.guardianapis.com/search?show-fields=all"

    const data = await getData("https://content.guardianapis.com/search?api-key=5838985c-855e-4d2d-9b5c-12d583111aac&show-fields=all");

    var results = data.response.results
    for (item of results) { new Article(item) }
    interface()
}

main()
