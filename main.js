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
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand + number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.prevOperand !== "") {
      this.evaluate();
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = "";
  }

  evaluate() {
    let evaluated;
    const prev = +this.prevOperand;
    const current = +this.currentOperand;
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        evaluated = prev + current;
        break;
      case "-":
        evaluated = prev - current;
        break;
      case "*":
        evaluated = prev * current;
        break;
      case "÷":
        evaluated = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = evaluated;
    this.operation = undefined;
    this.prevOperand = "";
  }

  updateScreen() {
    this.currentOperandText.innerText = this.currentOperand;
    if (this.operation) {
      this.prevOperandText.innerText = `${this.prevOperand} ${this.operation}`
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
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

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateScreen();
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateScreen();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.evaluate();
  calculator.updateScreen();
});
