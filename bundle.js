(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.articlesArray = [];
        }
        setArticles(response) {
          response.results.forEach((article) => {
            this.articlesArray.push(article.webTitle);
          });
        }
        formatArticles(article) {
        }
        getArticles() {
          return this.articlesArray;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#search-button").addEventListener("click", () => {
            let searchInput = document.querySelector("#search-bar-input").value;
            this.displayArticlesByTopic(searchInput);
            document.querySelector("#search-bar-input").value = "";
          });
        }
        displayArticles() {
          this.client.loadArticles((response) => {
            this.model.setArticles(response);
            console.log(response);
            for (let index = 0; index < this.model.getArticles().length; index++) {
              const divElement = document.createElement("div");
              divElement.className = "article";
              divElement.innerText = this.model.getArticles()[index];
              this.mainContainerEl.append(divElement);
            }
          });
        }
        displayArticlesByTopic(searchQuery) {
        }
      };
      module.exports = NewsView2;
    }
  });

  // node_modules/guardian-js/dist/Endpoint.js
  var require_Endpoint = __commonJS({
    "node_modules/guardian-js/dist/Endpoint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Endpoint = void 0;
      var GuardianJSInvalidMethodException = class {
        constructor(message) {
          this.message = message;
          this.name = "GuardianJSInvalidMethodException";
        }
      };
      var Endpoint = class {
        constructor(endpoint, key, useSSL, availableFunctions = ["search"]) {
          this.endpoint = endpoint;
          this.key = key;
          this.http = useSSL ? "https://" : "http://";
          this.base = `${this.http}content.guardianapis.com`;
          this.availableFunctions = availableFunctions;
        }
        /**
         * Internal request wrapper
         * @param url URL to send the request to
         * @returns Response data
         */
        async _request(url) {
          const resp = await fetch(url);
          const body = await resp.json();
          if (resp.status >= 400) {
            throw new Error(body.message);
          }
          return body.response;
        }
        /**
         * Search the Guardian api
         * @param query The string to search on
         * @param filters A list of filters
         * @returns Response data
         */
        async search(query = "", filters = {}) {
          if (!this.availableFunctions.includes("search")) {
            throw new GuardianJSInvalidMethodException("search is an invalid method");
          }
          let filter = "";
          Object.entries(filters).forEach((entry) => {
            const key = entry[0].replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
            filter = `${filter}&${key}=${entry[1]}`;
          });
          return this._request(`${this.base}/${this.endpoint}?api-key=${this.key}&q=${query}${filter}`);
        }
        /**
         * Get an item by ID
         * @param id ID of the item to get
         * @returns Response data
         */
        async getById(id) {
          if (!this.availableFunctions.includes("getById")) {
            throw new GuardianJSInvalidMethodException("getById is an invalid method");
          }
          return this._request(`${this.base}/${id}?api-key=${this.key}`);
        }
      };
      exports.Endpoint = Endpoint;
    }
  });

  // node_modules/guardian-js/dist/Client.js
  var require_Client = __commonJS({
    "node_modules/guardian-js/dist/Client.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Client = void 0;
      var Endpoint_1 = require_Endpoint();
      var Client = class {
        constructor(key, secure = false) {
          this.content = new Endpoint_1.Endpoint("search", key, secure);
          this.tags = new Endpoint_1.Endpoint("tags", key, secure);
          this.sections = new Endpoint_1.Endpoint("sections", key, secure);
          this.editions = new Endpoint_1.Endpoint("editions", key, secure);
          this.item = new Endpoint_1.Endpoint(null, key, secure, ["getById"]);
        }
      };
      exports.Client = Client;
    }
  });

  // node_modules/guardian-js/dist/index.js
  var require_dist = __commonJS({
    "node_modules/guardian-js/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Client_1 = require_Client();
      exports.default = Client_1.Client;
    }
  });

  // newsClient.js
  var require_newsClient = __commonJS({
    "newsClient.js"(exports, module) {
      var import_guardian_js = __toESM(require_dist());
      var NewsClient2 = class {
        loadArticles(callback) {
          console.log("LOADING ARTICLES");
          const api = new import_guardian_js.default("883024d4-b7ae-40f2-a680-9684ed4072fe", true);
          api.content.search("uk").then((response) => callback(response));
        }
        loadArticlesByTopic(searchQuery, callback) {
          fetch(`https://content.guardianapis.com/search?${searchQuery}`).then((response) => response.json()).then((response) => {
            callback(response);
          }).catch((error) => {
            displayError(error);
          });
        }
      };
      module.exports = NewsClient2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var NewsClient = require_newsClient();
  var client = new NewsClient();
  var model = new NewsModel();
  var view = new NewsView(model, client);
  view.displayArticles();
})();
//# sourceMappingURL=bundle.js.map
