import {gradosBackend } from "./consultas.js";
import { cadaAlumno } from "./itemAlumnos.js";


function cargarTablero(grados, gradoId, alumnoGId){
    let sectionTablero = document.createElement('section');
    sectionTablero.className = "sec-tablero";

    let titGradoTab = document.createElement('h1');
    titGradoTab.className = "tit-grado-tab";
    titGradoTab.textContent = grados;
    sectionTablero.appendChild(titGradoTab);


    let divEncabezadoTab = document.createElement('div');
    divEncabezadoTab.className = "div-encabezado-tab";


    let titNombre = document.createElement('h2');
    titNombre.className = "titsEGenerales";
    titNombre.textContent = "CLAVE";
    divEncabezadoTab.appendChild(titNombre);

    let titApe = document.createElement('h2');
    titApe.className = "titsEGenerales";
    titApe.textContent = "NOMBRE COMPLETO";
    divEncabezadoTab.appendChild(titApe);

    let titEstado = document.createElement('h2');
    titEstado.className = "titsEGenerales";
    titEstado.textContent = "ASISTENCIA";
    divEncabezadoTab.appendChild(titEstado);


    sectionTablero.appendChild(divEncabezadoTab);

    /* ALUMNOS */

    let divAlumno = document.createElement('div');
    divAlumno.className = "div-alumno";


    if ( gradoId === alumnoGId ){
        console.log("verdadero");

        var idGradoSel = gradoId;


        gradosBackend(idGradoSel)
        .then(data => {
        
          data.forEach(cAlumno => {
            divAlumno.appendChild(cadaAlumno(cAlumno));
          });
        })

      
    }else{
        console.log("no se que estas haciendo");
    }

    sectionTablero.appendChild(divAlumno);

    return sectionTablero;

}

export { cargarTablero }