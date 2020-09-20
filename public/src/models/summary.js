let summarize = async (articleUrl) => {
  let apiData;
  await fetch(
    'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' +
      articleUrl
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
  return apiData;
};
