let min = 1;
let max = 100;

const buttonId1 = document.getElementById("buttonId1");
buttonId1.addEventListener("click", () => {
  aleatoreoNum();
});
function aleatoreoNum() {
  let num = Math.floor(Math.random() * 101);
  console.log(num);
}
aleatoreoNum();

const buttonId2 = document.getElementById("buttonId2");
const input = document.getElementById("input");

// function aleatoreoNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(aleatoreoNum(1, 100));
// aleatoreoNum();
