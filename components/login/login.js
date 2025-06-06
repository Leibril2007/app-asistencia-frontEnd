import { cargarRegistro } from "../registrar/registrar.js";
import { cargarDOM } from "../../index.js";
import { consultarMaestos } from "../tablero/consultas.js";

export let idMaestro;
export let idGrado; 
export let idAlumno; 
export let recFecha;
export let recAsistencia; 
export let recObs;

import { agregarDatos } from "../tablero/funcionAsistencia.js";


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
    /* inputPass.type = "password"; */
    formLogin.appendChild(inputPass);


    /* BTN LOGIN */

    let btnLogin = document.createElement('div');
    btnLogin.className = "btnsGlobal btn-login";
    btnLogin.textContent = "Ingresar";

    btnLogin.addEventListener("click", async ()=>{


          document.querySelectorAll(".error").forEach(e => e.remove());
          let nombreOemail = inputUserEmail.value;
          let pass = inputPass.value;
        
          try {
            const response = await fetch('http://localhost:3000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: nombreOemail,
                password: pass
              })
            });
        
            const data = await response.json();
        
            if (!response.ok) {

              let errorMsg = document.createElement('p');
              errorMsg.className = "error";
              errorMsg.textContent = data.message || "Error al iniciar sesión";
              formLogin.appendChild(errorMsg);
              return;
            }
        
            
            const { id, nombre, email } = data.user;
            console.log("consEmail",id);
        
            cargarDOM(nombre, email);
        
            if (!secLogin.classList.contains("ocultar")) {
              secLogin.classList.add("ocultar");
            }
        
            idMaestro = id;
            console.log("maestro", idMaestro);
        
            agregarDatos(idMaestro, idGrado, idAlumno, recFecha, recAsistencia, recObs);
        
          } catch (error) {
            console.error("Error en login:", error);
        
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "Error al conectar con el servidor";
            formLogin.appendChild(errorMsg);
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