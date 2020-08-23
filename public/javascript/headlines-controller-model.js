import HeadLinesView from "./headlines-view-model.js";
import HeadLinesList from "./headlines-list-model.js";

let app = document.getElementById("News_App");

window.onload = function () {

    let temp_response = []
    let xml_http = new XMLHttpRequest();
    let guardian_url = 'http://content.guardianapis.com/world?api-key=702205e6-655b-4d06-93ef-bbcdd8d2fef0'
    let guardian_url_2 = 'https://content.guardianapis.com/search?page=1&order-by=newest&q=world&api-key=702205e6-655b-4d06-93ef-bbcdd8d2fef0'


    // Listeners
    window.addEventListener("hashchange", redirectToArticle)

    function HeadLineController(headLineControllerList = new HeadLinesList(temp_response)) {
        this.headLineControllerView =  new HeadLinesView(headLineControllerList);
    }

    window.HeadLineController = HeadLineController;

    xml_http.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            let query_data = JSON.parse(this.responseText)
            console.log(query_data)
            query_data.response.results.forEach(
                result => {
                    temp_response.push({ webPublicationDate: result.webPublicationDate, webTitle: result.webTitle, webUrl: result.webUrl });
                }
            )
            window.headLineController = new HeadLineController();
            window.temp_response = temp_response
            displayHeadLines(app)
            return temp_response
        }
    };

    xml_http.open("GET", guardian_url_2, true);
    xml_http.send();

}

function displayHeadLines(app) {
    app.innerHTML = window.headLineController.headLineControllerView.wrapHTMLAround()
}

function redirectToArticle(event) {
    event.preventDefault();
    if ((window.location.hash).match('#home')) {
        return displayHeadLines(app)
    } else {
        let articleID = window.location.hash.split('/')[1]
        app.innerHTML = window.headLineController.headLineControllerView.getArticle(articleID)
    }
}
