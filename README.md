# News Feed Application

This is a simple web application that displays news articles from The Guardian API and summarizes them using the SMMRY API. It follows the Model-View-Client architecture and uses vanilla JavaScript, CSS, and HTML.

## Features

1. Fetch and display news articles from The Guardian API.
2. Show a detailed view of a news article when clicked, including a summary fetched from the SMMRY API.
3. Search for news articles based on a keyword.

## API Keys

This application uses The Guardian API and SMMRY API to fetch news articles and summaries. You will need to provide your own API keys for these services:

1. **The Guardian API**:

Visit [The Guardian's API documentation](https://open-platform.theguardian.com/access/) to get your key. Once obtained, create a `apiKey.js` file in the `src/clients` directory of this project, and export your API key as a string like this:

```javascript
module.exports = "your-api-key";
```

2. **The SMMRY API**:

Visit [SMMRY's API documentation](http://smmry.com/api) to get your key. Once obtained, create a `summaryKey.js` file in the `src/clients` directory of this project, and export your API key as a string like this:

```javascript
module.exports = "your-api-key";
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Shakhrai8/news-summary-challenge.git
```

2. Install the dependencies:

```bash
npm install
```

3. Run the application in your browser by opening the index.html file.

## Testing

To run the tests, use the following command:

```bash
jest
```

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
