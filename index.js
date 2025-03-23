import { cargarLogin } from "./components/login/login.js";
import { cargarEncabezado } from "./components/encabezado/encabezado.js";

let DOM = document.querySelector("#root");

function cargarDOM(){

    DOM.appendChild(cargarEncabezado());

}

DOM.appendChild(cargarLogin());

export { cargarDOM }