(function(exports) {
    
    function ListView(array) {
        this.list = array;
    }

    ListView.prototype.displayHtml = function() {
        var listTwo = [];
      
        this.list.forEach((element, i) => {
            listTwo.push("<div id='wrapper'><a id='single-news-item-"+ i + "' href='" + element.webUrl + "'>"
            + element.webTitle + "</a><br><img src='" + element.fields.thumbnail + "'>"+ "<br><a id='note-link' href='http://localhost:8080#" + i + "'>View summary</a><p class='summary' id='p-" + i + "'></p></div><br><br>")
        });
        listTwo.unshift("<ul>");
        listTwo.push("</ul>");

        return listTwo.join("");
    }

    exports.ListView = ListView;
}) (this)

