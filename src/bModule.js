import { lModule } from "./lModule";

class bModule {
  createElements() {
    let logic = new lModule();

    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    const input = document.createElement("div");
    input.classList.add("input");

    const textInput = document.createElement("input");
    textInput.readOnly = true;
    textInput.type = "text";
    textInput.classList.add("textinput");

    const cleanButton = document.createElement("div");
    cleanButton.classList.add("element");
    cleanButton.classList.add("operatorButton");
    cleanButton.addEventListener("click", logic.clean);
    cleanButton.textContent = "C";

    const backButton = document.createElement("div");
    backButton.classList.add("element");
    backButton.classList.add("operatorButton");
    backButton.addEventListener("click", logic.back);
    backButton.textContent = "back";

    const minusButton = document.createElement("div");
    minusButton.classList.add("element");
    minusButton.classList.add("operatorButton");
    minusButton.classList.add("minusButton");
    minusButton.textContent = "-";
    minusButton.addEventListener("click", logic.addValueMinus);

    const plusButton = document.createElement("div");
    plusButton.classList.add("element");
    plusButton.classList.add("operatorButton");
    plusButton.textContent = "+";

    const multButton = document.createElement("div");
    multButton.classList.add("element");
    multButton.classList.add("operatorButton");
    multButton.classList.add("mult");
    multButton.textContent = "*";

    const delenButton = document.createElement("div");
    delenButton.classList.add("element");
    delenButton.classList.add("operatorButton");
    delenButton.textContent = "/";

    const sevenButton = document.createElement("div");
    sevenButton.classList.add("element");
    sevenButton.textContent = "7";

    const eightButton = document.createElement("div");
    eightButton.classList.add("element");
    eightButton.textContent = "8";

    const nineButton = document.createElement("div");
    nineButton.classList.add("element");
    nineButton.textContent = "9";

    const rightSButton = document.createElement("div");
    rightSButton.classList.add("element");
    rightSButton.classList.add("operatorButton");
    rightSButton.textContent = "(";

    const fourButton = document.createElement("div");
    fourButton.classList.add("element");
    fourButton.textContent = "4";

    const fiveButton = document.createElement("div");
    fiveButton.classList.add("element");
    fiveButton.textContent = "5";

    const sixButton = document.createElement("div");
    sixButton.classList.add("element");
    sixButton.textContent = "6";

    const leftSButton = document.createElement("div");
    leftSButton.classList.add("element");
    leftSButton.classList.add("operatorButton");
    leftSButton.textContent = ")";

    const oneButton = document.createElement("div");
    oneButton.classList.add("element");
    oneButton.textContent = "1";

    const twoButton = document.createElement("div");
    twoButton.classList.add("element");
    twoButton.textContent = "2";

    const threeButton = document.createElement("div");
    threeButton.classList.add("element");
    threeButton.textContent = "3";

    const ravnoButton = document.createElement("div");
    ravnoButton.classList.add("element");
    ravnoButton.classList.add("ravno");
    ravnoButton.classList.add("operatorButton");
    ravnoButton.textContent = "=";

    const zeroButton = document.createElement("div");
    zeroButton.classList.add("element");
    zeroButton.classList.add("zero");
    zeroButton.textContent = "0";

    const pointButton = document.createElement("div");
    pointButton.classList.add("element");
    pointButton.classList.add("operatorButton");
    pointButton.textContent = ".";

    document.body.appendChild(calculator);
    calculator.appendChild(input);
    input.appendChild(textInput);
    calculator.appendChild(cleanButton);
    calculator.appendChild(backButton);
    calculator.appendChild(minusButton);
    calculator.appendChild(plusButton);
    calculator.appendChild(sevenButton);
    calculator.appendChild(eightButton);
    calculator.appendChild(nineButton);
    calculator.appendChild(multButton);
    calculator.appendChild(fourButton);
    calculator.appendChild(fiveButton);
    calculator.appendChild(sixButton);
    calculator.appendChild(delenButton);
    calculator.appendChild(oneButton);
    calculator.appendChild(twoButton);
    calculator.appendChild(threeButton);
    calculator.appendChild(pointButton);
    calculator.appendChild(rightSButton);
    calculator.appendChild(zeroButton);
    calculator.appendChild(leftSButton);
    calculator.appendChild(ravnoButton);
  }
}

export { bModule };
