class GuardianNewsApi {

  async loadNews(searchTerm) {
    // console.log(searchTerm);
    const response = await fetch(
      `https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=51ac3d32-cbc5-4ed5-92c9-7c0d2a78c31c`
    );

    const data = await response.json();
    console.log(response)

    return data.response.results;
  }
}

module.exports = GuardianNewsApi;