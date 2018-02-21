function solveEquation(equation) {
  // your implementation
  let a, b, c, x1, x2, strB, strC;
  let arrEquation= [];
  let arr = [];
  let arrSolutions = [];
  let equationModified;
  equationModified = equation.substring(0, equation.length);
  arr = equationModified.split(' ');
  a = + arr[0];

  strB = arr[3]+arr[4];
  b = + strB;

  strC = arr[7]+arr[8];
  c = + strC;

  x1 = Math.round((-b + Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a));
  x2 = Math.round((-b - Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a));

  arrSolutions.push(x1);
  arrSolutions.push(x2);
  arrSolutions.sort((a,b) => (a - b));
  return arrSolutions;
};



module.exports = solveEquation;
