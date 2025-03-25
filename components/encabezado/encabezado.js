import { cargarTablero } from "../tablero/tablero.js";
import { camposGrados } from "../tablero/consultas.js";

function consultarGrados(){
    fetch('http://localhost:3000/grados') 
    .then(response => response.json())
    .then(data => cargarEncabezadoDOM(data))
    .catch(error => console.error('Error:', error));

}

function cargarEncabezadoDOM(data){
    let DOM = document.querySelector('#root');
    DOM.appendChild(cargarEncabezado(data));    
}


function cargarEncabezado(dataGrados){

    let header = document.createElement('header');
    header.className = "header";

    let bannerPagAp = document.createElement('div');
    bannerPagAp.className = "banner-pag-app";

    let titApp = document.createElement('h1');
    titApp.className = "tit-app";
    titApp.textContent = "App-Asistencia";
    bannerPagAp.appendChild(titApp);

    let divLogB = document.createElement('div');
    divLogB.className = "d-log-b";

    let imgLog = document.createElement('img');
    imgLog.className = "img-log-b";
    imgLog.src = "https://cdn-icons-png.freepik.com/512/3847/3847733.png";
    divLogB.appendChild(imgLog);

    bannerPagAp.appendChild(divLogB);

    header.appendChild(bannerPagAp);

    
    /* ---------------------- */
    let navPag = document.createElement('nav');
    navPag.className = "nav-pag";

    let titUserNav = document.createElement('h2');
    titUserNav.className = "titulosNav tit-user-n";
    titUserNav.textContent = "Usuario:";
    navPag.appendChild(titUserNav);

    let userNav = document.createElement('h3');
    userNav.className = "datosUENav user-nav";
    userNav.textContent = "Usuario base de datos";
    navPag.appendChild(userNav);

    let titEmailNav = document.createElement('h2');
    titEmailNav.className = "titulosNav tit-email-n";
    titEmailNav.textContent = "Correo:";
    navPag.appendChild(titEmailNav);

    let emailNav = document.createElement('h3');
    emailNav.className = "datosUENav email-nav";
    emailNav.textContent = "correo base de datos";
    navPag.appendChild(emailNav);


    /* SELECT */
    
    let selectGrados = document.createElement('select');
    selectGrados.className = "select";

    let defaultOption = document.createElement('option');
    defaultOption.textContent = "Grados";
    defaultOption.value = "";
    selectGrados.appendChild(defaultOption);

    console.log(dataGrados);
    dataGrados.forEach((grado) => {
        let option = document.createElement('option');
        option.className = "select-options";
        option.textContent = grado.nombre;
        option.value = grado.id;
        selectGrados.appendChild(option);
    });

    let gradoPrevioSel = null;

    selectGrados.addEventListener('change', async function(event) {

        const selectedOption = Number(event.target.value);
        console.log("sss",selectedOption);

        const campGrados = await camposGrados();

        const gradosComparacion = campGrados.find(grados => grados.id === selectedOption);


        console.log(gradosComparacion);

        if (gradosComparacion) {

            let añadirDom = document.querySelector("#root");

            let tableroAnterior = document.querySelector(".sec-tab-dom");

            if (tableroAnterior){
                tableroAnterior.remove();
            }

            let secTableroDom = document.createElement('div');
            secTableroDom.className = "sec-tab-dom";
            secTableroDom.appendChild(cargarTablero(gradosComparacion.nombre));
            añadirDom.appendChild(secTableroDom);

            gradoPrevioSel = gradosComparacion;

            if(gradoPrevioSel != null){
                gradoPrevioSel = null;
                tableroAnterior.classList.add("ocultar");
            }
        
        } 

    });
    


    navPag.appendChild(selectGrados);


    /* FECHA */
    let titFecha = document.createElement('h2');
    titFecha.className = "titulosNav tit-fecha";
    titFecha.textContent = "Fecha:";
    navPag.appendChild(titFecha);

    let fechaInp = document.createElement('input');
    fechaInp.className = "fecha-inp";
    fechaInp.type = "date";
    navPag.appendChild(fechaInp);

    header.appendChild(navPag);


    return header;

}



export { consultarGrados }