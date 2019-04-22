import { api } from '../../services/api.mjs';
import Utils from '../../services/helper-methods.mjs';

let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Head line page </h3>
    </section>
    `;
    api.getArticles();
    return view;
  }
};

let ArticleShow = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Summary </h3>
    </section>
    `;

    let article = Utils.parseRequestURL();
    api.createSummary(article.id);

    return view;
  }
};

let Error404 = {};

export { Home, ArticleShow, Error404 };
