let data = [1, 3, 6, 8, 9, 4, 55, 66, 88, 22, 44];

function secondLargestNo(data) {
  data.sort((a, b) => a - b);
  return data[data.length - 2];
}
console.log(secondLargestNo(data));
