class lModule {
  /*constructor(number) {
    this.number = number;
  }*/

  logic(ev) {
    switch (ev.target.outerText) {
      case "C":
        document.querySelector(".textinput").value = "";
        break;
      case "back":
        let str = document.querySelector(".textinput").value;
        document.querySelector(".textinput").value = str.substring(
          0,
          str.length - 1
        );
        break;
      case "-":
        document.querySelector(".textinput").value += "-";
        break;
      case "+":
        document.querySelector(".textinput").value += "+";
        break;
      case "*":
        document.querySelector(".textinput").value += "*";
        break;
      case "/":
        document.querySelector(".textinput").value += "/";
        break;
      case "7":
        document.querySelector(".textinput").value += "7";
        break;
      case "8":
        document.querySelector(".textinput").value += "8";
        break;
      case "9":
        document.querySelector(".textinput").value += "9";
        break;
      case "(":
        document.querySelector(".textinput").value += "(";
        break;
      case "4":
        document.querySelector(".textinput").value += "4";
        break;
      case "5":
        document.querySelector(".textinput").value += "5";
        break;
      case "6":
        document.querySelector(".textinput").value += "6";
        break;
      case ")":
        document.querySelector(".textinput").value += ")";
        break;
      case "1":
        document.querySelector(".textinput").value += "1";
        break;
      case "2":
        document.querySelector(".textinput").value += "2";
        break;
      case "3":
        document.querySelector(".textinput").value += "3";
        break;
      case "=":
        let result = document.querySelector(".textinput").value;
        document.querySelector(".textinput").value = eval(result);
        break;
      case "0":
        document.querySelector(".textinput").value += "0";
        break;
      case ".":
        document.querySelector(".textinput").value += ".";
        break;
    }
  }
}

export { lModule };
