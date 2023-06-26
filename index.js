const buttoncomenzarJuego = document.getElementById("buttoncomenzarJuego");
buttoncomenzarJuego.addEventListener("click", () => {
  buttoncomenzarJuego.innerHTML = "El juego comenzo 👀🤔 ";
  buttoncomenzarJuego.disabled = true;

  num = aleatoreoNum(1, 100);
  console.log(num);
});
function aleatoreoNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// let num = Math.floor(Math.random() * 101);

let buttonEnviar = document.getElementById("buttonEnviar");

let input = document.querySelector("input");

// function adivinaNumero() {
//   if (input == num) {
//     alert("ADIVINASTE!");
//   }
//   if (input > num) {
//     alert(" El numero es menor");
//   } else input < num;
//   alert("El numero es mayor");
// }
