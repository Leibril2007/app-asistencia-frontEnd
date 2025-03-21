import { cargarLogin } from "../login/login.js";

function cargarHecho(){
    let secHecho = document.createElement('section');
    secHecho.className = "sec-login";

    /* B FORM */    
    let formRegisto = document.createElement('form');
    formRegisto.className = "forms form-hecho";
    
    let imgOk = document.createElement('img');
    imgOk.className = "img-ok";
    imgOk.src = "https://cdn-icons-png.freepik.com/512/12224/12224482.png";

    formRegisto.appendChild(imgOk);

    let mensajeHecho = document.createElement('h2');
    mensajeHecho.className = "msj-hecho";
    mensajeHecho.textContent = "¡Registro guardado!";

    formRegisto.appendChild(mensajeHecho);

    let regLogin = document.createElement('div');
    regLogin.className = "reg-login";
    regLogin.textContent = "Ir al Login";

    regLogin.addEventListener("click", ()=>{
        if(!secHecho.classList.contains("ocultar")){
            secHecho.classList.add("ocultar");

            let añadirDOM = document.querySelector("#root");
            añadirDOM.appendChild(cargarLogin());
        }
    })

    formRegisto.appendChild(regLogin);


    secHecho.appendChild(formRegisto);

    return secHecho;
}

export { cargarHecho }