const retrieve = require("./api");

const mockPayload = [
  {
    webUrl: "1",
    webTitle: "1"
  },
  {
    webUrl: "2",
    webTitle: "3"
  },
  {
    webUrl: "3",
    webTitle: "3"
  },
]

const mockPayloadFail = [
  {
    webUrl: "3",
    webTitle: "3"
  },
  {
    webUrl: "5",
    webTitle: "6"
  },
  {
    webUrl: "8",
    webTitle: "8"
  },
]

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ response: { results: mockPayload }}),
  })
);

it('Will mock the results of connecting to an API', async () => {

    const payload = await retrieve()

    expect(mockPayload).toEqual(payload)
})

it('Will mock the results of connecting to an API', async () => {
  
  
  expect(mockPayload).not.toBe(mockPayloadFail)
})