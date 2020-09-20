class summaryView {
  constructor(text, sentences) {
    this.text = text;
    this.sentences = sentences;
  }

  displaySummary() {
    let summary = document.createElement('div');
    summary.setAttribute('class', 'summaryDiv');

    this.sentences.map((each) => {
      let sentence = document.createElement('p');
      sentence.innerHTML = each;
      summary.appendChild(sentence);
    });
    return summary;
  }
}
