class News {
  displayNews() {
    fetch('https://content.guardianapis.com/search?api-key=41355124-6ce9-43d0-99af-4b99580d961a')
    .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data) // our response data!
  });
  };
}