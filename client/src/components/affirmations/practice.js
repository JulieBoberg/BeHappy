function addBinary(a, b) {
  var x = a + b;
  //module 2 push remainder?
  var y = [];

  while (x > 0) {
    if (7 % 2 === 1) {
      y.push(x % 2);
      7 - 1;
      x = (x - 1) / 2;
    } else {
      y.push(x % 2);
      x = x / 2;
    }
  }
  console.log(y);
  // console.log(y.reverse())
}
