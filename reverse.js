let num = 123;
let rev = 0;
let org;
org = num;
console.log(org);
function reverseNo() {
  rev = num.toString().split("").reverse().join("");
  console.log(rev);
}
reverseNo();
