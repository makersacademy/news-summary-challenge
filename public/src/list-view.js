(function(exports) {
    
    function ListView(array) {
        this.list = array;
    }

    ListView.prototype.displayHtml = function() {
        var listTwo = [];
      
        this.list.forEach((element, i) => {
            listTwo.push("<li><div><a id='single-news-item' href='http://localhost:8080#" + i + "'>"
            + element.webTitle + "</a></div></li>")
        });
        listTwo.unshift("<ul>");
        listTwo.push("</ul>");
        return listTwo.join("");
    }

    exports.ListView = ListView;
}) (this)
