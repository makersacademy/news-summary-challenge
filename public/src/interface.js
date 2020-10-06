window.addEventListener(`DOMContentLoaded`, function (event) {

    articles()

    window.addEventListener("hashchange", function(event) {
        var id = window.location.hash.slice('#')[1]
        id > 0 ? showArticleSummary(id) : returnToListView()
        window.scroll(0, 0)
    })

    document.getElementById("refresh").addEventListener("click", function(event) {
        event.preventDefault();
        articles()
    })
})