class lModule {
  logic(ev) {
    const value = ev.target.outerText;
    if (value === "back") {
      let str = document.querySelector(".textinput").value;
      document.querySelector(".textinput").value = str.substring(
        0,
        str.length - 1
      );
    } else if (value === "C") {
      document.querySelector(".textinput").value = "";
    } else if (value === "=") {
      let result = document.querySelector(".textinput").value;
      document.querySelector(".textinput").value = eval(result);
    } else {
      document.querySelector(".textinput").value += value;
    }
  }
}

export { lModule };
