function find(array, criteriaFn) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFn(array[i])) {
      return i;
    }
  }
}

console.log(find( [1,3,[4, "b"],8], someNumber => someNumber % 2 === 0));
