const Summary = require('./src/Summary');
const CreateCard = require('./src/createCard');
const CreateModal = require('./src/CreateModal');
const modalLogic = require('./src/modalLogic');
const summary = new Summary();
const card = new CreateCard();
const modal = new CreateModal();

summary.getAllArticles(card, modal);