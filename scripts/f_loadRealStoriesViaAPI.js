(function(exports) {

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor ullamcorper sapien. Donec magna turpis, vestibulum ut tellus vel, cursus venenatis lacus. Sed efficitur, neque eu feugiat lobortis, felis odio sodales ipsum, ut suscipit justo ipsum non felis. Nunc tempor enim id lacus sodales consectetur vel et magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque hendrerit lacus ante, ac dignissim ipsum sagittis nec. Donec a nulla malesuada, vestibulum tellus a, tempor sem. Vivamus pharetra, erat feugiat porttitor vulputate, lorem dolor pulvinar turpis, a dapibus ligula massa in nibh. Phasellus sed ligula non eros porttitor facilisis. Etiam faucibus porttitor sem eu congue. Suspendisse vulputate ornare nunc tristique tristique.\n Quisque lacinia dolor sodales turpis euismod, ac pretium nisl facilisis. Nullam sed imperdiet massa. Aliquam sed eros gravida, pulvinar velit in, pellentesque diam. Aenean a scelerisque ante, ac congue libero. Integer cursus fermentum leo, et ullamcorper ante pharetra eget. Praesent ut metus sodales justo consectetur maximus. Etiam nec augue eget velit tempus porttitor. Sed sit amet quam vestibulum, mollis sem id, fringilla nisi. Nulla facilisi. Nam tempor mi dui, quis mattis odio venenatis vel. In ut augue non mauris finibus molestie. Quisque sollicitudin nulla in volutpat consequat. Fusce quis nulla maximus, commodo risus varius, volutpat dui. Morbi laoreet risus non iaculis pharetra.\n Maecenas ut enim est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer imperdiet cursus velit, eu eleifend lacus volutpat eu. Nullam ut venenatis neque. Morbi sit amet orci lacus. Nullam tristique, velit id fermentum venenatis, magna turpis tincidunt metus, eget vulputate sem felis sit amet ante. Proin posuere ante ut tincidunt malesuada. Duis aliquam lacinia aliquam. Mauris tincidunt ante vel elit bibendum malesuada. Pellentesque neque nulla, pretium ut ornare at, cursus sed nibh. Cras gravida odio ut tempus varius. Aliquam semper gravida euismod. Aliquam dignissim nibh enim, sed porta quam ornare eget. Vestibulum euismod lobortis magna, et sollicitudin augue semper vitae. Aliquam mattis leo vitae euismod semper. Sed non lobortis magna.\n Vestibulum tempor nulla eros, in sagittis est posuere ut. Mauris eu eros scelerisque, laoreet tortor vel, lobortis ante. Aenean lectus erat, ornare sed dolor viverra, gravida tristique sapien. Sed sed placerat risus. Quisque eu ligula et tortor elementum sagittis. Fusce dolor ante, rhoncus ut dui at, sagittis congue augue. Vivamus nec nisl vitae nunc vehicula gravida sed et lorem. Curabitur enim felis, volutpat sit amet rutrum in, auctor vitae augue. Pellentesque in nulla at neque imperdiet placerat. In hac habitasse platea dictumst. Sed aliquet libero massa. Proin id sodales turpis, ut euismod nunc. Integer vulputate risus sit amet dapibus euismod. Suspendisse viverra sapien nec tellus maximus, quis ullamcorper lorem sodales. Donec fermentum lacus mollis tortor congue maximus. Donec nisi felis, tincidunt sed iaculis id, consectetur in nunc.\n Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ut orci nulla. Curabitur sit amet volutpat turpis. Pellentesque sit amet dictum risus. Aliquam erat volutpat. Nam maximus hendrerit nulla. Vivamus ut lacinia enim, sed sagittis ante. Morbi commodo eros non elit convallis, non vulputate metus luctus. Curabitur et venenatis ante, vitae porttitor nunc. Duis aliquet accumsan gravida.'

var storyList = new StoryList;

var story1 = new Story('Example Guardian Headline', 'Today Trump announced that he was stupid.', loremIpsum, 'images/trump.jpg')
var story2 = new Story('A Nother Guardian Headline', 'Today Sanders announced that he was stupid.', loremIpsum, 'images/sanders.jpg')
var story3 = new Story('One More Guardian Headline', 'Today John Mears announced that he was having lunch.', loremIpsum, 'images/jmears.jpg')
var story4 = new Story('This Old Guardian Headline', 'Putin agrees to have democracy', loremIpsum, 'images/putin.jpg')
var story5 = new Story('Compelling Guardian Headline', 'Obama today announced that he was running for President of the USA', loremIpsum, 'images/obama.jpg')
var story6 = new Story('Clickbait Guardian Headline', 'Brexit cancelled!', loremIpsum, 'images/british.jpg')

function addStories() {
    storyList.addStory(story1);
    storyList.addStory(story2);
    storyList.addStory(story3);
    storyList.addStory(story4);
    storyList.addStory(story5);
    storyList.addStory(story6);
    exports.storyList = storyList
  };

  exports.addStories = addStories

})(this)
