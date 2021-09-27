const getGreeting = require('./project');
const getColor = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('testing if color is blue', () => {
  expect(getColor('Blue')).toBe("The color is Blue");
});
