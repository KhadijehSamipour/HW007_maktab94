function counterMaker() {
  let count = 0;
  return function (num) {
    if (num === undefined) {
      num = 0;
    }
    return (count += num);
  };
}

let counter = counterMaker();
console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());
console.log(counter(3));
console.log(counter(7));
console.log(counter(-5));
