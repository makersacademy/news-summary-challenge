class ArticlesModel {
    constructor() {
        this.setArticles = (data) => {
            this.articles = data;
        };
        this.getArticles = () => {
            return this.articles;
        };
        this.getSearchArticles = (searchInput) => {
            if (searchInput == null)
                searchInput = "";
            const filteredArticles = this.articles.filter((article) => {
                const titleAndAbstract = article.title + " " + article.abstract;
                return titleAndAbstract
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            return filteredArticles;
        };
        this.articles = [];
    }
}
export { ArticlesModel };
