class Calculator {
  constructor(prevOperandText, currentOperandText) {
    this.prevOperandText = prevOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  clear() {
    this.prevOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {

  }

  evaluate() {
    
  }

  updateScreen() {
    this.currentOperandText.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const prevOperationText = document.querySelector("[data-prev-operation]");
const currentOperationText = document.querySelector("[data-current-operation]");

const calculator = new Calculator(prevOperationText, currentOperationText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateScreen();
  });
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateScreen();
});
