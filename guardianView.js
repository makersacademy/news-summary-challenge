class GuardianView {
    constructor(client) {
        this.client = client;
        this.headlineData = null;
        this.button = document.querySelector('#button');
        this.button.addEventListener('click', async () => {
            const searchInput = document.querySelector('#search-text');
            this.displayHeadlines(searchInput.value); 

        });
    }
    async load(search_item) {
        this.headlineData = await this.client.fetchNewsData(search_item);
      }

    getNewsData() {
        return new Promise((resolve, reject) => {
            if (this.headlineData) {
              resolve(this.headlineData);
            } else {
              reject(new Error('No headlines available'));
            }
          });
    }

    async displayHeadlines(search_text) {
        const headlinesContainer = document.querySelector('#main-container');
        try {
          await this.load(search_text);
          const headlines = await this.getNewsData();
          headlinesContainer.innerHTML = headlines.map(headline => `
            <div>
              <a href="${headline.link}" target="_blank">
                <img src="${headline.thumbnail}" alt="${headline.headline}">
                <h3>${headline.headline}</h3>
              </a>
            </div>
          `).join('');
        } catch (error) {
          console.error(error);
          headlinesContainer.innerHTML = '<p>An error occurred while fetching headlines</p>';
        }
      }
};

module.exports = GuardianView;