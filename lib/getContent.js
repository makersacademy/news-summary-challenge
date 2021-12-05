const getContent = (search, callback, api) => {
  if (search === "") return null;
  fetch(
    `https://content.guardianapis.com/search?from-date=2021-12-05&q=${search}&api-key=${api}`
  )
    .then((response) => response.json())
    .then((data) => callback(data));
};

module.exports = getContent;
