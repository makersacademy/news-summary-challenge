function NewsItem (title, link, summary, image){
    this.title = title;
    this.link = link;
    this.summary = summary;
    this.image = image;
}

NewsItem.prototype = (function(){
    function display(){
        return [this.title, this.link, this.summary, this.image];
    }

    return{
        display: display
    }
})()