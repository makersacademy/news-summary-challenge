window.addEventListener(`DOMContentLoaded`, function (event) {
    let controller 
    
    articles()

    window.addEventListener("hashchange", function(event) {
        var id = window.location.hash.slice('#')[1]
        if (id > 0) {
            showArticleSummary(id)
        } else {
            returnToListView()
        }
        window.scroll(0, 0)
    })

    document.getElementById("refresh").addEventListener("click", function(event) {
        event.preventDefault();
        articles()
    })
})