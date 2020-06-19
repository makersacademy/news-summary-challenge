class StoryHandler {
  constructor(apiUrl = "https://content.guardianapis.com/search") {
    this.ARTICLE_SUMMARISER = new ArticleSummariser();
    this.TODAY = new Date().toISOString().split("T")[0];
    this.RESULTS_NUMBER = 20;
    this.ORDER_BY = "newest";
    this.QUERY_STRING = `?from-date=${this.TODAY}&order-by=${this.ORDER_BY}&page-size=${this.RESULTS_NUMBER}&api-key=`;
    this.FIELDS_STRING = `&show-fields=thumbnail`;
    this.URL = apiUrl + this.QUERY_STRING;
    this.stories = this.fetchStories();
  }

  async fetchStories() {
    let json = await this.getJSON(
      this.URL + config.guardianApiKey + this.FIELDS_STRING
    );
    let results = json.response.results;
    console.log(results);
    return results.map((story) => {
      return new Story(story.id, story.webTitle, story.fields.thumbnail);
    });
  }

  async getJSON(location) {
    let response = await fetch(location);
    let json = await response.json();
    return json;
  }

  async renderHeadlines() {
    let stories = await this.stories;
    let list = document.getElementById("article-list");
    stories.forEach((story) => {
      list.append(story.headlineComponent());
    });
  }

  async renderSummary(id) {
    let section = document.getElementById("main");
    section.innerHTML = "<h2>Loading...</h2>";
    let story = await this.findById(id);
    let summary = await story.summaryComponent();
    document.body.replaceChild(summary, section);
  }

  async findById(id) {
    let stories = await this.stories;
    return stories.filter((story) => story.id == id)[0];
  }
}
