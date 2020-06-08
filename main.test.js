const numberOfFiles = require('./main');

test('Should be 0 files!', () => {
  expect(numberOfFiles()).toBe(0);
});