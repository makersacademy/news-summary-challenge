(function(exports) {
    
    function ListView(array) {
        this.list = array;
    }

    ListView.prototype.displayHtml = function() {
        var listTwo = [];
      
        this.list.forEach((element, i) => {
            listTwo.push("<div><a id='single-news-item' href='" + element.webUrl + "'>"
            + element.webTitle + "</a><br><img src='" + element.fields.thumbnail + "'>"+ "<br><button id=" + i + ">View summary</button><form></div><br><br>")
        });
        listTwo.unshift("<ul>");
        listTwo.push("</ul>");
        return listTwo.join("");
    }

    exports.ListView = ListView;
}) (this)
