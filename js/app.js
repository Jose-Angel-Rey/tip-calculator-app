"use strict";
// Botones
const tipButtons = document.querySelectorAll(".btn-tip");
const customTip = document.getElementById("custom-tip");
const resetButton = document.querySelector(".btn-reset")

// Inputs
const inputPeople = document.getElementById("people");
const inputBill = document.getElementById("bill");

let tipValue = .001;
let billValue = 0;
let peopleValue = 1;

// Totales
let totalPerPerson = document.querySelector(".total__amount-per-person");
let tipPerPerson = document.querySelector(".tip-amount__amount-per-person");

// Bill input
inputBill.addEventListener("input", () => {
    billValue = inputValidation(inputBill);
    total();
    if (!billValue == 0) {
        resetButton.disabled = false;
        resetButton.addEventListener("click", resetValues)
    }
});

function resetValues() {
    tipButtons.forEach((button) => {
        if (button.classList.contains("btn-tip--active")) button.classList.remove("btn-tip--active")
    })
    customTip.value = "";
    inputBill.value = "";
    inputPeople.value = "";
    tipPerPerson.textContent = `$0.00`;
    totalPerPerson.textContent = `$0.00`;
    resetButton.disabled = true;

}

// People input
inputPeople.addEventListener("input", () => {
    peopleValue = inputValidation(inputPeople);
    total();
});

function inputValidation(input) {
    let inputWarning = input.previousElementSibling;
    if (input.value <= 0) {
        inputWarning.classList.add("input__warning--active");
        input.style.borderColor = "#c91e1e;";
    } else if (
        input.value > 0 &&
        inputWarning.classList.contains("input__warning--active")
    )
        inputWarning.classList.remove("input__warning--active");

    if (input.value.length > input.maxLength)
        input.value = input.value.slice(0, input.maxLength);

    return Number(input.value);
}

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
            if (
                customTip.previousElementSibling.classList.contains(
                    "input__warning--active"
                )
            )
                inputWarning.classList.remove("input__warning--active");
        } else {
            tipButton.classList.remove("btn-tip--active");
            tipValue = 1;
        }
        total();
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
    tipValue = inputValidation(customTip);
    total();
});
// -----------------------------------------------------------------


function total() {
    const tipAmount = ((billValue * tipValue) / 100 / peopleValue).toFixed(2);
    const totalAmount = ((billValue / peopleValue) + Number(tipAmount)).toFixed(2);

    tipPerPerson.textContent = `$${tipAmount}`;
    totalPerPerson.textContent = `$${totalAmount}`;

}
