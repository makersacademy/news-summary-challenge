/* eslint-disable */
function test(title, callback) {
  try {
    callback();
    console.log(`Test on ${title}`);
  } catch (error) {
    console.error(`Error on ${title}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        console.error('Failed Test!');
      }
    },
    toInclude(text) {
      const body = document.querySelector('body').innerText;
      if (body.includes(text)) {
        console.log('Passed!');
      }
    },
  };
}

function click(element, text) {
  element.click();
  test(`Clicking on ${element}`, () => {
    const body = document.querySelector('body').innerText;
    expect(body).toInclude(text);
  });
}
