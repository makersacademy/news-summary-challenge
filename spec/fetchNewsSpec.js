document.addEventListener("DOMContentLoaded", function() {
  test = new Testing();
  let errors = [];

  let fakeFetchNews = new FetchNews();

try {
//
// let runFunction = fakeFetchNews.runRequestMain(callback => {
//   return "This is a list of headlines"
//   });
// console.log("-------");
//   console.log(fakeFetchNews.runRequestMain("url", callback => {
//     return "This is a list of headlines"
//     }));
//
//   test.saveTest("1 -  Headlines are saved onto the page",
//    test.isEqual(runFunction, "This is a list of headlines"));

// abbrev test:
let shortStory = fakeFetchNews.abbrev("Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 million years ago; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are modern feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage to survive the Cretaceous–Paleogene extinction event approximately 66 million years ago. Dinosaurs can therefore be divided into avian dinosaurs, or birds; and the extinct non-avian dinosaurs, which are all dinosaurs other than birds. Dinosaurs are a varied group of animals from taxonomic, morphological and ecological standpoints. Birds, at over 10,700 living species, are among the most diverse group of vertebrates. Using fossil evidence, paleontologists have identified over 900 distinct genera and more than 1,000 different species of non-avian dinosaurs. Dinosaurs are represented on every continent by both extant species (birds) and fossil remains. Through the first half of the 20th century, before birds were recognized as dinosaurs, most of the scientific community believed dinosaurs to have been sluggish and cold-blooded. Most research conducted since the 1970s, however, has indicated that dinosaurs were active animals with elevated metabolisms and numerous adaptations for social interaction. Some were herbivorous, others carnivorous. Evidence suggests that all dinosaurs were egg-laying; and that nest-building was a trait shared by many dinosaurs, both avian and non-avian.")
let shortStoryAbbrev = "Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 million years ago; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are modern feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage to survive the Cretaceous–Paleogene extinction event approximately 66 million years ago. Dinosaurs can therefore be divided into avian dinosaurs, or birds; and the extinct non-avian dinosaurs, which are all dinosaurs other than birds. Dinosaurs are a varied group of animals from taxonomic, morphological and ecological standpoints. Birds, at over 10,700 living species..."

test.saveTest("2 -  news story is abbreviated to a summary", test.isEqual(shortStory, shortStoryAbbrev));


} catch (err) {
  console.log(err);
  errors.push(err);
}

// Prints Tests
let result = test.printTests();
document.getElementById("id3").innerHTML = result;
document.getElementById("error3").innerHTML = errors.toStrin`g().replaceAll(',','');
});
