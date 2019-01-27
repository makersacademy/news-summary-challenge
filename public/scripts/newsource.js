class News_source {

    constructor(url_to_source, key){
        this.source = url_to_source;
        this.data = undefined;
        this.key = 'b7613454-c424-4c87-a7e2-ae508f029ebf';
        this.request = 'page=1'
    }


    fetch_headlines(){
        var self = this;
        fetch(`https://content.guardianapis.com/search?from-date=2019-01-27&page=1&api-key=b7613454-c424-4c87-a7e2-ae508f029ebf`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            self.fetch_callback(myJson);
        });
    }

    fetch_callback(data){
        console.log(data);
        this.data = data;
    }
}