class NewsApi {
  loadNews(response, error) {
    fetch("http://localhost:3000/news")
      .then((response) => response.json())
      .then((data) => response(data))
      .catch(() => error());
  }

  setCategory(tag, response, error) {
    fetch(`http://localhost:3000/search?q=${tag}`)
      .then((response) => response.json())
      .then((data) => response(data))
      .catch(() => error());
  }
}

module.exports = NewsApi;
