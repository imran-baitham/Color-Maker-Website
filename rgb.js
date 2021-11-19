
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
  // console.log(randomNumber);
// rgb(234,554,433)
const r= getRandomR();
const g= getRandomG();
const b= getRandomB();

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  color.textContent = `rgb(${r},${g},${b})`;
});

function getRandomR() {
  return Math.floor(Math.random() * 255);
}
function getRandomG() {
    return Math.floor(Math.random() * 255);
  }
  function getRandomB() {
    return Math.floor(Math.random() * 255);
  }