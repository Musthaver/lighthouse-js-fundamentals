
function lastIndexOf (array, value) {
  if (array.includes(value)) {
    for (let i = array.length -1; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
  } else {
    return -1;
  }
}

console.log(lastIndexOf(3, 1), "=?", 3);