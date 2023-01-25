import { lModule } from "./lModule";
import { bModule } from "./bModule";

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

let cleanButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "C",
  eventButt: calcLogic.logic,
});
cleanButton.createElement();

let backButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "back",
  eventButt: calcLogic.logic,
});
backButton.createElement();

let minusButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "-",
  eventButt: calcLogic.logic,
});
minusButton.createElement();

let plusButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "+",
  eventButt: calcLogic.logic,
});
plusButton.createElement();

let sevenButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "7",
  eventButt: calcLogic.logic,
});
sevenButton.createElement();

let eightButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "8",
  eventButt: calcLogic.logic,
});
eightButton.createElement();

let nineButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "9",
  eventButt: calcLogic.logic,
});
nineButton.createElement();

let multiplButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "*",
  eventButt: calcLogic.logic,
});
multiplButton.createElement();

let fourButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "4",
  eventButt: calcLogic.logic,
});
fourButton.createElement();

let fiveButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "5",
  eventButt: calcLogic.logic,
});
fiveButton.createElement();

let sixButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "6",
  eventButt: calcLogic.logic,
});
sixButton.createElement();

let divisButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "/",
  eventButt: calcLogic.logic,
});
divisButton.createElement();

let oneButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "1",
  eventButt: calcLogic.logic,
});
oneButton.createElement();

let twoButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "2",
  eventButt: calcLogic.logic,
});
twoButton.createElement();

let threeButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "3",
  eventButt: calcLogic.logic,
});
threeButton.createElement();

let pointButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: ".",
  eventButt: calcLogic.logic,
});
pointButton.createElement();

let rightSButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "(",
  eventButt: calcLogic.logic,
});
rightSButton.createElement();

let zeroButton = new bModule({
  tag: "div",
  class: "element",
  appendElement: ".calculator",
  textContent: "0",
  eventButt: calcLogic.logic,
});
zeroButton.createElement();

let leftSButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: ")",
  eventButt: calcLogic.logic,
});
leftSButton.createElement();

let ravnoButton = new bModule({
  tag: "div",
  class: "element",
  class2: "operatorButton",
  appendElement: ".calculator",
  textContent: "=",
  eventButt: calcLogic.logic,
});
ravnoButton.createElement();
