module.exports.sum = (n1, n2) => {
  const a = parseInt(n1, 10);
  const b = parseInt(n2, 10);

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Números inválidos");
  }
  return a + b;
};
