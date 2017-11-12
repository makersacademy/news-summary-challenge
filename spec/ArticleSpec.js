(function() {
  console.log("Testing Article model: ");

  (function() {
    console.log(" it gets an id");
    var articleModelOne = new ArticleModel();
    var articleModelTwo = new ArticleModel();
    assert.isTrue(articleModelOne.id() === 0);
    assert.isTrue(articleModelTwo.id() === 1);
  })();

  (function() {
    console.log(" it can be instantiated with a headline");
    var articleModel = new ArticleModel("Al Gore: 'I tried my best' but Trump can't be educated on climate change");
    assert.isTrue(articleModel.headline === "Al Gore: 'I tried my best' but Trump can't be educated on climate change");
  })();

  (function() {
    console.log(" it can be instantiated with a url for the full story");
    var articleModel = new ArticleModel("Al Gore: 'I tried my best'", 'www.guardian.co.uk/awesome_story');
    assert.isTrue(articleModel.url === 'www.guardian.co.uk/awesome_story');
  })();

  (function() {
    console.log(" it takes the first three pars of the story body as a summary");
    var articleModel = new ArticleModel("Al Gore: 'I tried my best'", 'www.guardian.co.uk/awesome_story', `<p>It is my 25th birthday this weekend, which means I am officially allowed to use the phrase â€œquarterlife crisisâ€. I am infinitely less wise than I thought I would be by now, but, because I am halfway through my third decade and adulthood is slapping me in the face like a wet fish, Iâ€™m well placed to share 25 things I have learned.</p> <p><strong>1. </strong>Your physical and mental health, and that of those closest to you, is all that really matters. Everything else is just background scenery, irrelevant decor that adorns your life.<br /></p> <p><strong>2. </strong>The UK isnâ€™t the worse place in the world to live. Even with the populist politics, the consistently terrible Saturday night TV and the national obsession with a pallid, tasteless, leafâ€‘based drink, it is alright, really.</p> <p><strong>3. </strong>There is no shame in talking about your feelings out loud. British people are bad at this: ignore them. Get therapy, call a mate, speak up.</p> <p><strong>4. </strong>Excellent friends will see you through dark times. Thank them, get drunk with them, party with them before they get married and have kids.</p> <p><strong>5. </strong>It is fine to jettison anyone who doesnâ€™t bring out the best in you.</p> <p><strong>6. </strong>Forgiveness isnâ€™t weakness.</p> <p><strong>7. </strong>Diets are pointless.</p> <p><strong>8. </strong>Reality TV will save your soul during the bleakest of times.</p> <p><strong>9. </strong>Grief is not something you can seal up inside you and smooth over. You will learn to build around it, to carry on, but sometimes grief will mow you down and plough straight through you. This is OK.</p> <p><strong>10. </strong>London is a decent city in which to wile away your youth: it has thousands of bars and this thing politicians call â€œopportunityâ€, so it is fun at times.</p> <p><strong>11. </strong>Forget the property thing. Financial stability, your own space and the freedom to paint your walls anything other than magnolia are overrated.</p> <p><strong>12. </strong>Keeping yourself organised is now less of a chore and more a way of living that I have come to realise is actually conducive to success.</p> <p><strong>13. </strong>A Hotmail email address is no longer acceptable.</p> <p><strong>14. </strong>Filing systems are useful. Post-it notes are not evil. Calendars were created for a reason.</p> <p><strong>15. </strong>Storing all your passwords on one spreadsheet is a recipe for hours and hours of wasted time.</p> <p><strong>16. </strong>Money comes and goes.</p> <p><strong>17. </strong>The more you earn, the more you spend on boring purchases that make your life a little bit easier and a touch more mundane: Â£20 on floral coasters; Â£1,000 in a no-access, fiveâ€‘year Isa. Living.</p> <p><strong>18.</strong> Adulthood is basically transitioning from spending Â£500 in Topshop to blowing Â£1,000 in Ikea on a credit card.</p> <p><strong>19.</strong> Talking to strangers wonâ€™t kill you. Most people are actually OK â€“ unless they are estate agents.</p> <p><strong>20.</strong> Bad/random/drunken sex still happens, just less frequently than it used to, because you donâ€™t have the time and you are over the drama.</p> <p><strong>21.</strong> If you are going to spend most of your life working, it helps to find something you love. Perhaps it wonâ€™t happen in your 20s, but getting passionate about something makes the world shine that little bit brighter.</p> <p><strong>22. </strong>Extended periods of travel are nearly always a good idea. Travel changes your world outlook, melts prejudices and leaves you with better pub chat, so go.</p> <p><strong>23. </strong>The days of eating fried, doughy carbs with wild abandon all winter and then strutting around half-naked come summer are, unfortunately, over.</p> <p><strong>24. </strong>Exercise â€¦ is â€¦ good â€¦ because it makes you look <em>and</em> feel â€¦ good? You should really keep it up.</p> <p><strong>25.</strong> Your parents are just two deeply flawed human beings who may or may not have led strange and interesting lives before they met and had you. They have issues and a whole heap of weird stuff going on in their heads, just like you. Love them anyway.</p> <p><a href="https://twitter.com/GeorginaLawton"><em>@GeorginaLawton</em></a></p>"`);

    var expectedText = `<p>It is my 25th birthday this weekend, which means I am officially allowed to use the phrase â€œquarterlife crisisâ€. I am infinitely less wise than I thought I would be by now, but, because I am halfway through my third decade and adulthood is slapping me in the face like a wet fish, Iâ€™m well placed to share 25 things I have learned.</p><p><strong>1. </strong>Your physical and mental health, and that of those closest to you, is all that really matters. Everything else is just background scenery, irrelevant decor that adorns your life.<br></p><p><strong>2. </strong>The UK isnâ€™t the worse place in the world to live. Even with the populist politics, the consistently terrible Saturday night TV and the national obsession with a pallid, tasteless, leafâ€‘based drink, it is alright, really.</p>`;

    assert.isTrue(articleModel.summary() === expectedText);
  })();

})();
