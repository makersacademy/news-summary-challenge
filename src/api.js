Articles.create()

async function getData(url) {
    const response = await fetch(url);
    return response.json()
}

async function main() {
    var api = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
    var search = "http://content.guardianapis.com/search?show-fields=all"

    const data = await getData(api + search);

    var results = data.response.results
    for (item of results) { new Article(item) }
    interface()
}

main()
