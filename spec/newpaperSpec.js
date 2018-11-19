var newspaper = new Newspaper

it("has some headlines").expect(newspaper.newslist.length).toNotEqual(0)
it("returns some headlines").expect(newspaper.view_headlines).toEqual()
it("shows summary").expect(newspaper.view_summary).toEqual()
it("shows details").expect(newspaper.view_details).toEqual()
