(function(exports){
    
    function getData(){

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var url = "http://content.guardianapis.com/search?from-date="+ date +"&show-fields=thumbnail&show-blocks=body&api-key=" + APIKEY;
        //var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=" + date + "&show-fields=thumbnail&show-blocks=body";

        fetch(url).then(function(response) {
            response.text().then(function(text) {
            var news = JSON.parse(text)
    
            news.response.results.forEach(i => {
                newsList.create(i.webTitle, i.webUrl, i.blocks.body[0].bodyHtml.substring(0,100) + "...", i.fields.thumbnail);
                document.getElementById("news").innerHTML = newsList.htmlWrap();
            })
            });
        });
    }

    exports.getData = getData;

} )(this)




  