import { cargarRegistro } from "../registrar/registrar.js";

function cargarLogin(){

    let secLogin = document.createElement('section');
    secLogin.className = "sec-login";

    /* B FORM */    
    let formLogin = document.createElement('form');
    formLogin.className = "forms form-login";

    /* BANNER */

    let divImgLogin = document.createElement('div');
    divImgLogin.className = "div-img-login";

    let imgLog = document.createElement('img');
    imgLog.className = "img-log";
    imgLog.src = "https://cdn.pixabay.com/photo/2020/09/03/12/25/school-supplies-5541102_1280.jpg";
    divImgLogin.appendChild(imgLog);

    formLogin.appendChild(divImgLogin);

    /* LOGO */
    let divLogLogin = document.createElement('div');
    divLogLogin.className = "d-log-login";

    let imgLogLogin = document.createElement('img');
    imgLogLogin.className = "img-log-login";
    imgLogLogin.src = "https://cdn-icons-png.freepik.com/512/3847/3847733.png";

    divLogLogin.appendChild(imgLogLogin);
    formLogin.appendChild(divLogLogin);

    /* Tit */
    let titBnv = document.createElement('h1');
    titBnv.className = "tit-bnv";
    titBnv.textContent = "¡Bienvenido!";

    formLogin.appendChild(titBnv);

    /* TTIT LOG */
    let titLog = document.createElement('h1');
    titLog.className = "tit-log";
    titLog.textContent = "Login";

    formLogin.appendChild(titLog);

    /* INPUTS */
    let inputUserEmail = document.createElement('input');
    inputUserEmail.className = "inputs inp-u-e";
    inputUserEmail.placeholder = "Usuario/Email";
    formLogin.appendChild(inputUserEmail);


    let inputPass = document.createElement('input');
    inputPass.className = "inputs inp-pass";
    inputPass.placeholder = "Password";
    inputPass.type = "password";
    formLogin.appendChild(inputPass);


    /* BTN LOGIN */

    let btnLogin = document.createElement('div');
    btnLogin.className = "btnsGlobal btn-login";
    btnLogin.textContent = "Ingresar";

    btnLogin.addEventListener("click", ()=>{

        if(!secLogin.classList.contains("ocultar")){
            secLogin.classList.add("ocultar");

            let añadirDOM = document.querySelector("#root");
            añadirDOM.appendChild(cargarRegistro());
        }

    })


    formLogin.appendChild(btnLogin);

    let btnRegistrate = document.createElement('div'); 
    btnRegistrate.className = "btnsGlobal btn-registrate";
    btnRegistrate.textContent = "Registrar";   

    btnRegistrate.addEventListener("click", () =>{

        if(!secLogin.classList.contains("ocultar")){
            secLogin.classList.add("ocultar");

            let añadirDOM = document.querySelector("#root");
            añadirDOM.appendChild(cargarRegistro());
        }
        
    })

    formLogin.appendChild(btnRegistrate); 



    secLogin.appendChild(formLogin);

    return secLogin;

}

export { cargarLogin }