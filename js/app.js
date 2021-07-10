const billInitial = document.getElementById("bill");
const tipPercentage = document.getElementById("tip");
const people = document.getElementById("people");

let totalAmount = document.querySelector(".total__amount-per-person");
let totalTip = document.querySelector(".tip-amount__amount-per-person");

// console.log(totalTip)

let person = 100;
amountPerPerson(100, 50);
console.log((total = `$ ${person.toFixed(5)}`));

// console.log(tipPercentage);
console.log(people);

// if (billInitial.valu) {
// }

billInitial.addEventListener("input", () => {
  console.log(billInitial.value);
});

function amountPerPerson(tip, amount) {
  totalTip.textContent = `$${tip.toFixed(2)}`;
  totalAmount.textContent = `$${amount.toFixed(2)}`;
}
