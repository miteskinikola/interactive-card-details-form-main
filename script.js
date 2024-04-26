const btn = document.querySelector(".confirm");
const input = document.querySelector("#card-name");
const paragraph = document.querySelector(".name");

input.addEventListener("change", () => {
  const inputValue = input.value;
  paragraph.textContent = inputValue;
});

const input2 = document.querySelector("#card-number");
const paragraph2 = document.querySelector(".card-number-span");

input2.addEventListener("change", () => {
  const input2Value = input2.value;
  paragraph2.textContent = input2Value;
});

const mounth = document.querySelector("#mounth");
const date1 = document.querySelector(".date-1");

mounth.addEventListener("change", () => {
  const mounthValue = mounth.value;
  date1.textContent = mounthValue;
});

const year = document.querySelector("#year");
const date2 = document.querySelector(".date-2");

year.addEventListener("change", () => {
  const yearValue = year.value;
  date2.textContent = yearValue;
});

const cvc = document.querySelector("#cvc");
const cvccard = document.querySelector(".cvc");

cvc.addEventListener("change", () => {
  const cvcValue = cvc.value;
  cvccard.textContent = cvcValue;
});

const iconComplete = document.querySelector(".icon-complete");
const inputContainer = document.querySelector(".input-container");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  iconComplete.classList.toggle("hide");
  inputContainer.classList.toggle("hide");
});
