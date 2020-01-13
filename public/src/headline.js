function Headline(text){
  this.text = text;
};

Headline.prototype.returnHeadline = function() {
  return this.text;
}