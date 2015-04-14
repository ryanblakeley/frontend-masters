// Write a function that adds from two invocations.
// addf(3)(4) // 7
function addf(x) {
  return function(y) {
    return x + y;
  };
}

// Write a function that takes a binary function, and makes it callable with two invocations.
// addf = applyf(add);
// addf(3)(4) // 7
// applyf(mul)(5)(6) // 30
function applyf(binary) {
  return function(x) {
    return function(y) {
      return binary(x, y);
    };
  };
}