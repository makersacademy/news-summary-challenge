import HeadLinesView from "./headlines-view-model.js";

window.onload = function () {

    let temp_response = []
    let xmlhttp = new XMLHttpRequest();
    let url = 'http://content.guardianapis.com/world?api-key=702205e6-655b-4d06-93ef-bbcdd8d2fef0'
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText)
            console.log(response)
            response.response.results.forEach(
                result => (
                    temp_response.push({ webPublicationDate: result.webPublicationDate, webTitle: result.webTitle, webUrl: result.webUrl })
                )
            )
            window.temp_response = temp_response
            temp_response
        }
    };

    function HeadLineController(responseData = temp_response) {
        this.headLineViewModel = new HeadLinesView(responseData);
    }

    window.HeadLineController = HeadLineController;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}