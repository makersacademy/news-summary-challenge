function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
var dataObj = {};
function logData(data) {
    console.log(data);
}

ajax_get("https://content.guardianapis.com/search?from-date=2018-12-14&to-date=2018-12-15&order-by=relevance&show-blocks=body:latest&api-key=7e83b755-ac7d-4102-aa10-a52658f183dc&section-id=uk-news", logData);