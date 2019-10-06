const api = new GuardianApi();

api.getHeadlines(function(response) {
  const results = response.response.results;
  for (let i = 0; i < results.length; i++) {
    console.log(results[i].fields.headline);
  }
});
