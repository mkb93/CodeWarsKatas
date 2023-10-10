const overTheRoad = require('./overTheRoad')

test('finds the number accross the road', () => {
  expect(overTheRoad(1,3)).toBe(6);
})
test('finds the number accross the road', () => {
  expect(overTheRoad(3,3)).toBe(4);
})
test('finds the number accross the road', () => {
  expect(overTheRoad(3,5)).toBe(8);
})
test('finds the number accross the road', () => {
  expect(overTheRoad(2,3)).toBe(5);
})
test('finds the number accross the road', () => {
  expect(overTheRoad(23633656673,310027696726)).toBe(596421736780);
})