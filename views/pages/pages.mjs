import { api } from '../../services/api.mjs';

let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Head line page </h3>
    </section>
    `;

    api.getArticles();

    return view;
  },
  after_render: function() {
    // console.log(document.getElementById('articles'));
    document.getElementById('articles').addEventListener('click', event => {
      if (event.target.id == 'summary') {
        window.location.href = '#/summary';
        api.getSummary();
      }
    });
  }
};

let ArticleShow = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Summary </h3>
    </section>
    `;
    return view;
  }
};
let Error404 = {};

export { Home, ArticleShow, Error404 };
