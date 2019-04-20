let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h1> Home page </h1>
    <button id="myBtn">Button</button>
    </section>
    `;
    return view;
  },
  after_render: function() {
    document.getElementById('myBtn').addEventListener('click', () => {
      console.log('Yo');
      alert('Yo');
    });
  }
};

let ArticleShow = {};
let Error404 = {};

export { Home, ArticleShow, Error404 };
