const fraseField = document.querySelector(".app__frase");
const question = document.querySelector(".app__header");
const fraseButton = document.querySelector(".frase__generator_button");
const inputForm = document.querySelector(".name__input-container");
const input = document.querySelector(".name__input_field");
const nameButton = document.querySelector(".name__input_button");
const app = document.querySelector(".app__contaiter");

let name = "";

const fraseGenerate = () => {
  frase = doebFrases[Math.floor(Math.random() * doebFrases.length)];
  fraseField.textContent = frase.toLowerCase();
};

const nameInput = (evt) => {
  evt.preventDefault();

  name = input.value;
  console.log(name);
  changeName();
  inputForm.classList.remove("input");
  app.classList.add("app");
  question.classList.remove("hide");
  fraseGenerate();
};

function changeName() {
  question.textContent = `Блядь, ${name}, какого хуя`;
}
function validate() {
  const errorMessage = document.querySelector(".error");
  if (input.validity.patternMismatch) {
    nameButton.addAttribute("disabled");

    errorMessage.classList.remove("hide");
    errorMessage.textContent = "Введите имя на русском";
  } else if (input.validity.valueMissing) {
    nameButton.addAttribute("disabled");

    errorMessage.classList.remove("hide");
    errorMessage.textContent = "Введите имя";
  } else {
    nameButton.removeAttribute("disabled");
  }
}

input.addEventListener("input", validate);
fraseButton.addEventListener("click", fraseGenerate);
inputForm.addEventListener("submit", nameInput);
