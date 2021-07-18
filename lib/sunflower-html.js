// These are for the testing interface.
let groupId = 0;
let testId = 1000;


function displayExampleGroupCard(text) {
  let cardHeaderElement = document.createElement('div');
  let header = document.createTextNode(`🌱 ${text} 🌱 `);
  cardHeaderElement.setAttribute('class', "card-header");
  cardHeaderElement.appendChild(header);

  let cardBorderElement = document.createElement('div');
  cardBorderElement.setAttribute('class', "card border-primary mb-3");
  cardBorderElement.setAttribute('style', "max-width: 50rem;")
  cardBorderElement.setAttribute('id', groupId);
  cardBorderElement.appendChild(cardHeaderElement);

  let exampleGroupsPosition = document.getElementsByClassName("Example Groups")[0];
  exampleGroupsPosition.appendChild(cardBorderElement);

  groupId++
  return;
}

function displayTestInExampleGroup(text) {
  let cardBodyElement = document.createElement('div');
  cardBodyElement.setAttribute('class', 'card-body');
  cardBodyElement.setAttribute('id', testId);

  let cardTitleElement = document.createElement('h6');
  let label = document.createTextNode(text);
  cardTitleElement.setAttribute('class', "card-title");
  cardTitleElement.appendChild(label);

  cardBodyElement.appendChild(cardTitleElement);

  let exampleGroupPosition = document.getElementById(groupId-1);

  exampleGroupPosition.appendChild(cardBodyElement);

  testId++
  return;
}

function displayResultUnderTest(text) {
  let cardTextElement = document.createElement('p');
  let result = document.createTextNode("💢 " + text);
  cardTextElement.appendChild(result);
  cardTextElement.setAttribute('class', "card-text");
  cardTextElement.style.color="#f3969a";

  let listPosition = document.getElementById(testId-1);
  listPosition.appendChild(cardTextElement);
}

function displayPass() {
  let cardTextElement = document.createElement('p');
  let result = document.createTextNode("✅  Pass");
  cardTextElement.appendChild(result);
  cardTextElement.setAttribute('class', "card-text");
  cardTextElement.style.color="#78c2ad";

  let listPosition = document.getElementById(testId-1);
  listPosition.appendChild(cardTextElement);
}

function displayFail(actual, expected) {
  let cardTextElement = document.createElement('p');
  let result = document.createTextNode(`❌ Fail - expected "${expected}" but got "${actual}"`);
  cardTextElement.appendChild(result);
  cardTextElement.setAttribute('class', "card-text");
  cardTextElement.style.color="#f3969a";

  let listPosition = document.getElementById(testId-1);
  listPosition.appendChild(cardTextElement);
}