/**
 * @jest-environment jsdom
 */

const newsView = require("../src/views/newsView.js");
const fs = require("fs");

describe("newsView", () => {
  it("shows the news", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    // mock the client class
    const mockClient = {
      fetchNews: jest.fn(),
    };
    // mock the model class
    const mockModel = {
      setNews: jest.fn(),
      getNews: jest.fn(),
    };

    const view = new newsView(mockModel, mockClient);
    //mock the data from api
    const mockNews = [
      {
        id: "world/live/2023/jun/23/russia-ukraine-war-live",
        type: "liveblog",
        sectionId: "world",
        sectionName: "World news",
        webPublicationDate: "2023-06-24T21:22:42Z",
        fields: {
          headline: "Russia Ukraine war live",
          thumbnail: "https://example.com/thumbnail1.jpg",
        },
      },
    ];
    // mock the fetch method from client class
    mockClient.fetchNews.mockImplementationOnce((callback) => {
      callback(mockNews);
    });
    // mock the get method from model class
    mockModel.getNews.mockImplementationOnce(() => {
      return mockNews;
    });

    view.displayNewsFromApi();

    expect(mockClient.fetchNews).toHaveBeenCalledWith(expect.any(Function));
    expect(mockModel.setNews).toHaveBeenCalledWith(mockNews);
    // find all article containers
    const newsContainers = document.querySelectorAll(".article");

    newsContainers.forEach((articleContainer) => {
      expect(document.querySelector("img").src).toEqual(
        mockNews[0].fields.thumbnail
      );
      expect(document.querySelector("h2").innerText).toEqual(
        mockNews[0].fields.headline
      );
    });
  });

  it("displays the modal", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    // mock the client class
    const mockClient = {
      fetchSummary: jest.fn(),
    };
    // mock the model class
    const mockModel = {};

    const view = new newsView(mockModel, mockClient);
    const mockArticle = {
      fields: {
        thumbnail: "https://example.com/thumbnail.jpg",
        headline: "Test Article",
      },
      webUrl: "https://example.com/article",
    };
    const mockSummary = "Mock summary";
    // mock the fetchSummary method from client class
    mockClient.fetchSummary.mockImplementationOnce((url, callback) => {
      callback(mockSummary);
    });

    view.displayModal(mockArticle);

    // Assert that modal elements are correctly updated
    expect(view.modalImage.src).toEqual(mockArticle.fields.thumbnail);
    expect(view.modalTitle.innerText).toEqual(mockArticle.fields.headline);
    expect(view.modalSummary.innerText).toEqual(mockSummary);
    expect(view.modalLink.href).toEqual(mockArticle.webUrl);
  });

  it("handles search", () => {
    // Create a mock client instance
    const mockClient = {
      searchNews: jest.fn(),
    };

    // Create a mock model instance
    const mockModel = {
      getNews: jest.fn(),
      setNews: jest.fn(),
    };

    // Create a new newsView instance with the mock model and client
    const view = new newsView(mockModel, mockClient);

    // Set up mock data
    const searchQuery = "politics";
    const mockSearchResults = [
      {
        id: "article1",
        fields: {
          headline: "Politics article 1",
          thumbnail: "https://example.com/thumbnail1.jpg",
        },
        webUrl: "https://example.com/article1",
      },
      {
        id: "article2",
        fields: {
          headline: "Politics article 2",
          thumbnail: "https://example.com/thumbnail2.jpg",
        },
        webUrl: "https://example.com/article2",
      },
    ];

    // Mock the getNews method of the model to return an empty array
    mockModel.getNews.mockImplementationOnce(() => []);

    // Mock the searchNews method of the client to return the mock search results
    mockClient.searchNews.mockImplementationOnce((query, callback) => {
      callback(mockSearchResults);
    });

    // Mock the displayNews method
    const displayNewsMock = jest.spyOn(view, "displayNews");

    // Set the value of the search input
    view.searchInput.value = searchQuery;

    // Call the handleSearch method
    view.handleSearch();

    // Assert that the searchNews method was called with the correct arguments
    expect(mockClient.searchNews).toHaveBeenCalledWith(
      searchQuery,
      expect.any(Function)
    );

    // Assert that the setNews method of the model was called with the search results
    expect(mockModel.setNews).toHaveBeenCalledWith(mockSearchResults);

    // Assert that the displayNews method was called after the search
    expect(displayNewsMock).toHaveBeenCalled();

    // Restore the original implementation of displayNews
    displayNewsMock.mockRestore();
  });
});
