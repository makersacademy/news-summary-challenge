(() => {
  var e = {
      406: (e) => {
        e.exports = class {
          constructor() {
            this.mainContainerEl = document.querySelector("#main-container");
          }
          getByNewest = () =>
            fetch(
              `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=${API_KEY}`
            )
              .then((e) => e.json())
              .then((e) => e.response.results);
          displayNews = (e) => {
            for (let t of e) {
              console.log(t);
              let e = document.createElement("div"),
                n = document.createElement("img");
              e.append(t.webTitle),
                (e.className = "news"),
                (n.src = t.fields.thumbnail),
                this.mainContainerEl.append(e),
                this.mainContainerEl.append(n);
            }
          };
        };
      },
    },
    t = {};
  function n(s) {
    var o = t[s];
    if (void 0 !== o) return o.exports;
    var r = (t[s] = { exports: {} });
    return e[s](r, r.exports, n), r.exports;
  }
  (() => {
    console.log("c718189d-6258-45a5-989d-c09367c81379");
    const e = new (n(406))();
    e.getByNewest().then((t) => e.displayNews(t));
  })();
})();
