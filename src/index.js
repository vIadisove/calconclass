import { lModule } from "./lModule";
import { bModule } from "./bModule";

let calcInteface = new bModule();
calcInteface.createElements();

let logic = new lModule("-");

document.querySelector(".minusButton").addEventListener("click", logic.aValue);
