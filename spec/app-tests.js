function ApiReturnsData(){
    let url = "https://content.guardianapis.com/search?api-key=" + key;
    let out = "";
    let articles = []
    $.getJSON(url, function(data){
        articles = data.response.results;
        assert.isTrue(data.response.status == "ok", "api return json");
    })
};
ApiReturnsData();