let url = "https://content.guardianapis.com/search?api-key=" + key;
let out = "";
let articles = []
$.getJSON(url, function(data){
    console.log(data);
    articles = data.response.results;
    
    for (let x = 0; x < articles.length; x++) {
        displayStory(articles[x],x);
        $("#storyList").html(out);
        $("#storyList").listview("refresh");
        
    }
    console.log(articles);
});

function displayStory(story,storyNum){
    const number = storyNum;
    const title = story.id;
    const source = story.type;
    // let image = <img src="https://upnewsinfo.com/wp-content/uploads/2020/03/1584017460_Racing-awaits-government-update-on-coronavirus-Racing-News.jpg"/>;
    const storyTime = story.webPublicationDate;
    const description = story.webTitle;

    out += "<li onclick='populateDetail(" + number + ")' class='wrap'>";
    out += "<a href='#detail'>";
    out += "<img src='https://upnewsinfo.com/wp-content/uploads/2020/03/1584017460_Racing-awaits-government-update-on-coronavirus-Racing-News.jpg' height='130' width='180' />";
    out += "<strong>" + title + "</strong>";
    out += "<br />" + storyTime + " | " + source;
    out += "<p class='wrap'>" + description + "</p>"
    out += "</a><li>";

}

function populateDetail(storyNum) {

    const story = articles[storyNum];
    console.log(story);
    $('#detTitle').html("<h1>" + story.id + "</h1>");
    $('#detInfo').html(story.type + " | " + story.webPublicationDate);
    $('#detImg').html("<img src='https://upnewsinfo.com/wp-content/uploads/2020/03/1584017460_Racing-awaits-government-update-on-coronavirus-Racing-News.jpg' height='130' width='180' />");
    $('#detStory').html("<p>" + story.content + "</p>");
    $('#fullStoryLink').html("<a href='" + story.webUrl + "'>FullStory</a>");

}