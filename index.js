import { cargarLogin } from "./components/login/login.js";
import { consultarGrados } from "./components/encabezado/encabezado.js";


let DOM = document.querySelector("#root");

function cargarDOM(maestros, email){
    
    consultarGrados(maestros, email);
}   

DOM.appendChild(cargarLogin());

export { cargarDOM }
