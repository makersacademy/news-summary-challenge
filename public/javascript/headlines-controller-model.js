import HeadLinesView from "./headlines-view-model.js";
import HeadLinesList from "./headlines-list-model.js";

window.onload = function () {

    let temp_response = []
    let xml_http = new XMLHttpRequest();
    let url = 'http://content.guardianapis.com/world?api-key=702205e6-655b-4d06-93ef-bbcdd8d2fef0'

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
            return temp_response
        }
    };

    xml_http.open("GET", url, true);
    xml_http.send();

}