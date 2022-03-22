const { sum } = require("./calculator");

it("A soma entre 2+2 deve ser 4 ", () => {
  expect(sum(2, 2)).toBe(4);
});
