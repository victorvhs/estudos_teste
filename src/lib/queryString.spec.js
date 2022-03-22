const { queryString } = require("./queryString");
describe("Objeto para query string", () => {
  it("Deverá criar uma query string valida quando um objeto for passado", () => {
    const obj = {
      nome: "Eu",
      profissão: "Desenvolvedor",
    };

    expect(queryString(obj)).toBe("nome=Eu&profissão=Desenvolvedor");
  });
});
