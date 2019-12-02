var key = config.MY_KEY;

function apiCallGuardian(){

    var url = 'https://content.guardianapis.com/search?api-key=' + key +'&show-fields=thumbnail';

    var req = new Request(url);

    fetch(req)
        .then(function(response) {

                if (response.status === 200) {
                    return response.json();
                }
                else {
                    throw new Error ("wrong")
                }        
        })
        .then(data => {
    
            var articles = data.response.results;
        
            var listView = new ListView(articles)

            document.getElementById('headlines-list').innerHTML = listView.displayHtml()
            console.log(listView.displayHtml())
        })
        .catch(error => {
            console.error(error)
        });
}



function apiCallAlyen(insert_link, insert_section){

    var urlTwo = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + insert_link

    var request = new Request(urlTwo);

    fetch(request)
        .then(function(response) {
            
                if (response.status === 200) {
                    return response.json();
                }
                else {
                    throw new Error ("wrong")
                }        
        })
        .then(data => {
    
            // console.log(data.text)

            var text = data.text

            document.getElementById(insert_section).innerHTML = text
            
        })
        .catch(error => {
            console.error(error)
        });
}