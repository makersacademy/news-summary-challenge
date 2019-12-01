(function(exports) {

    function ApiCaller() {
    }

    ApiCaller.prototype.getGuardian = function() {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {  
                var data = JSON.parse(this.responseText);
                return data;
            }
        };
        xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=from-date=" + "2019-05-10", true);
        xhttp.send();
    };

    exports.ApiCaller = ApiCaller;
})(this);