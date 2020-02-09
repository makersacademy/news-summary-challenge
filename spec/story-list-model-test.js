(function testArrayReturnsStorys() {
    var list = new List();
    list.newStory("Favourite food: pesto")
    list.newStory("Favourite drink: seltzer")

    assert.isTrue(list.array[0].text === 'Favourite food: pesto');
    assert.isTrue(list.array[1].text === 'Favourite drink: seltzer');
})();

(function testAddsStoryId() {
    var list = new List();
    list.newStory("Favourite drink: seltzer")
    assert.isTrue(list.array[0].id === 0);
})();
