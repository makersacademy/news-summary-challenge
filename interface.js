const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

  guardian = new Guardian();
  guardian.requestHeadlines();
