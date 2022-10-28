class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }
}

module.exports = NewsView;


// class GithubView {
//   constructor(model, client) {
//     this.model = model;
//     this.client = client;

//     const submitButtonEl = document.querySelector('#submit-button');
//     const repoInputEl = document.querySelector('#repo-name-input');

//     submitButtonEl.addEventListener('click', () => {
//       const repoName = repoInputEl.value;

//       this.client.getRepoInfo(repoName, repoData => {
//         console.log(repoData);
//         this.display(repoData);
//       });
//     });
//   }

//   display(data) {
//     const repoName = document.querySelector('#repo-name')
//     const repoDescription = document.querySelector('#repo-description')
//     const imageEl = document.createElement('img');

//     imageEl.src = data.organization.avatar_url

//     repoName.textContent = ''
//     repoDescription.textContent = ''
//     repoName.append(data.name)
//     repoDescription.append(data.description)
//     document.body.appendChild(imageEl)

//   }
// }