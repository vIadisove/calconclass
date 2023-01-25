class bModule {
  constructor(options) {
    this.tag = options.tag;
    this.class = options.class;
    this.class2 = options.class2;
    this.appendElement = options.appendElement;
    this.type = options.type;
    this.textContent = options.textContent;
    this.eventButt = options.eventButt;
  }
  craeteCalc() {
    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    document.body.appendChild(calculator);
  }
  createElement() {
    const calculatorElement = document.createElement(this.tag);
    calculatorElement.classList.add(this.class);
    calculatorElement.classList.add(this.class2);
    calculatorElement.type = this.type;
    calculatorElement.textContent = this.textContent;
    calculatorElement.addEventListener("click", this.eventButt);

    document.querySelector(this.appendElement).appendChild(calculatorElement);
  }
}

export { bModule };
