headlines = document.getElementsByClassName("headline")

describe("default view", function(){
    it("shows a list of news article headlines", function(){
        expect(headlines[0]).toEqual("UK minister hints Covid rules on foreign travel could extend to summer");
    })
})