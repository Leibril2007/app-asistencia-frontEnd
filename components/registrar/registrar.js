import { cargarLogin } from "../login/login.js";
import { cargarHecho } from "./ventanaHecho.js";

function cargarRegistro(){

    let secRegistro = document.createElement('section');
    secRegistro.className = "sec-login";

    /* B FORM */    
    let formRegisto = document.createElement('form');
    formRegisto.className = "forms form-reg";

    /* BANNER */

    let divImgLogin = document.createElement('div');
    divImgLogin.className = "div-img-login";

    let imgLog = document.createElement('img');
    imgLog.className = "img-log";
    imgLog.src = "https://merletto.net/wp-content/uploads/2020/01/10-%C3%BAtiles-escolares-que-no-pueden-faltar-en-la-mochila-3-1-1024x474.jpg";
    divImgLogin.appendChild(imgLog);

    formRegisto.appendChild(divImgLogin);

    /* TIT */
    let titReg = document.createElement('h1');
    titReg.className = "tit-reg";
    titReg.textContent = "Registrarse";
    formRegisto.appendChild(titReg);

    /* INPUTS */

    let inpUserR = document.createElement('input');
    inpUserR.className = "inputs inp-u-r";
    inpUserR.placeholder = "Usuario";
    formRegisto.appendChild(inpUserR);

    let inpEmailR = document.createElement('input');
    inpEmailR.className = "inputs inp-e-r";
    inpEmailR.placeholder = "Email";
    formRegisto.appendChild(inpEmailR);

    let inpPassR = document.createElement('input');
    inpPassR.className = "inputs inp-p-r";
    inpPassR.placeholder = "Password";
    inpPassR.type = "password";
    formRegisto.appendChild(inpPassR);


    /* BOTONES */
    let btnRegistrar = document.createElement('div');
    btnRegistrar.className = "btnsGlobal btn-registro";
    btnRegistrar.textContent = "Registrar";

    btnRegistrar.addEventListener("click", ()=>{

        if(!secRegistro.classList.contains("ocultar")){
            secRegistro.classList.add("ocultar");

            let añadirDOM = document.querySelector("#root");
            añadirDOM.appendChild(cargarHecho());
        }

    })

    formRegisto.appendChild(btnRegistrar);


    let btnVolver = document.createElement('div');
    btnVolver.className = "btnsGlobal btn-volver";
    btnVolver.textContent = "Regresar al login";

    btnVolver.addEventListener("click", ()=>{

        if(!secRegistro.classList.contains("ocultar")){
            secRegistro.classList.add("ocultar");

            let añadirDOM = document.querySelector("#root");
            añadirDOM.appendChild(cargarLogin());
        }

    })



    formRegisto.appendChild(btnVolver);



    secRegistro.appendChild(formRegisto);

    return secRegistro;

}

export { cargarRegistro }