'use strict';
(function (exports){
    function StoryController(url, storyListModel){
       this.storymodel = storyListModel;
       this.url = url;
    }
    function printStory(app, stories){
        for(let i in stories){
            app.innerHTML += new StoryListView(stories[i], i).text();
        }
    }
    function listenForChange(stories){
        window.addEventListener("hashchange", function(){
            showStory(stories);
        });
    }
    function showStory(stories){
        let storyID = getStoryID(window.location);
        let story = stories[storyID];
        let storyView = new SingleStoryView(story);
        document.getElementById('story').innerHTML = storyView.text();
    }
    function getStoryID(location){
        return location.hash.split('#')[1];
    }

    StoryController.prototype.loadStories = function(){
        var req = new XMLHttpRequest();
        let controller = this;
        req.open('GET', this.url + "search?api-key=" + API.guardiankey +"&show-fields=headline,body,thumbnail");
        req.onload = function(e){
            var response = JSON.parse(this.response);
            let results = response.response.results;
            console.log(results);
            for(let i in results){
            controller.storymodel.add(results[i]);
            }
            console.log("Added story objects to story-list");
            controller.update();
        };
        req.send();
    };

    StoryController.prototype.update = function() {
        let stories = this.storymodel.view();
        let app = document.getElementById('app');
        printStory(app, stories);
        listenForChange(stories);
    };


    exports.StoryController = StoryController;
})(this);