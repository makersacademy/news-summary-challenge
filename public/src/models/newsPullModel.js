class NewsPull {
  constructor() {
    this.titles = [];
    this.articles = [];
  }

  async getHtmlNews() {
    let apiData;
    await fetch(
      'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body'
    )
      .then(async (response) => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        // Examine the text in the response
        await response.json().then(function (data) {
          apiData = data;
        });
      })
      .catch(function (err) {
        console.log('Fetch Error: ', err);
      });
    return apiData.response.content.fields.body;
  }

  async getTitles() {
    await this.getArticles();
    this.titles = this.articles.map((each) => {
      let pTags = each.getElementsByTagName('p');
      return pTags[0].innerHTML;
    });
  }

  async getArticles() {
    let htmlNews = await this.getHtmlNews();
    //console.log(htmlNews);

    //creating div to get the titles
    let hiddenDiv = document.createElement('div');
    hiddenDiv.innerHTML = htmlNews;

    //get the titles only
    let blockDiv = hiddenDiv.getElementsByClassName('block-elements');

    this.articles = [...blockDiv];
  }
}
