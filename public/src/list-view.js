(function(exports) {
    
    function ListView(array) {
        this.list = array;
    }

    ListView.prototype.displayHtml = function() {
        var listTwo = [];
      
        this.list.forEach((element, i) => {
            listTwo.push("<li><div><a id='single-news-item' href='" + element.webUrl + "'>"
            + element.webTitle + "</a><br><img src='" + element.fields.thumbnail + "'></div></li><br><br>")
        });
        listTwo.unshift("<ul>");
        listTwo.push("</ul>");
        return listTwo.join("");
    }

    exports.ListView = ListView;
}) (this)
