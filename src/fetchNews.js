class FetchNews {

  getPostData() {
    return fetch("https://content.guardianapis.com/search?show-fields=all&api-key=2a0b05ae-00bc-4442-be8c-e2d3e6c6c644").then(response => {
    return response.json();
    })
  }

  renderPostMain(postData) {
    let results = postData.response.results;
    let num = 0;
    results.forEach(function(result){
      let newDiv = document.createElement("div");
      newDiv.className = "oneHeadlineDiv";
      let newP = document.createElement("p");
      newP.textContent += result.webTitle;
      newP.className = "newsTitle";
      newP.setAttribute("id", num)
      num += 1;
      newDiv.innerHTML += "<img src='" + result.fields.thumbnail + "'><br>";
      // let headlineDiv = document.getElementById("headlines");
      newDiv.appendChild(newP);
      let headlineDiv = document.getElementById("headlines");
      headlineDiv.appendChild(newDiv);
    });
  }

  renderPostSummary(postData, storyId) {
    let results = postData.response.results;
    let abbreviatedStory = this.abbrev(results[storyId].fields.body);
    let weblink = results[storyId].webUrl;
    let summaryDivContent = document.createElement("div");
    summaryDivContent.className = "summaryStory";
    summaryDivContent.innerHTML += "<img src='" + results[storyId].fields.thumbnail + "'><br>" + "<p class='summaryText'>" + abbreviatedStory + "<br>" + "Click through to the guardian for the full story " + "<a href='" + weblink + "'>"+ weblink + "</a>" + "</p>";
    let summaryDiv = document.getElementById("showSummary");
    summaryDiv.replaceChild(summaryDivContent, summaryDiv.childNodes[0]);
  }

  runRequestMain(postRenderCallback){
    this.getPostData().then(post => {
    this.renderPostMain(post);
    postRenderCallback();
    });
  }

  runRequestSummary(storyId, callback){
    this.getPostData().then(post => {
    this.renderPostSummary(post, storyId);
    callback();
    });
  }

  abbrev(text) {
    return text.slice(0,1000) + "...";
  }

}
