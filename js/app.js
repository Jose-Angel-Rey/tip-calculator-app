"use strict";
// Botones
const tipButtons = document.querySelectorAll(".btn-tip");
const customTip = document.getElementById("custom-tip");

// Inputs
const inputPeople = document.getElementById("people");
const inputBill = document.getElementById("bill");

let tipValue = 1;
let billValue;
let peopleValue;

// Bill input
inputBill.addEventListener("input", () => {
    billValue = inputValidation(inputBill);
});

// People input
inputPeople.addEventListener("input", () => {
    peopleValue = inputValidation(inputPeople);
});

function inputValidation(input) {
    let inputWarning = input.previousElementSibling
    if (input.value <= 0) {
        inputWarning.classList.add("input__warning--active");
        input.style.borderColor = "#c91e1e;"
    } else if (input.value > 0 && inputWarning.classList.contains("input__warning--active")) inputWarning.classList.remove("input__warning--active");

    if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);

    return input.value;
}

// Totales
let totalAmount = document.querySelector(".total__amount-per-person");
let totalTip = document.querySelector(".tip-amount__amount-per-person");

// -----------------------------------------------------------------

// Capturar el valor de los botones para el porcentaje de la propina
tipButtons.forEach((tipButton) => {
    tipButton.addEventListener("click", () => {
        if (!tipButton.classList.contains("btn-tip--active")) {
            tipButtons.forEach((button) => {
                button.classList.remove("btn-tip--active");
            });
            tipButton.classList.add("btn-tip--active");
            tipValue = tipButton.getAttribute("data-value");
        } else {
            tipButton.classList.remove("btn-tip--active");
            tipValue = 1;
        }
    });
});

// Valor Custom
customTip.addEventListener("click", () => {
    // Remueve el enfasis de los otros botones
    tipButtons.forEach((tipButton) => {
        if (tipButton.classList.contains("btn-tip--active")) {
            tipButton.classList.remove("btn-tip--active");
            tipValue = 1;
        }
    });
});

// Obtener el valor custom
customTip.addEventListener("input", () => {
    tipValue = inputValidation(customTip)
});
// -----------------------------------------------------------------