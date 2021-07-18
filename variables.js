let newsBank = []
let news = []
let recipeWrapper = document.getElementById("recipeWrapper");
let modal = document.getElementById("modalWrapper");
let storylink = document.getElementById("storylink")
let testIndex = 0;
let modalClose = document.getElementsByClassName("close")[0];
let imageID = 0;
let tableCount = 1;
let row = 1;
let rowID= "row1";
let tableRow = "row1"
let para = document.getElementById("newsText");
let head = document.getElementById("newsHead");
let testBank = [
  ["How to make vanilla ice-cream – recipe", "Vanilla ice-cream is easy to make, especially with an ice-cream maker. Get churning!", "https://www.theguardian.com/food/2020/aug/19/how-to-make-vanilla-ice-cream-recipe-felicity-cloake"],
  ["Meera Sodha's vegan recipe for cereal milk ice-cream sandwiches", "A novel summer ice-cream dessert with all the nostalgic flavour and none of the dairy.", "https://www.theguardian.com/food/2020/jun/13/meera-sodhas-vegan-recipe-for-cereal-milk-ice-cream-sandwiches"],
  ["Ice-cream with a twist – delicious recipes with added cool", "Fancy more than a vanilla cone? These frozen treats put the familiar options in the shade.", "https://www.theguardian.com/food/2020/may/22/ice-cream-with-a-twist-delicious-recipes-with-added-cool"],
  ["Spaghetti and ice-cream: Anna Jones’ meals for one", "There’s no need to get fancy when cooking for one: bring on the spaghetti with chillies and greens, followed by a chocolate and sticky blood orange sundae.", "https://www.theguardian.com/food/2020/feb/14/spaghetti-and-ice-cream-anna-jones-meals-for-one"],
  ["Cassia ice cream", "The custard base of this ice cream is infused with cassia - a type of cinnamon with a bold, woody flavour. This cassia ice cream recipe, created by Robert Thompson will work just as well as a standalone sweet snack as it will as a smaller element for a larger dessert.", "https://www.greatbritishchefs.com/recipes/cassia-ice-cream-recipe"],
  ["Brown butter ice cream", "Brown butter adds a nutty, caramelised flavour to creamy vanilla ice cream in this recipe. It's a little effort but so worth it for a grown-up summer treat", "https://www.olivemagazine.com/recipes/brown-butter-ice-cream/"],
  ["Amazing maize: Tom Hunt's no-waste recipe for corn cob ice-cream", "Maize has hundred of uses beyond sweetcorn, with the pulp, cob and even the husks having culinary uses, even in ice-cream.", "https://www.theguardian.com/food/2020/sep/12/tom-hunt-no-waste-recipe-corn-cob-ice-cream"],
  ["Nigel Slater’s savoury ice cream recipes", "The sourness of goat’s cheese coupled with gentle backnotes of honey makes for a sweet-savoury ice cream that goes perfectly with air-dried ham.", "https://www.theguardian.com/lifeandstyle/2015/jun/07/nigel-slater-ice-cream-recipes"],
  ["Chocolate and black pepper gelato", "Give silky smooth gelato a grown-up twist with 70% dark chocolate and freshly ground peppercorns in this indulgent dessert idea", "https://www.olivemagazine.com/recipes/baking-and-desserts/chocolate-and-black-pepper-gelato/"],
  ["Magical instant ice cream", "Children and adults will love this – part recipe, part science experiment. Milk transforms into delicious colourful ice cream in front of your eyes", "https://www.bbcgoodfood.com/recipes/magical-instant-slushies"],
  ["Birch ice cream with black bean pesto, spiced cream and milk skin", "Heinrich Schneider's stunning ice cream recipe might look more like an alien landscape than an Italian dessert, but rest assured this sophisticated dish delivers formidably on flavour, too", "https://www.greatitalianchefs.com/recipes/birch-ice-cream-recipe"],
  ["Smooth operator: Yotam Ottolenghi's ice-cream recipes", "One of the great advantages of making your own ice-cream is the fun you can have experimenting with the ingredients.", "https://www.theguardian.com/lifeandstyle/2014/jun/27/ice-cream-recipes-yotam-ottolenghi"]
]
