(function(exports){

    function Controller(guardianData){

        var titleList = new TitleList;

        guardianData.forEach = function(title, index){
            var webTitle = title.webTitle;
            var webUrl = title.webUrl;
            var id = index;
            var title = new Title (webTitle,webUrl, id);

            titleList.addTitle(title);
        };
    }

    exports.Controller = Controller;
})(this);