const fraseField = document.querySelector(".app__frase");
const question = document.querySelector(".app__header");
const fraseButton = document.querySelector(".frase__generator_button");
const inputForm = document.querySelector(".name__input-container");
const input = document.querySelector(".name__input_field");
// const question = document.querySelector(".app__header");
const nameButton = document.querySelector(".name__input_button");
const app = document.querySelector(".app");

let name = "";
// console.log(frase);
const fraseGenerate = () => {
  frase = doebFrases[Math.floor(Math.random() * doebFrases.length)];
  fraseField.textContent = frase.toLowerCase();
};

const nameInput = (evt) => {
  evt.preventDefault();
  name = input.value;
  console.log(name);
  changeName();
  inputForm.classList.add("hide");
  app.classList.remove("hide");
  question.classList.remove("hide");
  fraseGenerate();
};

function changeName() {
  question.textContent = `Блядь, ${name}, какого хуя`;
}

fraseButton.addEventListener("click", fraseGenerate);
inputForm.addEventListener("submit", nameInput);
