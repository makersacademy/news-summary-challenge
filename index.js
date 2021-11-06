const Summary = require('./src/Summary');
const CreateCard = require('./src/createCard');
const modalLogic = require('./src/modalLogic');
const summary = new Summary();
const card = new CreateCard();

summary.getAllArticles(card);


