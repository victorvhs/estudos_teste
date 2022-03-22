const { sum } = require("./calculator");

it("A soma entre 2+2 deve ser 4 ", () => {
  expect(sum(2, 2)).toBe(4);
});

it("A soma entre 2+2 deve ser 4 mesmo se for uma string ", () => {
  expect(sum("2", "2")).toBe(4);
});

it("Se a soma não puder acontecer deve retornar um erro", () => {
  // Se o teste for relacionando ao mesmo caso eles podem ficar dentro do mesmo bloco
  //Isso deixa a implementação mais coerente.
	
  expect(() => {
    sum("", "2");
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
