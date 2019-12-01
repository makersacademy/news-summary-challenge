var key = config.MY_KEY;

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
        console.log(articles)
        var listView = new ListView(articles)

        document.getElementById('headlines-list').innerHTML = listView.displayHtml()

    })
    .catch(error => {
        console.error(error)
    });
