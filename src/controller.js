function Controller(model, view) {
  this.model = model;
  this.view = view;
}

Controller.prototype.initialise = async function() {
  await this.model.loadNews(() => {
    this.view.renderNews(this.model.data);
  });
}

Controller.prototype.showIndividualStory = async function(url) {
  await this.model.loadSummary(url, () => {
    this.view.renderSummary(url, this.model.summary, this.model.data);
  });
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Controller
}
