class summaryView {
  constructor(text, sentences) {
    this.text = text;
    this.sentences = sentences;
  }

  displaySummary() {
    let summary = document.createElement('div');
    summary.setAttribute('class', 'summaryDiv');
    summary.innerHTML = this.text;
    return summary;
  }
}
