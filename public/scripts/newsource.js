class News_source {

    constructor(name, url_to_source, key){
        this.name = name;
        this.source = url_to_source;
        this.data = '';
        this.key = key;
        this.headlines = 'page=1';
        this.date = 'from-date=2019-01-27';
    }

    get api_request(){
        return `${this.source}?${this.date}&${this.headlines}&api-key=${this.key}`;
    }

/* 
    so in this project i have seen browser compatibility issues - firefox vs chrome. firefox resulted in 
    cors errors - these are errors i now understand to be created by calling a resource from a place the api 
    does not feel safe going - it is a block. They can be caused from calling multiple times from same location but can just happen...
    https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors 
    https://medium.freecodecamp.org/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547
    */ 
    fetch_headlines(){
        var self = this;
        fetch(`${this.api_request}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            self.fetch_callback(myJson.response.results);
        });
    }

    fetch_callback(data){
        this.data = data;
        console.log(this.data);
    }

    display(){

    }
}