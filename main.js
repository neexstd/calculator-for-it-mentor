let input = document.getElementsByClassName("number-input");

let firstNumber;
let secondNumber;
let action;
let finalResult;
let exactButton;
let actionButtons = Array.from(document.getElementsByClassName("actions"));

document.body.addEventListener("keydown", (e) => {
  if (!isNaN(e.key)) {
    input[0].value += e.key;
  }
  if (e.key == "Backspace") {
    input[0].value = input[0].value.slice(0, -1);
  }
  switch (e.key) {
    case "/":
      noteAction(e.key);
      break;
    case "*":
      noteAction(e.key);
      console.log(action);
      break;
    case "+":
      noteAction(e.key);
      break;
    case "-":
      noteAction(e.key);
      break;
    case ",":
      display(".");
      break;
    case "Enter":
      calculate();
      break;
    case "c":
      pageReload();
      break;
  }
});

const display = function (number) {
  input[0].value += number;
};

const pageReload = function () {
  location.reload();
};

const clearInput = function () {
  input[0].value = "";
};

const calculate = function () {
  secondNumber = input[0].value;
  finalResult = eval(firstNumber + action + secondNumber);
  input[0].value = finalResult;
  exactButton[0].classList.remove("active");
  actionButtons.map((e) => e.toggleAttribute("disabled"));
};

const noteAction = function (actionPassed) {
  action = actionPassed;
  firstNumber = input[0].value;
  exactButton = document.getElementsByClassName(action);
  exactButton[0].classList.add("active");
  actionButtons.map((e) => e.toggleAttribute("disabled"));
  clearInput();
};
