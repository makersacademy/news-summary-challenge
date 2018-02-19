
window.onload = () => {
    const controller = new NewsController();
    controller.initialize();
};

class NewsController {

    constructor() {
        this.api = new NewsAPI();
        this.newsItems = null;
        window.addEventListener("hashchange", this._handleHashChange.bind(this));
    }

    initialize() {
        this.newsItems = this.api.getNewsData();
        this.showSectionNews();
    }

    showSectionNews() {
        const articleDiv = document.getElementById("article");
        this.newsItems.forEach(ni => {
            const a = document.createElement("a");
            a.className = "headline";
            a.href = "#" + ni.id;
            const br = document.createElement("br");
            a.innerHTML = ni.title;
            const img = document.createElement("img");
            img.src = ni.thumbnail;
            articleDiv.appendChild(a);
            // articleDiv.appendChild(br);
            articleDiv.appendChild(img);
        });
    }

    _handleHashChange() {
        const hash = window.location.hash;
        const id = hash.replace("#", "");
        const data = this._findNewsItem(id);
        const summary = this.api.getNewsSummary(data.webUrl);
        const summaryDiv = document.getElementById("news_summary");

        const p = document.createElement("p");
        p.innerHTML = summary;

        const link = document.createElement("a");
        link.href = data.webUrl;
        link.text = "Click To Read Full Story";
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = data.thumbnail;

        summaryDiv.appendChild(img);
        summaryDiv.appendChild(p);
        summaryDiv.appendChild(link);
    }

    _findNewsItem(id) {
        for (const ni of this.newsItems) {
            if (ni.id === id) {
                return ni;
            }
        }
    }

}
