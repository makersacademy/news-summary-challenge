var titleList = new TitleList();

titleList.addTitle("string1");
titleList.addTitle("string2");

function addTitle() {
    assert.isTrue(titleList.titles[0].returnText() === "string1")
    assert.isTrue(titleList.titles[1].returnText() === "string2")
};

function testReturnTitles() {
    titles = titleList.returnTitles();
    assert.isTrue(titles[0].returnText() === "string1")
    assert.isTrue(titles[1].returnText() === "string2")
};

addTitle();
testReturnTitles();