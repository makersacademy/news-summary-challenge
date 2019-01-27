class News_source {

    constructor(name, url_to_source, key, fields){
        this.name = name;
        this.source = url_to_source;
        this.key = key;
        this.fields = fields;
    }

    get api_request(){
        let result = [this.source];
        for(let field of this.fields){
            result.push(field, '&')      
        }
        result.push(this.key);
        return result.join('');
    }
}


