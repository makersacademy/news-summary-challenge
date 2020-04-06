function NewsList(){
    this.list = []
}

NewsList.prototype = (function(){
    function create(title, link, summary, image){
        this.list.push(new NewsItem(title, link, summary, image));
    }
    function htmlWrap(){
        htmlList = [];
        this.list.forEach(e => {
            htmlList.push("<p><img src="+e.image+"></p><p><a href='"+e.link+"' target='_blank'>"+e.title+"</a><br>"+e.summary+"</p>");
        });
        return htmlList.join("");
    }

    return {
        create: create,
        htmlWrap: htmlWrap
    }
})()