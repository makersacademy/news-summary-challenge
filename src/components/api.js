// export async function getArticles() {
//   try {
//     let data = await fetch(
//       "https://newsapi.org/v2/top-headlines?" +
//         "country=us&" +
//         "apiKey=2ab10248d6ea4276b5ccd96cc3fa8f20"
//     );
//     let result = await data.json();
//     return result.articles;
//   } catch (error) {
//     throw error;
//   }
// }
export async function getArticles() {
  const result = fetch(
    "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=2ab10248d6ea4276b5ccd96cc3fa8f20"
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
  return result;
}

export async function getSummary() {
  const result = fetch(
    "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=2ab10248d6ea4276b5ccd96cc3fa8f20"
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
  return result;
}
