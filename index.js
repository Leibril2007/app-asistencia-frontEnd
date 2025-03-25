import { cargarLogin } from "./components/login/login.js";
import { consultarGrados } from "./components/encabezado/encabezado.js";


let DOM = document.querySelector("#root");

function cargarDOM(){

    consultarGrados();
}

DOM.appendChild(cargarLogin());

export { cargarDOM }
