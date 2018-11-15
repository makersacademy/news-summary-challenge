class NewsApp {
  static render() {
    const url = 'https://content.guardianapis.com/search?api-key=a2b7e67e-d194-46ae-9d15-5b21a1fc543f';
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const stories = data.response.results;
        stories.forEach((story) => {
          const para = document.createElement('p');
          para.innerHTML = `<a href="${story.webUrl}">${story.webTitle}</a>`;
          document.body.appendChild(para);
        });
      });
  }
}

NewsApp.render();
