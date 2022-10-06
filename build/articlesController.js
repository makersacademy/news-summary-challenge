var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArticlesController_addSearchEventHandler, _ArticlesController_loadSearchArticles, _ArticlesController_addResetEventHandler;
export class ArticlesController {
    constructor(model, view, api) {
        this.loadArticles = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.api.getArticles();
                this.model.setArticles(data);
                const articles = this.model.getArticles();
                this.view.displayArticles(articles);
            }
            catch (error) {
                console.log(error);
            }
        });
        _ArticlesController_addSearchEventHandler.set(this, () => {
            this.view.addSearchEventHandler(__classPrivateFieldGet(this, _ArticlesController_loadSearchArticles, "f"));
        });
        _ArticlesController_loadSearchArticles.set(this, (searchInput) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.api.getArticles();
                this.model.setArticles(data);
                const articles = this.model.getSearchArticles(searchInput);
                this.view.displayArticles(articles);
            }
            catch (error) {
                console.log(error);
            }
        }));
        _ArticlesController_addResetEventHandler.set(this, () => {
            this.view.addResetEventHandler(this.loadArticles);
        });
        this.model = model;
        this.view = view;
        this.api = api;
        __classPrivateFieldGet(this, _ArticlesController_addSearchEventHandler, "f").call(this);
        __classPrivateFieldGet(this, _ArticlesController_addResetEventHandler, "f").call(this);
    }
}
_ArticlesController_addSearchEventHandler = new WeakMap(), _ArticlesController_loadSearchArticles = new WeakMap(), _ArticlesController_addResetEventHandler = new WeakMap();
