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
  ["El Topo review – Jodorowsky's weird world of occult psychedelia", "After seeing El Topo in 1970, Jodorowsky superfan …appearance, which fed into his mythic reputation.", "https://www.theguardian.com/film/2020/jan/09/el-topo-review-alejandro-jodorowsky"],
  ["John Safran on the occult, obstacles and 'bad faith' criticisms: 'It's a bit rich'", "That question is a central theme of Safran’s Audib…eignites his fascination for religion and ritual.", "https://www.theguardian.com/media/2019/nov/18/john…obstacles-and-bad-faith-criticisms-its-a-bit-rich"],
  ["The occult's return to art: 'Before, you'd have been laughed out of the gallery'", "There is a surge of interest in spirituality and m…eum, and The Botanical Mind at Camden Art Centre.", "https://www.theguardian.com/artanddesign/2020/nov/…-before-youd-have-been-laughed-out-of-the-gallery"],
  ["‘I became convinced I was channelling powers’: my life as a teenage witch", "More than being gay, or British, or refusing to up…a teenage witch is a crucial part of my identity.", "https://www.theguardian.com/world/2020/oct/31/i-be…was-channelling-powers-my-life-as-a-teenage-witch"],
  ["Blithe Spirit review – Judi Dench presides over a deathly farce", "The classic Noël Coward comedy about a ghost (firs…d TV director Edward Hall making his movie debut.", "https://www.theguardian.com/film/2021/jan/13/blithe-spirit-review-judi-dench-isla-fisher-noel-coward"],
  ["TV tonight: murders are afoot in a new Agatha Christie adaptation", "Rufus Sewell plays Mark Easterbrook, a man haunted…y died, his once idyllic world begins to unravel.", "https://www.theguardian.com/tv-and-radio/2020/feb/…ers-are-afoot-in-a-new-agatha-christie-adaptation"],
  ["The neo-Nazi symbol posted by Pete Evans has a strange and dark history | Jason Wilson", "The symbol Evans deployed was the sonnenrad, the “sunwheel swastika”, or black sun.", "https://www.theguardian.com/world/2020/nov/24/the-…sted-by-pete-evans-has-a-strange-and-dark-history"]
]
