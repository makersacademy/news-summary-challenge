import HeadLinesView from "./headlines-view-model.js";
import HeadLinesList from "./headlines-list-model.js";

let app = document.getElementById("News_App");

window.onload = function () {

    let temp_response = []
    let summary_BASEURL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
    let guardian_url = 'http://content.guardianapis.com/world?api-key=702205e6-655b-4d06-93ef-bbcdd8d2fef0'
    let article_BASEURL = 'https://content.guardianapis.com/search?page=1&order-by=newest&q=world&api-key=702205e6-655b-4d06-93ef-bbcdd8d2fef0'


    // Window objects
    window.addEventListener("hashchange", redirectToArticle)
    window.HeadLineController = HeadLineController;

    function HeadLineController(headLineControllerList = new HeadLinesList(temp_response)) {
        this.headLineControllerView = new HeadLinesView(headLineControllerList);
    }

    async function loadPage() {
        let query_data = await fetch(article_BASEURL).then(response => response.json());
        console.log(query_data)
        for (const result of query_data.response.results) {
            await scaffoldNewsObjects(result)
        }
        window.headLineController = new HeadLineController();
        window.temp_response = temp_response
        displayHeadLines(app)
        return temp_response
    }


    async function scaffoldNewsObjects(result) {
        let result_summary = await addSummary(result.webUrl)
        console.log(result_summary)
        temp_response.push({
            webPublicationDate: result.webPublicationDate,
            webTitle: result.webTitle,
            webUrl: result.webUrl,
            summary: result_summary
        });
    }

    async function addSummary(appendURL) {
        let response = await fetch(summary_BASEURL + appendURL).then(response => response.json())
        return response.sentences
    }

    loadPage();


    function displayHeadLines(app) {
        app.innerHTML = window.headLineController.headLineControllerView.wrapHTMLAround()
    }

    function redirectToArticle(event) {
        event.preventDefault();
        if ((window.location.hash).match('#home')) {
            return displayHeadLines(app)
        } else {
            let articleID = window.location.hash.split('/')[1]
            app.innerHTML = window.headLineController.headLineControllerView.getArticle(articleID) + "<a href='#home' style='margin-top: 20px;'>Back to main menu </a>"
        }
    }

}


