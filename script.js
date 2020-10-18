const fraseField = document.querySelector(".app__frase");
const question = document.querySelector(".app__header");
const button = document.querySelector(".frase__generator");
// console.log(frase);
const fraseGenerate = () => {
  question.classList.remove("hide");
  frase = doebFrases[Math.floor(Math.random() * doebFrases.length)];
  fraseField.textContent = frase.toLowerCase();
};

button.addEventListener("click", fraseGenerate);
