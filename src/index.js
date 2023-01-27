import { lModule } from "./lModule";
import { bModule } from "./bModule";

/*массивом и в разные функции операции */

let calcLogic = new lModule();

let calculator2 = new bModule({
  tag: "div",
  class: "input",
  appendElement: "calculator",
});
calculator2.craeteCalc();

let calculator3 = new bModule({
  tag: "div",
  class: "input",
  appendElement: ".calculator",
});
calculator3.createElement();

let calcInput = new bModule({
  tag: "input",
  class: "textinput",
  appendElement: ".input",
  type: "text",
});
calcInput.createElement();

const arrOperator = ["C", "back", "+", "-", "*", "/", "=", ".", ")", "("].map(
  (button) => {
    return new bModule({
      tag: "div",
      class: "element",
      class2: "operatorButton",
      appendElement: ".calculator",
      textContent: button,
      eventButt: calcLogic.logic,
    }).createElement();
  }
);

const arrNumber = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map(
  (element) => {
    return new bModule({
      tag: "div",
      class: "element",
      appendElement: ".calculator",
      textContent: element,
      eventButt: calcLogic.logic,
    }).createElement();
  }
);
