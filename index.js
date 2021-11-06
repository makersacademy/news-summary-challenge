const Summary = require('./src/Summary');
const CreateCard = require('./src/createCard');
const summary = new Summary();
const card = new CreateCard();

summary.getAllArticles(card);