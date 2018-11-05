test('this should', () => {
  expect(1).toEqual(1);
});

test('should upupdate snapshot', () => {
  expect('wowss').toMatchSnapshot();
});
