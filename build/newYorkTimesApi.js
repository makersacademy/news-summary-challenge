var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiKey } from "./apiKey";
export class NewYorkTimesApi {
    constructor() {
        this.getArticles = () => __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.getArticlesHome();
            return articles;
        });
        this.getArticlesHome = () => __awaiter(this, void 0, void 0, function* () {
            const path = "home.json";
            const url = this.url + path + this.apiKey;
            const articles = yield fetch(url).then((res) => res.json());
            return articles.results;
        });
        this.url = "https://api.nytimes.com/svc/topstories/v2/";
        this.apiKey = `?api-key=${apiKey}`;
    }
}
