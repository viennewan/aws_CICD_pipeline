const sum = require('./main');

test('adding 1 + 2 equals to 3', () => {
  expect(sum(1, 2)).toBe(3);
});