const buttoncomenzarJuego = document.getElementById("buttoncomenzarJuego");

buttoncomenzarJuego.addEventListener("click", () => {
  num = aleatoreoNum(1, 101);
  console.log(num);
  buttoncomenzarJuego.innerHTML = "El juego comenzo 👀🤔 ";
  buttoncomenzarJuego.disabled = true;
  const formJuego = document.getElementById("formuJuego");
  formJuego.reset();
});
let num;

function aleatoreoNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function consultarNumero(e) {
  e.preventDefault();
  let input = document.querySelector("input").value;
  if (input == num) {
    alert("ADIVINASTE");
    buttoncomenzarJuego.innerHTML = "Vuelve a jugar";
    buttoncomenzarJuego.disabled = false;
  } else if (input > num) {
    alert("Vuelve a intentarlo, el numero magico es menor al ingresado");
  } else {
    alert("Vuelve a intentarlo, el numero magico es mayor al ingresado");
  }
}
