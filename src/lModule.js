class lModule {
  /*constructor(number) {
    this.number = number;
  }*/
  clean() {
    document.querySelector(".textinput").value = "";
  }

  back() {
    let str = document.querySelector(".textinput").value;
    document.querySelector(".textinput").value = str.substring(
      0,
      str.length - 1
    );
  }

  addValueMinus() {
    document.querySelector(".textinput").value += "-";
  }
}

export { lModule };
