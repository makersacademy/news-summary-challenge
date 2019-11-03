export async function getArticles() {
  return Promise.resolve({
    articles: [{ title: "Title", description: "Description" }]
  });
}

export async function getSummary() {
  return Promise.resolve({
    text: "Lorem ipsum",
    sentences: "Lorem ipsum again"
  });
}
