const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('testing if color is blue', () => {
  expect(getGreeting('Blue')).toBe("The color is Blue");
});
