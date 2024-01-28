let data = [1, 3, 6, 8, 9, 4, 55, 66, 88, 22, 44];

function secondLargestNo(data) {
  data.sort((a, b) => a - b);
  let first = data[0];
  let last = data[data.length - 1];
  return [first, last];
}
console.log(secondLargestNo(data));
