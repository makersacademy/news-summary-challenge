function NewsList(){
    this.newsItem = newsItem;
    this.list = []
}

NewsList.prototype = (function(){
    function create(title, link, summary, image){
        this.list.push(new NewsItem(title, link, summary, image));
    }

    return {
        create: create
    }
})()