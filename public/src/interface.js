
window.addEventListener(`DOMContentLoaded`, function (event) {
    
    async function articles() {
        let data = await getResponse()
        var controller = new ArticleController(data)
        controller.createArticleObjects()
        document.getElementById('app').innerHTML = controller.convertListToView()
    } 

    articles()
    

    // var theNews = theNewsModel.getResponse()
    
    // window.addEventListener("click", function() {
    //     console.log(theNews)
    //     var controller = new ArticleController(theNews)
    //     controller.createArticleObjects()
    //     document.getElementById('app').innerHTML = controller.convertListToView()
    // })





})