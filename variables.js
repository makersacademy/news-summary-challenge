let newsBank = []
let news = []
let newsList = document.getElementById("newsWrapper");
let modal = document.getElementById("modalWrapper");
let storylink = document.getElementById("storylink")
let testIndex = 0;
let modalClose = document.getElementsByClassName("close")[0];
let imageID = 0;
let testBank = [
  ["How to make vanilla ice-cream – recipe", "Vanilla ice-cream is easy to make, especially with an ice-cream maker. Get churning!", "https://www.theguardian.com/food/2020/aug/19/how-to-make-vanilla-ice-cream-recipe-felicity-cloake"],
  ["Meera Sodha's vegan recipe for cereal milk ice-cream sandwiches", "A novel summer ice-cream dessert with all the nostalgic flavour and none of the dairy.", "https://www.theguardian.com/food/2020/jun/13/meera-sodhas-vegan-recipe-for-cereal-milk-ice-cream-sandwiches"],
  ["Ice-cream with a twist – delicious recipes with added cool", "Fancy more than a vanilla cone? These frozen treats put the familiar options in the shade.", "https://www.theguardian.com/food/2020/may/22/ice-cream-with-a-twist-delicious-recipes-with-added-cool"],
  ["Spaghetti and ice-cream: Anna Jones’ meals for one", "There’s no need to get fancy when cooking for one: bring on the spaghetti with chillies and greens, followed by a chocolate and sticky blood orange sundae.", "https://www.theguardian.com/food/2020/feb/14/spaghetti-and-ice-cream-anna-jones-meals-for-one"],
  ["How ice cream tickles your brain", "Eating ice cream really does make you happy. Scientists have found that a spoonful of the cold stuff lights up the same pleasure centre in the brain as winning money or listening to your favourite music.", "https://www.theguardian.com/uk/2005/apr/29/health.science"],
  ["The occult's return to art: 'Before, you'd have been laughed out of the gallery'", "There is a surge of interest in spirituality and m…eum, and The Botanical Mind at Camden Art Centre.", "https://www.theguardian.com/artanddesign/2020/nov/…-before-youd-have-been-laughed-out-of-the-gallery"],
  ["Amazing maize: Tom Hunt's no-waste recipe for corn cob ice-cream", "Maize has hundred of uses beyond sweetcorn, with the pulp, cob and even the husks having culinary uses, even in ice-cream.", "https://www.theguardian.com/food/2020/sep/12/tom-hunt-no-waste-recipe-corn-cob-ice-cream"],
  ["Nigel Slater’s savoury ice cream recipes", "The sourness of goat’s cheese coupled with gentle backnotes of honey makes for a sweet-savoury ice cream that goes perfectly with air-dried ham.", "https://www.theguardian.com/lifeandstyle/2015/jun/07/nigel-slater-ice-cream-recipes"],
  ["Pot luck: when did ice-cream make it big in the theatre?", "Frozen dessert and a baking auditorium aren't the most obvious of partners, but at some point in the last 150 years the half-time ice-cream became a British institution. When ... and why?", "https://www.theguardian.com/stage/theatreblog/2011/jan/18/ice-cream-theatre-interval"],
  ["Smooth operator: Yotam Ottolenghi's ice-cream recipes", "One of the great advantages of making your own ice-cream is the fun you can have experimenting with the ingredients.", "https://www.theguardian.com/lifeandstyle/2014/jun/27/ice-cream-recipes-yotam-ottolenghi"]
]
